import matplotlib.pyplot as plot
import math 


def f(x):
    # put your code here
    return x +1

c = int(input("Celsius? "))


xs = list(range(c, int(c *(9/5)+ 32)))
ys = []
for x in xs:
	ys.append(f(x))





plot.plot(xs, ys)
plot.show()
