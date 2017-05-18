function factors(num){

  let factors = [];
  let quotient = 0;

  for(let i = 1; i <= num; i++){
    quotient = num/i;

    if(quotient === Math.floor(quotient)){
      factors.push(i); 
    }
  }
  return factors;

}

console.log(factors(9));