from django.conf import settings
from django.db import models
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField
from django.core.cache import cache
from django.db.models.signals import post_save
from django.dispatch import receiver

class News(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    news_date = models.DateTimeField(default=timezone.now)
    news_title = models.TextField()
    # source = models.TextField()
    # news_description = models.TextField()
    news_description = RichTextUploadingField(default="Write your news here!")
    news_url = models.URLField()
    published_date=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.news_title

@receiver(post_save, sender=News)
def clear_cache_post_save(sender, instance, **kwargs):
    """
    This method clears cache after saving the specific model.
    Using post_save signal to clear
    """
    cache.clear()