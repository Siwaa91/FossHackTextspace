
from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from datetime import datetime
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.cache import cache

# Create your models here.
STATUS = (
	(0, "Draft"),
	(1, "Published"),
)

class Post(models.Model):
	title = models.CharField(max_length=200, unique=True)
	slug = models.SlugField(max_length=50, unique=True)
	author = models.ForeignKey(
		User, on_delete = models.CASCADE,
		related_name = 'blog_posts',
	)
	updated_on = models.DateTimeField(auto_now= True)
	content = RichTextUploadingField(default="Write your blog here!")
	created_on = models.DateTimeField(default=datetime.now())
	status = models.IntegerField(choices=STATUS, default=0)
	# tags = models.

	class Meta:
		ordering = ['-created_on']

	def __str__(self):
		return self.title

	def get_absolute_url(self):
		from django.urls import reverse
		return reverse("post_detail", kwargs={'slug': str(self.slug)})

@receiver(post_save, sender=Post)
def clear_cache_post_save(sender, instance, **kwargs):
	"""
	This method clears cache after saving the specific model.
	Using post_save signal to clear
	"""
	cache.clear()
