//counter program   
const decreasebtn = document.getElementById("decreasebtn");

const increasebtn = document.getElementById("increasebtn");

const restartbtn = document.getElementById("restartbtn");

const counter = document.getElementById("counter");

let count=0;

decreasebtn.onclick=function(){
    count--;
    counter.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    counter.textContent=count;
}
increasebtn.onclick=function(){
    count++;
    counter.textContent=count;
}