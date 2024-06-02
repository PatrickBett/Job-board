from django.contrib import admin
from .models import Job

# Register your models here.

class JobAdmin(admin.ModelAdmin):
    # what to be displayed in the admin
    list_display = ('title','budget')
    # it creates a search button on the admin page where you can search based on the list you give below
    search_fields = ('title',)
    # The list_filter attribute adds a filter sidebar to the admin interface, allowing you to filter the list view by the specified fields.
    list_filter = ('date_created',)

admin.site.register(Job, JobAdmin)