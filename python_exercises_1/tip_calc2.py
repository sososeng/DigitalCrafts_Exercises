bill = input("Total bill amount? ")

level = input("Level of service? ")

split = input("Split how many ways? ")

tip = 0.0
if(level == "good"):
	tip = "{:.2f}".format(float(bill) * .20)

if(level == "fair"):
	tip = "{:.2f}".format(float(bill) * .15)

if(level == "bad"):
	tip = "{:.2f}".format(float(bill) * .1)

print ("Tip amount:", tip)
print ("Total bill amount: " , "{:.2f}".format(float(bill) + float(tip)))

print ("Amount per person: " , float("{:.2f}".format(float(bill) + float(tip))) / float(split) )