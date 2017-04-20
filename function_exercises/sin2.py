import matplotlib.pyplot as plot
import math 
from numpy import arange

def f(x):
    # put your code here
    return math.sin(x)

xs = arange(-5, 6, 0.1)
ys = []
for x in xs:
	ys.append(f(x))

plot.plot(xs, ys)
plot.show()
