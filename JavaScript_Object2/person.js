
class Person{
	constructor(name){
		this.name = name;
		this.friends=[];
	}

	addFriend(friend){
		this.friends.push(friend);
	}

	createGreeting(other){
		return 'Yo '+ other.name + '! from ' + this.name + '.';
	}

	greet(other){
		console.log(this.createGreeting(other));
	}

	lazyGreeting(other){
		var self = this;
		setTimeout(function () { self.greet(other)},2000);
	}

	createGreetingsForFriends(){
		var self = this;
		return this.friends.map(function(x){
			return  self.createGreeting(x);
		});
	}

}


var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');


alfie.lazyGreeting(anushka);

alfie.addFriend(anushka);
alfie.addFriend(henrique);

console.log(alfie.createGreetingsForFriends());