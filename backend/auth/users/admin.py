from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(CustomUser)
admin.site.register(Books)
@admin.register(Pages)
class PagesAdmin(admin.ModelAdmin):
    list_display = ('title', 'book', 'page_number', 'published')
    search_fields = ('title', 'content')