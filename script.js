var bg = document.querySelector("#main>img");
var car = document.querySelector("#car");
// " mouse-x:ct-parallax[12] onmouse-y:ct-parallax[4] onmouse:ct-tilt[0.6]"
var h1 = document.querySelector("#middle-txt>h1")
var cir1 = document.querySelector("#cir1");
var cir2 = document.querySelector("#cir2");
var cir3 = document.querySelector("#cir3");
var cir4 = document.querySelector("#cir4");
var cir5 = document.querySelector("#cir5");
var cir6 = document.querySelector("#cir6");

var gold = document.querySelector("#gold");
var bronze = document.querySelector("#bronze");
var black = document.querySelector("#black");
var red = document.querySelector("#red");
var white = document.querySelector("#white");
var blue = document.querySelector("#blue");

cir1.addEventListener("click",function(){
    gold.style.left = "50%";
    bronze.style.left = "210%";
    black.style.left = "210%";
    red.style.left = "210%";
    white.style.left = "210%";
    blue.style.left = "210%";
    h1.innerHTML  = "aston martin db9";
})
cir2.addEventListener("click", function(){
    gold.style.left = "-150%";
    bronze.style.left = "50%";
    black.style.left = "210%";
    red.style.left = "210%";
    white.style.left = "210%";
    blue.style.left = "210%";
    h1.innerHTML  = "aston martin vanquish"
})
cir3.addEventListener("click", function(){
    gold.style.left = "-150%";
    bronze.style.left = "-150%";
    black.style.left = "50%";
    red.style.left = "210%";
    white.style.left = "210%";
    blue.style.left = "210%";
    h1.innerHTML  = "aston martin vanquish 2014 BE"
})
cir4.addEventListener("click", function(){
    gold.style.left = "-150%";
    bronze.style.left = "-150%";
    black.style.left = "-150%";
    red.style.left = "50%";
    white.style.left = "210%";
    blue.style.left = "210%";
    h1.innerHTML  = "aston martin vanquish 2014";
})
cir5.addEventListener("click", function(){
    gold.style.left = "-150%";
    bronze.style.left = "-150%";
    black.style.left = "-150%";
    red.style.left = "-150%";
    white.style.left = "50%";
    blue.style.left = "210%";
    h1.innerHTML  = "aston martin v12 vanquish";
})
cir6.addEventListener("click", function(){
    gold.style.left = "-150%";
    bronze.style.left = "-150%";
    black.style.left = "-150%";
    red.style.left = "-150%";
    white.style.left = "-150%";
    blue.style.left = "50%";
    h1.innerHTML  = "aston martin db11"
//     onEnter: self => text2.innerText = "view inventory",
//   onLeaveBack: self => text2.innerText = "view inventory",
})

var carimg = document.querySelector("#car>img"); 

// window.addEventListener("mousemove",function (dets) {
//     carimg.style.top = dets.y*0.03+"px";
//     carimg.style.left = dets*x*0.01+"px";

// })