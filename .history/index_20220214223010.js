let counterDisplayElem = document.querySelector('.counter');
let counterMinusElem = document.querySelector('.lover');
let counterPlusElem = document.querySelector('.');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};