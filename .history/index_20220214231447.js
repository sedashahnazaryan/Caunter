let counterDisplayElem = document.getElementById('input');
let counterMinusElem = document.getElementById('lower');
let counterPlusElem = document.getElementById('add');



counterPlusElem.addEventListener("click",()=>{
    
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};