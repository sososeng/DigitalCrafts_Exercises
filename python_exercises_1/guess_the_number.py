sec = 5


 
print ("I am thinking of a number between 1 and 10.")

while True:
	guess = 5
	while True:
		print("you have {0} guesses left.".format(guess))
		num = int(input("What's the number? "))
		guess = guess -1
		if num == sec:
			print ("Yes! You Win!")
			break
		else:
			if num > sec:
				print (num ,"is to hight.")
			else:
				print(num, "is to low.")

		if guess == 0:
			print ("You ran out of guesses!")
			break

	again = input("Do you want to play again (Y or N)? ")
	if again == "N":
		print ("Bye!")
		break