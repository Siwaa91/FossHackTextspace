from django.conf import settings
from django.db import models
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField
from django.core.cache import cache
from django.db.models.signals import post_save
from django.dispatch import receiver



class lostVoices(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    speaker = models.TextField()
    # description = models.TextField()
    description = RichTextUploadingField(default="Write your description here!")
    youtube_url = models.URLField()
    uploadThumbnail = models.FileField(blank=True)
    published_date=models.DateTimeField(default=timezone.now,editable=False)

    def __str__(self):
        return self.speaker


class JnKTrendingVideos(models.Model):
    videoTitle = models.CharField(max_length=200)
    videoLink = models.URLField()
    uploadThumbnail = models.FileField(blank=True)
    postdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['postdate']

    def __str__(self):
        return self.videoTitle



class JnKGraphics(models.Model):
    title = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    link = models.URLField()
    uploadImage = models.FileField(blank=True)
    postdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['postdate']

    def __str__(self):
        return self.title


class JnKResearch(models.Model):
    state = models.TextField(blank=True)
    district = models.TextField(blank=True)
    description = models.TextField(blank=True)
    startDate = models.DateTimeField(blank=True)
    link = models.URLField(blank=True)
    endDate = models.DateTimeField(blank=True)
    postdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['postdate']

    def __str__(self):
        return self.state

#models for CAA_Protest Page

class CAATrendingVideos(models.Model):
    videoTitle = models.CharField(max_length=200)
    videoLink = models.URLField()
    uploadThumbnail = models.FileField(blank=True)
    postdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['postdate']

    def __str__(self):
        return self.videoTitle


class CAAGraphics(models.Model):
    title = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    link = models.URLField()
    uploadImage = models.FileField(blank=True)
    postdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['postdate']

    def __str__(self):
        return self.title


class CAAResearch(models.Model):
    state = models.TextField(blank=True)
    district = models.TextField(blank=True)
    description = models.TextField(blank=True)
    startDate = models.DateTimeField(blank=True)
    endDate = models.DateTimeField(blank=True)
    postdate = models.DateTimeField(auto_now_add=True)
    link=models.URLField(blank=True)


    class Meta:
        ordering = ['postdate']

    def __str__(self):
        return self.state

@receiver(post_save, sender=CAAGraphics)
@receiver(post_save, sender=CAAResearch)
@receiver(post_save, sender=CAATrendingVideos)
@receiver(post_save, sender=JnKGraphics)
@receiver(post_save, sender=JnKResearch)
@receiver(post_save, sender=JnKTrendingVideos)
@receiver(post_save, sender=lostVoices)
def clear_cache_post_save(sender, instance, **kwargs):
    cache.clear()
