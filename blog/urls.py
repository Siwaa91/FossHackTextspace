from django.urls import path
from blog.feeds import LatestPostsFeed
from blog import views

urlpatterns = [

    path('feed/atom', LatestPostsFeed(), name='post_feed'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path('', views.PostList.as_view(), name='blog_home'),

]