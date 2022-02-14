let counterDisplayElem = document.getElementById('input');
let counterMinusElem = document.getElementById('lower');
let counterPlusElem = document.getElementById('add');

let count = 0;

// updateDisplay();

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