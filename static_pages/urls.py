from django.urls import path
from django.conf.urls.static import static
from django.conf import settings


from . import views

"""
/page/about: About Page
/page/donate: Donate Page
/page/lostvoices: Lost Voices page
"""

urlpatterns = [

    path('lostvoices/', views.index, name='lostvoices'),
    path('caa-protest/', views.caa_protest, name='caa-protest'),
    path('jammu-kashmir/', views.jammu_kashmir, name='jammu-kashmir'),
    path('shutdown-india/', views.shutdown_india, name='shutdown-india'),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)