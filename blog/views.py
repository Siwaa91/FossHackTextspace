from django.shortcuts import render

# Create your views here.
from django.views import generic
from blog.models import Post

class PostList(generic.ListView):
	queryset = Post.objects.filter(status=1).order_by('-created_on')
	template_name = "blog/post_list.html"
	paginate_by = 6

class PostDetail(generic.DetailView):
	model = Post
	template_name = 'blog/post_detail.html'
	
# def index(request):
#     return HttpResponse("Hello, world. You're at the Blog of InternetShutdowns.in")