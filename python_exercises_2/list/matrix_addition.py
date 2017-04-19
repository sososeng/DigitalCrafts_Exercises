one = [ [1, 3],
  		[2, 4]]

two = [ [5, 2],
  		[1, 0]]

three=[ [0,0],
		[0,0]]

for i in range (0, len(one)):
	for j in range(0,len(one)):
		three [i][j] = (one[i][j] + two[i][j])

print(three)