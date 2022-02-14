let counterDisplayElem = document.getElementById('input');
let counterMinusElem = document.getElementById('');
let counterPlusElem = document.getElementById('lover');

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