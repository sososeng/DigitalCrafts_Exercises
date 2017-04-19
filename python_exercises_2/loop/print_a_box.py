w = int(input("Width ?"))
h= int(input("Height ?"))


for b in range(1,w+1):
	print ("*", end='')
print("")


for i in range(1,h-1):
	print ("*", end='')
	for j in range(1,w-1):
		print (" ", end='')
	print ("*", end='')
	print("")

for b in range(1,w+1):
	print ("*", end='')
print("")