from django.db import models

# Create your models here.

class Poll(models.Model):
	question_text = models.CharField(max_length=200)
	
	python_vote = models.IntegerField(default=0)
	javascript_vote = models.IntegerField(default=0)