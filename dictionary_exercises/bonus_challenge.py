def word_histogram(st):
	dic = {}
	st1 = st.split(" ")
	for x in st1:
		x =x.lower()	
		if x in dic:
			dic[x] = dic[x]+1

		else:
			dic[x] = 1
	li =[]		

	for w in sorted(dic, key = dic.get,reverse=True):
		li.append(str(w) + " "+ str(dic[w]))
		
	print(li[0])
	print(li[1])
	print(li[2])


word_histogram("To be or not to be")
