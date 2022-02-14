let counterDisplayElem = document.getElementById('input');
let counterMinusElem = document.getElementById('add');
let counterPlusElem = document.ge('lover');

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