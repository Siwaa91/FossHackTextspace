from django.conf import settings
from django.db import models
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField
from django.core.cache import cache
from django.db.models.signals import post_save
from django.dispatch import receiver

class PolicyTracker(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    title = models.TextField()
    # source = models.TextField(blank=True)
    # description = models.TextField()
    description = RichTextUploadingField(default="Write your blog here!")

    url = models.URLField()
    published_date=models.DateTimeField(default=timezone.now, editable=False,blank=True)

    def __str__(self):
        return self.title

class RelevantResearch(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    title = models.TextField()
    # source = models.TextField(blank=True)
    # description = models.TextField()
    description = RichTextUploadingField(default="Write your blog here!")
    url = models.URLField()
    published_date=models.DateTimeField(default=timezone.now, editable=False,blank=True)

    def __str__(self):
        return self.title


class Conferences(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    title = models.TextField()
    # source = models.TextField(blank=True)
    # description = models.TextField()
    description = RichTextUploadingField(default="Write your blog here!")
    url = models.URLField()
    published_date=models.DateTimeField(default=timezone.now, editable=False,blank=True)

    def __str__(self):
        return self.title


class RtiAndOrders(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    title = models.TextField()
    # source = models.TextField(blank=True)
    # description = models.TextField()
    description = RichTextUploadingField(default="Write your blog here!")
    url = models.URLField()
    published_date=models.DateTimeField(default=timezone.now, editable=False,blank=True)

    def __str__(self):
        return self.title


class Litigation(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    title = models.TextField()
    # source = models.TextField(max_length=500)
    # description = models.TextField()
    description = RichTextUploadingField(default="Write your blog here!")
    url = models.URLField()
    published_date=models.DateTimeField(default=timezone.now, editable=False,blank=True)

    def __str__(self):
        return self.title

@receiver(post_save, sender=Litigation)
@receiver(post_save, sender=RtiAndOrders)
@receiver(post_save, sender=Conferences)
@receiver(post_save, sender=RelevantResearch)
@receiver(post_save, sender=PolicyTracker)
def clear_cache_post_save(sender, instance, **kwargs):
    cache.clear()