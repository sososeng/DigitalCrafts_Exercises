import matplotlib.pyplot as plot

def f(x):
    # put your code here
    return x * x

xs = list(range(-100, 100))
ys = []
for x in xs:
	ys.append(f(x))

plot.plot(xs, ys)
plot.show()

