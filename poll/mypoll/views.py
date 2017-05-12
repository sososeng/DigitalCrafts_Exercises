from django.shortcuts import render
from mypoll.models import Poll, Category
from django.shortcuts import get_object_or_404
from django.template.response import TemplateResponse
from django import forms
from django import http
# Create your views here.



def vote(request):
	poll  = Poll.objects.get(id =1)
	if request.method == 'POST':
		if request.POST.get('your_vote') =="Python":
			poll.python_vote += 1
			poll.save()
			return http.HttpResponseRedirect('/result')
		if request.POST.get('your_vote') =="JavaScript":
			poll.javascript_vote += 1
			poll.save()
			return http.HttpResponseRedirect('/result')

	poll  = Poll.objects.get(id =1)
	context = {
		'question' : poll.question_text,
		'python' : poll.python_vote,
		'javascript' : poll.javascript_vote,
	} 
	return TemplateResponse(request,'vote.html', context)

def result(request):
	poll  = Poll.objects.get(id =1)
	context = {
	'question' : poll.question_text,
	'python' : poll.python_vote,
	'javascript' : poll.javascript_vote,
	} 
	return TemplateResponse(request,'result.html', context)


