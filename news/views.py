from django.shortcuts import render
from django.http import HttpResponse
from django.utils import timezone
from news.models import News

def index(request):
    posts = News.objects.filter(news_date__lte=timezone.now()).order_by('-news_date')
    return render(request, 'news/innews.html', {'posts': posts})