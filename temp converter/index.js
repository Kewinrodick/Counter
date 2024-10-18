
const textbox = document.getElementById("textbox");
const celsius = document.getElementById("tofahrenheit");
const fahrenheit = document.getElementById("tocelsius");
const result = document.getElementById("result");


let temp;

function convert(){

    temp = textbox.value;
    temp = Number(temp);


     if(celsius.checked){
        temp = 9/5 * temp + 32;
        result.textContent = `${temp.toFixed(1)}F°`;
     }
     else if (fahrenheit.checked){
         temp = (5/9) * (temp - 32);
       
         result.textContent = `${temp.toFixed(1)}C°`;
     }
     else{
        result.textContent = "Select Any Option!!!";
     }

}