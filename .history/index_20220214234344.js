let counterDisplayElem = document.getElementById('input');
let counterMinusElem = document.getElementById('lower');
let counterPlusElem = document.getElementById('add');
let result=do


counterPlusElem.addEventListener("click",()=>{
    counterDisplayElem.value++;
}) ;

counterMinusElem.addEventListener("click",()=>{
    counterDisplayElem.value--;
});

