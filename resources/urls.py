from django.urls import path

from . import views

urlpatterns = [
    path('Policy_Tracker', views.policytracker, name='policytracker'),
    path('Research', views.research, name='research'),
    path('Litigation', views.litigation, name='litigation'),
    path('Conferences', views.conferences, name='conferences'),
    path('RTI_Orders', views.rti, name='rti'),
                       
]