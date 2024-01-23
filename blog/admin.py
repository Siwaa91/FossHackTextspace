from django.contrib import admin
from blog.models import Post

# Register your models here.
class PostAdmin(admin.ModelAdmin):
	list_display = ('title', 'slug', 'status', 'created_on')
	list_filter = ('status',)
	search_fields = ['title', 'content']
	prepopulated_fields = {'slug': ('title', )}
	date_heirarchy = 'updated_on'
	ordering = ['status', 'updated_on']

admin.site.register(Post, PostAdmin)