from django.contrib import admin
from static_pages.models import lostVoices,JnKGraphics,JnKResearch,JnKTrendingVideos,CAAGraphics,CAAResearch,CAATrendingVideos

# Register your models here.
admin.site.register(lostVoices)
admin.site.register(JnKTrendingVideos)
admin.site.register(JnKResearch)
admin.site.register(JnKGraphics)
admin.site.register(CAATrendingVideos)
admin.site.register(CAAResearch)
admin.site.register(CAAGraphics)
