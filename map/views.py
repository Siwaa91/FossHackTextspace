from datetime import datetime
from json import JSONDecodeError

from django.shortcuts import render
from .models import *
from django.core import serializers

import json
from django.http import HttpResponse
from django.http import JsonResponse
from django.utils import timezone
from django.core.mail import send_mail
from string import Template
from collections import defaultdict
from .admin import ShutdownsResources
from collections import Counter
import ast


# from django.views.decorators.cache import cache_control

years_list = list(range(2012, datetime.now().year + 1))

def index(request):

    # Uncomment the line below if you are using shutdown videos snippet on homepage.
    # And add this in return part of this view.
    # shutdownVideos = ShutdownVideos.objects.all().order_by('-postdate')[:3]

    recentShutdown = ShutdownsIn_India_In_Old_Way.objects.all().order_by('-publishedDate')[:10]
    longestShutdown = LongestShutdowns.objects.all().order_by("-days")[:3]
    totalStats = ShutdownsIn_India_In_Old_Way.objects.all().count()

    return render(request, 'map/index.html', {'totalStats': totalStats, 'recentShutdown': recentShutdown, "longestshutdown": longestShutdown})

def getGraphNetwork(request):

    #code for filtering yearwise list from networkaffected
    network_effected_types = ["mobile", "both", "na", "broadband"]
    shutdownsObject = ShutdownsIn_India_In_Old_Way.objects.all()

    # Initialize a nested dictionary to store the data year-wise
    yearwise_data = defaultdict(dict)

    for i in years_list:
        for network_type in network_effected_types:
            try:
                count = shutdownsObject.filter(publishedDate__year=i, network_effected=network_type).count()
                yearwise_data[i][network_type] = count
            except:
                print(f"error in {i} {network_type}")
                yearwise_data[i][network_type] = 0

    return JsonResponse({"msg":yearwise_data}, status=200)


def getGraphNature(request):

    res = {}

    shutdownsObject = ShutdownsIn_India_In_Old_Way.objects.all()

    for i in years_list:
        try:
            res[i] = {
                "preventive": shutdownsObject.filter(publishedDate__year=i, nature="preventive").count(),
                "reactive": shutdownsObject.filter(publishedDate__year=i, nature="reactive").count(),
            }
        except:
            res[i] = {"preventive": 0, "reactive": 0}

    return JsonResponse({"msg": res}, status=200)


def getGraphTime(requests):
    duration_data = defaultdict(dict)

    for year in years_list:
        durations = {
            "lte_24": 0,
            "gte_24_lte_72": 0,
            "gte_72": 0,
            "none": 0,
        }

        for shutdown in ShutdownsIn_India_In_Old_Way.objects.filter(publishedDate__year=year):
            if shutdown.duration != "None":
                duration = int(shutdown.duration)
                if duration <= 24:
                    durations["lte_24"] += 1
                elif 24 < duration <= 72:
                    durations["gte_24_lte_72"] += 1
                elif duration > 72:
                    durations["gte_72"] += 1
            else:
                durations["none"] += 1

        duration_data[year] = durations

    # Fill in zeros for years without any entries
    for year in set(years_list) - set(duration_data.keys()):
        duration_data[year] = {"lte_24": 0, "gte_24_lte_72": 0, "gte_72": 0, "none": 0}

    return JsonResponse({"duration_data": dict(duration_data)},status=200)

def getGraphDetails(request):

    res = Grpahs.objects.all()
    if res:
        data = serializers.serialize("json", res)
        return JsonResponse({"msg":data}, status=200)
    return JsonResponse({}, status = 404)

def getActiveShutdowns(request):
    activeShutdown=ShutdownsIn_India_In_Old_Way.objects.filter(shutdown_end_date__gte=datetime.now()).order_by('-shutdown_end_date')
    if activeShutdown:
        data = serializers.serialize("json", activeShutdown)
        return JsonResponse({"data":data}, status=200)
    return JsonResponse({},status=404)

def getTrendingVideos(request):
    trendingVideos = TrendingVideos.objects.all().order_by('-postdate')[:3]
    if trendingVideos:
        data = serializers.serialize("json", trendingVideos)
        return JsonResponse({"data":data}, status=200)
    return JsonResponse({},status=404)


def getShutdowns(request):
    state = request.GET.get("state")
    obj = ShutdownsIn_India_In_Old_Way.objects.filter(state=state)
    district_total_number = obj.count()

    # Assuming `district` is a comma-separated string in the model
    obj = ShutdownsIn_India_In_Old_Way.objects.filter(state=state).values_list('district', flat=True)

    # Extracting districts from the string representation
    all_districts = [district.strip() for districts in obj for district in ast.literal_eval(districts.replace("', '", "','"))]

    # Count occurrences of each district
    district_counts = Counter(all_districts)

    # Convert the Counter results to the desired list format
    district_counts_list = [{"fields": {"state": state, "district": district, "totalNumber": count}} for district, count in district_counts.items()]

    district_counts_list_sorted = sorted(district_counts_list, key=lambda x: x['fields']['totalNumber'], reverse=True)

    # Convert the sorted list of dictionaries to JSON
    data = json.dumps(district_counts_list_sorted)

    return JsonResponse({"msg": data, "total": district_total_number}, status=200)


