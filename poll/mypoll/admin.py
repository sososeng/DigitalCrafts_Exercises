from django.contrib import admin
from mypoll.models import Poll, Category

# Register your models here.
@admin.register(Poll)
class PollAdmin(admin.ModelAdmin):
	list_display = ('question_text', 'python_vote', 'javascript_vote')
	filter_horizontal = ('categories',)

@admin.register(Category)
class CatAdmin(admin.ModelAdmin):
	list_display = ('name', 'slug')
