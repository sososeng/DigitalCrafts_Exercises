one = [ [1, 3, 1],
  		[2, 4, 1]]

two = [ [5, 2, 1],
  		[1, 0, 1]]

three=[ [0, 0, 0],
  		[0, 0, 0]]

for i in range (0, len(one)):
	for j in range(0,len(one)):
		three [i][j] = (one[i][j] + two[i][j])

print(three)