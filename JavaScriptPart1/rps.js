function rockPaperScissors(choice1, choice2){

if(choice1 === choice2){
	return "draw";
}

if(choice1==="rock"){
        if(choice2==="scissors"){
            return "player1 wins";
        }
        else{
            return "player2 wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "player1 wins";
        }
        else{
            return "player2 wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "player2 wins";
        }
        else{
            return "player1 wins";
        }
    }
}

console.log(rockPaperScissors('rock', 'scissors'));

console.log(rockPaperScissors('rock', 'paper'));

console.log(rockPaperScissors('paper', 'paper'));