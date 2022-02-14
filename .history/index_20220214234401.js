let counterDisplayElem = document.getElementById('input');
let counterMinusElem = document.getElementById('lower');
let counterPlusElem = document.getElementById('add');
let result=document.getElementById('')


counterPlusElem.addEventListener("click",()=>{
    counterDisplayElem.value++;
}) ;

counterMinusElem.addEventListener("click",()=>{
    counterDisplayElem.value--;
});

