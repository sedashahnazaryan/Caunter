let counterDisplayElem = document.getElementById('input');
let counterMinusElem = document.getElementById('lower');
let counterPlusElem = document.getElementById('add');



counterPlusElem.addEventListener("click",()=>{
    counterDisplayElem
}) ;

counterMinusElem.addEventListener("click",()=>{
    
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};