n = 4
runner = n
runner2 = 1
for i in range (0,n):	
	
	for j in range (runner,0,-1):
		print(" ",end="")
	runner=runner-1

	for k in range (0,runner2):
		print("*", end="")
	runner2=(runner2 + 2) 

	print("")