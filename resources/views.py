from django.shortcuts import render
from django.http import HttpResponse
from django.utils import timezone
from resources.models import RelevantResearch,PolicyTracker,Litigation,RtiAndOrders,Conferences


def research(request):
    posts = RelevantResearch.objects.filter().order_by('-date')
    return render(request, 'resources/releventResearch.html', {'posts': posts})


def policytracker(request):
    posts = PolicyTracker.objects.filter().order_by('-date')
    return render(request, 'resources/policy-tracker.html', {'posts': posts})


def litigation(request):
    posts = Litigation.objects.filter().order_by('-date')
    return render(request, 'resources/litigation.html', {'posts': posts})

def conferences(request):
    posts = Conferences.objects.filter().order_by('-date')
    return render(request, 'resources/conferences.html', {'posts': posts})

def rti(request):
    posts = RtiAndOrders.objects.filter().order_by('-date')
    return render(request, 'resources/rti.html', {'posts': posts})