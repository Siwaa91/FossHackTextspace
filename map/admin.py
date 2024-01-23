from django.contrib import admin
from .models import*
from import_export.admin import ImportExportModelAdmin
from import_export import resources

class ShutdownsResources(resources.ModelResource):
    class Meta:
        model = ShutdownsIn_India_In_Old_Way
        exclude = ('author','id','active','lastModified')

# Register your models here.
# admin.site.register(ShutdownsIn_India_In_Old_Way)
@admin.register(ShutdownsIn_India_In_Old_Way)
class ShutdownsIn_India_In_Old_WayAdmin(ImportExportModelAdmin):
    pass

admin.site.register(TrendingVideos)
admin.site.register(Footer)
admin.site.register(ShutdownVideos)
admin.site.register(LongestShutdowns)
admin.site.register(Popup)
admin.site.register(Grpahs)
admin.site.register(Faqs)




