class Person:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
        self.unique_people = []

    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name,self.name))
        self.greeting_count = self.greeting_count + 1
        
        if other_person.name in self.unique_people:
            pass
        else:
            self.unique_people.append(other_person.name)



    def print_contact_info(self):
        print("{0}'s email: {1}, {2}'s phone number: {3}".format(self.name,self.email,self.name,self.phone))

    def add_friend(self, friend):
        self.friends.append(friend)

    def num_friends(self):
        print(len(self.friends))

    def num_unique_people_greeted(self):
        print(len(self.unique_people))

    def __str__(self):
        return 'Person: {} {} {}'.format(self.name, self.email, self.phone)



Sonny  = Person("Sonny", "sonny@hotmail.com", "483-485-4948")

Jordan = Person("Jordan","jordan@aol.com","495-486-3456")

Sonny.greet(Jordan)

Jordan.greet(Sonny)

Sonny.print_contact_info()
Jordan.print_contact_info()

Sonny.add_friend(Jordan)
Jordan.add_friend(Sonny)

Sonny.num_friends()
Sonny.num_unique_people_greeted()