def getAllShutdowns(request):
    obj = ShutdownsIn_India_In_Old_Way.objects.all()

    # Use Counter to count occurrences of each state
    states_data = Counter(entry.state for entry in obj)

    # Convert the Counter results to the desired list format
    states_counts_list = [{"fields": {"state": state, "totalNumber": count}} for state, count in states_data.items()]

    # Sort the list in descending order by totalNumber
    states_counts_list_sorted = sorted(states_counts_list, key=lambda x: x['fields']['totalNumber'], reverse=True)

    # Convert the sorted list of dictionaries to JSON
    data = json.dumps(states_counts_list_sorted)

    return JsonResponse({"msg": data}, status=200)

def getPopup(request):
    try:
        popup = Popup.objects.all()
        popup = serializers.serialize("json",popup)
        if popup:
            return JsonResponse({"msg":popup}, status=200)
        else:
            return JsonResponse({"msg":"No data found"}, status=400)
    except Exception as e:
        return JsonResponse({"msg":"Model 'Popup' not migrated or found "+str(e)}, status=500)

def recentShutdownStateWise(request):
    state = request.GET.get("state")
    obj = ShutdownsIn_India_In_Old_Way.objects.filter(state=state).order_by('-publishedDate')[:20]
    data = serializers.serialize("json", obj)
    return JsonResponse({"msg": data}, status=200)


def getTotalStateWise(request):
    state = request.GET.get("state")
    obj = ShutdownStateWise.objects.get(state=state)
    data = serializers.serialize("json", obj.totalNumber)
    return JsonResponse({"msg": data}, status=200)


def shareExperience(request):
    """
    this function will send share experience related form data and here
      send_mail(
        'Subject of mail',
        'Body of mail',
        'From which domain it will be send  example: internetshutdwowns@sflc.in',
        ['to@sflc.in'],
        fail_silently=False, this is a boolean value which says whether your mail should fail
        or raise some exception if it fails to send mail.
    )
    """
    name = request.GET.get("form-name")
    locality = request.GET.get("form-locality")
    date = request.GET.get("form-date")
    detail = request.GET.get("form-detail")
    email = request.GET.get("form-email")
    experience = request.GET.get("form-experience")

    try:
        send_mail(
            'Shared user experience',
            Template('Name: $name , Locality: $locality , Date: $date, Detail: $detail , Experience: $experience, Email: $email').substitute(name=name, locality=locality, date=date, detail=detail, experience=experience, email=email),
            'internetshutdowns@sflc.in',
            ['internetshutdowns@sflc.in'],
            fail_silently=False,
        )
        status = 200
    except:
        status = 400
    data = "done"

    return JsonResponse({"msg": data}, status=status)


def reportShutdown(request):
    """
    this function will send report shutdown related form data and in share your experience
    function you can read working of this function as well
    """
    state = request.GET.get("form-state")
    district = request.GET.get("form-district")
    locality = request.GET.get("form-locality")
    source = request.GET.get("form-source")
    date = request.GET.get("form-date")
    description = request.GET.get("form-description")
    email = request.GET.get("form-email")
    msg=Template('State: $state , District: $district , Locality: $locality , Source: $source , Date: $date, Description: $description , Email: $email').substitute(state=state, district=district, locality=locality, source=source, date=date, description=description, email=email)
    try:
        send_mail(
            'Reported internet shutdown',
            msg,
            'internetshutdowns@sflc.in',
            ['internetshutdowns@sflc.in'],
            fail_silently=False,
        )
        status = 200
    except Exception as e:
        print(e)
        status = 400

    data = "done"

    return JsonResponse({"msg": data}, status=status)


def test(request):
    """
    It is just for testing purpose to test any html or anything else
    """
    return render(request,"test.html")

def about(request):
    return render(request,'map/about.html',{'faqs':Faqs.objects.all()})

def privacyPolicy(request):
    return render(request,'map/privacy.html')

def exportShutdowns(request):
    shutdownsData = ShutdownsResources()
    data =  shutdownsData.export()
    res = HttpResponse(data.csv, content_type='text/csv')
    res['Content-Diposition'] = 'attachement; filename="ShutdownsData.csv"'
    return res

def getShutdownsYear(request):
    shutdowns_data = {}
    shutdownsObject = ShutdownsIn_India_In_Old_Way.objects.all()

    for i in years_list:
        count = shutdownsObject.filter(publishedDate__year=i).count()
        shutdowns_data[i] = count

    return JsonResponse({"msg": shutdowns_data}, status=200)
