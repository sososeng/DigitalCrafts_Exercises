

def word_histogram(st):
	dic = {}
	st1 = st.split(" ")
	for x in st1:
		x =x.lower()	
		if x in dic:
			dic[x] = dic[x]+1

		else:
			dic[x] = 1

	print(dic)


word_histogram("To be or not to be")
