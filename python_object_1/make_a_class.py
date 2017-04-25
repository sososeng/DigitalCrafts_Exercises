class Vehicle:
	def __init__(self, make, model, year):
		self.make = make
		self.model = model
		self.year = year

	def print_info(self):
		print("{0} {1} {2}".format(self.year,self.make,self.model))


car = Vehicle('Nissan', 'Leaf', 2015)
print(car.make, car.model, car.year)
car.print_info()