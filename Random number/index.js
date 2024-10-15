let min = 1;
let max = 100;

let number = Math.floor(Math.random()*(max-min+1))+min;

let guess;
let running = true;
let attempts=0;

while(running){
    
    guess = window.prompt(`Enter the Guess [${min}-${max}]`);
    
    guess = Number(guess); 
    if(isNaN(guess)){
        window.alert("INVALID GUESS!");
    }
    else if(guess > max || guess < min){
        window.alert(`INVALID GUESS [${min}-${max}]!`);
    }
    else{
        attempts++;
         if (guess > number){
            window.alert("TOO HIGH!");
        }
        else if(guess < number){
            window.alert("TOO LOW!");
        }
        else{
            window.alert(`You Guessed Right!! attempts : ${attempts}`);
            running=false;
        }
 100
    } 
}

