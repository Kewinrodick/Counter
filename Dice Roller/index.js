function rollDice(){

    const input = document.getElementById("noDice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for(let i=0 ; i<input; i++){
        let randnum = Math.floor(Math.random()*6)+1;
        values.push(randnum);
        images.push(`<img src="dice_images/${randnum}.png" alt="Dice: ${randnum}">`);
    }

    diceresult.textContent = `Dices : ${values.join(', ')}`;
    diceimages.innerHTML = images.join('');   
}