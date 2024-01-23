from django.conf import settings
from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.cache import cache

class ShutdownsIn_India_In_Old_Way(models.Model):
    state = models.CharField(max_length=200)
    district = models.CharField(max_length=1000)
    description = models.TextField()
    shutdown_start_date = models.DateTimeField(null=True, blank=True, default=None)
    shutdown_end_date = models.DateTimeField(null=True, blank=True, default=None)
    source = models.TextField()
    nature = models.CharField(max_length=15)
    network_effected = models.CharField(max_length=15)
    author = models.CharField(max_length=80, null=True)
    isVerified = models.BooleanField()
    active = models.BooleanField()
    lastModified = models.DateTimeField(auto_now=True, null=True)
    duration=models.CharField(max_length=10,null=True,blank=True)
    # lastModified=models.DateTimeField(blank=True, null=True)
    publishedDate = models.DateTimeField(null=True, blank=True, editable=True)
    # publishedDate = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ['-publishedDate']

    # def publishDate(self):
    #     self.publishedDate = timezone.now()
    #     self.save()

    def __str__(self):
        return str(self.description+" - "+str(self.publishedDate))

class TrendingVideos(models.Model):
    videoTitle = models.CharField(max_length=200)
    videoLink = models.TextField()
    uploadThumbnail = models.FileField(blank=True)
    postdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['postdate']

    def __str__(self):
        return self.videoTitle


class ShutdownVideos(models.Model):
    videoTitle = models.CharField(max_length=200)
    uploadThumbnail = models.FileField(blank=True)
    videoLink = models.TextField()
    postdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['postdate']

    def __str__(self):
        return self.videoTitle


class Popup(models.Model):
    header = models.TextField()
    uploadThumbnail = models.FileField(blank=True)
    videoLink = models.TextField()
    description = models.TextField()
    subdescription = models.TextField()
    link = models.TextField()
    postdate = models.DateTimeField(auto_now_add=True)
    isDisabled=models.BooleanField(default=True)

    class Meta:
        ordering = ['postdate']

    def __str__(self):
        return self.header


class LongestShutdowns(models.Model):
    days = models.IntegerField()
    # id=models.CharField(max_length=100, blank=True,primary_key=True, unique=True, default=uuid.uuid4)
    district = models.CharField(max_length=80)
    state = models.CharField(max_length=80)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    # link=models.TextField()
    description = models.TextField()
    postdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['days']

    def __str__(self):
        return self.district + self.state

class Footer(models.Model):
    description = models.TextField()

    def __str__(self):
        return self.description


class Grpahs(models.Model):
    description = models.TextField()
    title = models.TextField()
    graphid=models.IntegerField()

    def __str__(self):
        return self.title

class Faqs(models.Model):
    description = RichTextUploadingField(default="Write your faqs!")
    title = models.TextField()

    def __str__(self):
        return self.title


@receiver(post_save, sender=Faqs)
@receiver(post_save, sender=Footer)
@receiver(post_save, sender=LongestShutdowns)
@receiver(post_save, sender=Popup)
@receiver(post_save, sender=TrendingVideos)
@receiver(post_save, sender=ShutdownVideos)
@receiver(post_save, sender=ShutdownsIn_India_In_Old_Way)
@receiver(post_save, sender=Grpahs)
def clear_cache_post_save(sender, instance, **kwargs):
    """
    This method clears cache after saving the specific model.
    Using post_save signal to clear
    """
    cache.clear()