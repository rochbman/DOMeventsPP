let cookieEle = document.querySelector(".cookie");
let counter=0;

cookieEle.addEventListener("click", function(){

    counter++;

    const counterEle = document.querySelector(".counter");
    counterEle.innerHTML = counter;
    
})



let paraEle = document.querySelector(".magnify");
let smallButton =document.querySelector("#makeSmaller");
let bigButton =document.querySelector("#makeBigger")


smallButton.addEventListener("click",function(){
    paraEle.style.fontSize = "5px"
})

bigButton.addEventListener("click",function(){
    paraEle.style.fontSize = "25px"
})

let buttonColor= document.querySelector("#colorButton");
// let inputcolor = document.querySelector("input").value;
 

buttonColor.addEventListener("click",function(){
    let inputcolor = document.querySelector("#color").value;
    if(inputcolor){}
    document.body.style.backgroundColor=inputcolor
    //console.log(inputcolor)
})
