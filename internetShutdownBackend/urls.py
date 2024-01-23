"""internetShutdownBackend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))

    Urls: /map to independent map page
    /resources/downloads
    /
"""
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
 


admin.site.site_header = "sflc-internetshutdowns.in"
admin.site.site_title ="internetshutdowns.in"
admin.site.index_title = "sflc/internetshutdowns Admin"

 

urlpatterns = [
    #path('', views.index, name=ist-home),
    path('admin/', admin.site.urls),
    path('', include('map.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
	path('blog/', include('blog.urls')),
	path('news/', include('news.urls')),
	path('resources/', include('resources.urls')),
	path('static-page/', include('static_pages.urls')),
 

]

