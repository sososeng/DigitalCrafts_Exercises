l = ["aa", "ee", "ii", "oo", "uu"]
l1 = ["aaa", "eee", "iii", "ooo", "uuu"]

St= "eatting good cheese with spoon."

for i in range(0,len(l)):
	St = St.replace(l[i],l1[i])

print (St)
