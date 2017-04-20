
def ask ():
	boo = True
	while boo:
		st = input ("Do you want to play again (Y or N)?")
		if st == "Y":
			return True
		elif st == "N":
			return False

		else:
			print("Invalid input")

ask()
