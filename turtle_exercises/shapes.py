from turtle import *


def triangle():
	right(60)
	forward(100)

	right(120)
	forward(100)

	right(120)
	forward(100)

	

def square():
	forward(100)
	right(90)
	forward(100)
	right(90)
	forward(100)
	right(90)
	forward(100)



def pentagon():
	for i in range(5):
		forward(100)
		right(72)



def hexagon():
	for i in range(6):
		forward(100)
		right(60)



def octagon():
	for i in range(8):
		forward(100)
		right(45)


def star():
	for i in range(5):
	    forward(100)
	    right(144)
	
def draw_circle():	
	width(2)
	circle(10)
	
