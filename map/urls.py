from django.urls import include, path
from rest_framework import routers
from map import views
from django.conf.urls.static import static
from django.conf import settings



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', views.index, name='home'),
    path('getAllShutdowns/', views.getAllShutdowns, name='getallshutdowns'),
    path('getShutdowns/', views.getShutdowns, name='getshutdowns'),
    path('getStateWise/', views.recentShutdownStateWise, name='getstatewise'),
    path('share-experience/', views.shareExperience, name='shareExperience'),
    path('report-shutdown/', views.reportShutdown, name='report-shutdown'),
    path('get-graph-network/', views.getGraphNetwork, name='getGraphNetwork'),
    path('get-graph-nature/', views.getGraphNature, name='getGraphNature'),
    path('get-graph-time/', views.getGraphTime, name='getGraphTime'),
    path('get-graphs/', views.getGraphDetails, name='getGraphs'),
    path('get-active-shutdowns/', views.getActiveShutdowns, name='getActiveShutdowns'),
    path('get-popup/', views.getPopup, name='getPopup'),
    path('get-trending-videos/', views.getTrendingVideos, name='getTrendingVideos'),
    path('test/', views.test, name='test'),
    path('about/', views.about, name='about'),
    path('privacy-policy/', views.privacyPolicy, name='privacy-policy'),
    path('download-data/', views.exportShutdowns, name='download-data'),
    path('get-shutdowns-year/', views.getShutdownsYear, name='shutdowns-year'),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)