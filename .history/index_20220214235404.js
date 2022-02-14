let counterDisplayElem = document.getElementById('input');
let counterMinusElem = document.getElementById('lower');
let counterPlusElem = document.getElementById('add');
let result=document.getElementById('result');
let num1 =document.getElementById('num1');
let num2 =document.getElementById('num2');
let submit=document.getElementById('submit');



counterPlusElem.addEventListener("click",()=>{
    counterDisplayElem.value++;
}) ;

counterMinusElem.addEventListener("click",()=>{
    counterDisplayElem.value--;
});

function curry(a){
    return function(b){
       return a+b;
    }
  
};
addEventListener