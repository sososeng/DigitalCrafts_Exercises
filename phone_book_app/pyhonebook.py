import pickle

d = {}

while True:
	print("Electronic Phone Book")
	print("=====================")
	print("1. Look up an entry")
	print("2. Set an entry")
	print("3. Delete an entry")
	print("4. List all entries")
	print("5. Save entries")
	print("6. Load save entries")
	print("0. Quit")

	ans = input("What do you want to do (0-6)? ")

	if(ans == "1"):
		name = input("Name: ")
		if name in d:
		   print("Found entry for {0} : {1}".format(name,d[name]))
		else:
			print("No entry found! ")

	if(ans == "2"):
		name = input("Name: ")
		phone = input("Phone Number: ")
		d[name] = phone
		print("Entry stored for {}".format(name))

	if(ans == "3"):
		name = input("Name: ")
		del d[name]
		print("Deleted entry for {}".format(name))

	if(ans == "4"):
		for key, value in d.items():
			print("Found entry for {0}: {1}".format(key,value))

	if(ans == "5"):
		# open the file in write mode (w)
		myfile = open('phonebook.pickle', 'wb')
		# dump the contents of the phonebook_dict into myfile - the open file
		pickle.dump(d, myfile)
		# close myfile
		myfile.close()

	if(ans == "6"):
		# open the file in read mode (r)
		myfile = open('phonebook.pickle', 'rb')
		# load the contents from the file and store it in the phonebook_dict variable
		d = pickle.load(myfile)

	if(ans == "0"):
		print("Bye.")

		break