from django.db import models

# Create your models here.


class Category(models.Model):
	name = models.CharField(max_length=200)
	slug = models.CharField(max_length=200)

class Poll(models.Model):
	question_text = models.CharField(max_length=200)
	python_vote = models.IntegerField(default=0)
	javascript_vote = models.IntegerField(default=0)
	categories = models.ManyToManyField(Category)


