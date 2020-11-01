from django.contrib import admin
from mysite.models import Blog, subscriber

# Register your models here.
class BlogAdmin(admin.ModelAdmin):
    list_display =('title', 'slug', 'status', 'created_date')
    list_filter = ("status",)
    search_fields =['title', 'message']
    prepopulated_fields = {'slug': ('title',)}
admin.site.register(Blog, BlogAdmin)

admin.site.register(subscriber)
