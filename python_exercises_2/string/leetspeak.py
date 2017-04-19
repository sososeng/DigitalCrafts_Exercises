string = "asdfweqrASFASDFWerqw"

leet = ["A4", "E3", "G6", "I1", "O0", "S5", "T7"]
 
string1 = list(string.upper())

for i in range(0, len(string1)):
	for j in range(0,len(leet)):
		temp = leet[j]
		if string1[i] == temp[0]:
			string1[i]= temp[1]
			
		
print ("".join(string1))