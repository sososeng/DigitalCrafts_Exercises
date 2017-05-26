function Card(point, suit){
	this.point = point;
	this.suit = suit;
}


Card.prototype.getImageUrl = function(){
	return 'images/'+parseInt(this.point)+'_of_'+this.suit+'.png';
};

var myCard = new Card(5, 'diamonds');
console.log(myCard.point);

console.log(myCard.suit);

console.log(myCard.getImageUrl());


function Hand(){
	this.cards = [];
}

Hand.prototype.addCard = function(card){
	this.cards.push(card);
};
Hand.prototype.getPoints = function(){
		let myCards = this.cards.slice(0);
 		myCards.sort(function(a, b) {
    		return b.point - a.point;
  		});
  		return myCards.reduce(function(sum, card) {
    		let point = card.point;
    		if (point > 10) {
      			point = 10;
   			}
    		if (point === 1 && sum < 11) {
      			point = 11;
    		}
    		return sum + point;
  		}, 0);
};

var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));
console.log(myHand.getPoints());


function Deck(){
	this.cards = [];
	for (let i = 1; i <= 13; i++) {
		    this.cards.push({ point: i, suit: 'spades' }); 
		    this.cards.push({ point: i, suit: 'hearts' });
		    this.cards.push({ point: i, suit: 'clubs' });
		    this.cards.push({ point: i, suit: 'diamonds' });
	}

	let j, x, i;
	    for (i = this.cards.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = this.cards[i - 1];
	        this.cards[i - 1] = this.cards[j];
	        this.cards[j] = x;
	    }

}

Deck.prototype.shuffle = function(){
		let j, x, i;
	    for (i = this.cards.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = this.cards[i - 1];
	        this.cards[i - 1] = this.cards[j];
	        this.cards[j] = x;
	    }
}

Deck.prototype.numCardsLeft = function(){
	return this.cards.length;
}

Deck.prototype.draw = function(){
	return this.cards.pop();
}

var myDeck = new Deck();
console.log(myDeck.draw());
console.log(myDeck.draw());
myDeck.shuffle();
console.log(myDeck.numCardsLeft());