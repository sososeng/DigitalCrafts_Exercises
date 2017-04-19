st = "lbh zhfg hayrnea jung lbh unir yrnearq"

l = list(st)
st1=[]
for i in range(0,len(l)):
	if l[i] != " ":
		temp = ((ord(l[i]) -96) -13 ) % 26
		st1.append(chr(temp + 96))
	else:
		st1.append(" ")
print("".join(st1))