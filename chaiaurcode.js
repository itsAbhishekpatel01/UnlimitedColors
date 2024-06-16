body = document.querySelector("body");
// console.log(body);


start = document.querySelector("#start");
stop = document.querySelector("#stop");
// console.log(stop);

let timer;
start.addEventListener("click", function(){
    console.log("Timmer started");
    if(!timer)
    timer = setInterval(changeColor,1000);
});
stop.addEventListener("click", function(){
    console.log("Timer stopped");
    clearInterval(timer);
    timer = null;
});




function changeColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
    console.log("Work in progress"+Date.now());
}
