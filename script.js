const grey=document.querySelector("#grey");
const white=document.querySelector("#white");
const yellow=document.querySelector("#yellow");
const blue=document.querySelector("#blue");
const body=document.querySelector("body");

// console.log(grey,white,yellow,blue,body);

grey.addEventListener("click",function(){
    body.style.backgroundColor="grey";
})
yellow.addEventListener("click",function(){
    body.style.backgroundColor="yellow";
});
white.addEventListener("click",function(){
    body.style.backgroundColor="white";
});
blue.addEventListener("click",function(){
    body.style.backgroundColor="blue";
});