import matplotlib.pyplot as plot

def f(x):
    # put your code here
    if x %2 == 0:
    	return -1
    else:
    	return 1

xs = list(range(-5, 5))
ys = []
for x in xs:
	ys.append(f(x))

plot.bar(xs, ys)
plot.show()

