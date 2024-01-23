from django.shortcuts import render
from django.http import HttpResponse
from django.utils import timezone
from map.models import *
import dateutil.parser
from .models import *
import pytz
from django.core.cache import cache


def index(request):
    posts = lostVoices.objects.filter(date__lte=timezone.now()).order_by('-date')
    return render(request, 'static_pages/lost_voices.html', {'posts': posts})

def caa_protest(request):
    graphics = CAAGraphics.objects.all().order_by("-postdate")[:3]
    research = CAAResearch.objects.all().order_by("-postdate")[:3]
    trendingVideos = CAATrendingVideos.objects.all().order_by('-postdate')[:3]
    return render(request, 'caa_protest.html', { "trendingVideos": trendingVideos, "graphics": graphics, "research": research})


def jammu_kashmir(request):
    shutdowns = ShutdownsIn_India_In_Old_Way.objects.filter(state="Jammu and Kashmir").order_by("-publishedDate")
    shutdowns_data={}
    for i in shutdowns:
        try:
            shutdowns_data[i.publishedDate.year]+=1
        except:
            shutdowns_data[i.publishedDate.year] = 1

    graphics = JnKGraphics.objects.all().order_by("-postdate")[:3]
    research = JnKResearch.objects.all().order_by("-postdate")[:3]
    trendingVideos = JnKTrendingVideos.objects.all().order_by('-postdate')[:3]
    return render(request, 'jammu_kashmir.html', {"shutdowns_data": shutdowns_data, "mostShutdowns": shutdowns.count(), "trendingVideos": trendingVideos, "graphics": graphics, "research": research})


def shutdown_india(request):
    if request.user.is_superuser or request.user.is_staff:
        if request.method == 'POST':
            author = request.POST.get("author")
            state = request.POST.get("state")
            district = request.POST.getlist("district")
            description = request.POST.get("description")
            start_date = dateutil.parser.parse(request.POST.get("startDate")).astimezone(pytz.timezone('Asia/Kolkata'))
            verified = request.POST.get('verified') == "on"
            pub_date = dateutil.parser.parse(request.POST.get('pubDate')).astimezone(pytz.timezone('Asia/Kolkata'))
            duration = int(request.POST.get('duration')) if int(request.POST.get('duration')) >= 0 else "None"
            end_date = dateutil.parser.parse(request.POST.get("endDate")).astimezone(pytz.timezone('Asia/Kolkata'))
            network_effected = request.POST.get("networkEffected")
            nature = request.POST.get("nature")
            source = request.POST.get("source")

            try:
                obj = ShutdownsIn_India_In_Old_Way.objects.create(
                    author=author, state=state, district=district, description=description,
                    shutdown_start_date=start_date, active=True, shutdown_end_date=end_date,
                    source=source, nature=nature, network_effected=network_effected,
                    isVerified=verified, duration=duration, publishedDate=pub_date
                )
                obj.save()
            except Exception as e:
                print(f"Error: {e}")

            cache.clear()
        return render(request, 'shutdownsIndia.html')
    return HttpResponse(''' <center style="margin-top:70px;"><H1>Please login then try </H1></center> ''')
