st = input("Text? ")

for i in range(0,len(st)+2):
	print("*",end='')
print("")
print("*", end='')
print("{0}{1}".format(st,"*"))

for i in range(0,len(st)+2):
	print("*",end='')

print("")
