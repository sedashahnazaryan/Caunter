let counterDisplayElem = document.getElementById('input');
let counterMinusElem = document.getElementById('lower');
let counterPlusElem = document.getElementById('add');
let result=document.getElementById('result');
let num1 =document.getElementById('num1');
let num2 =document.getElementById('num2');
let submit=document.getElementById('submit');
let number = 0;



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
submit.addEventListener('click',()=>{
result.value=curry(+num1.value)(+num2.value);

});
function fibonacci(num){
    if(num<=1){
        return num;
        
    }
      return fibonacci(num-1)+fibonacci(num-2);
    //   0,1,1,2,3,5,8,13,21-8րդ թիվն է
}
document.getElementById("add-fibo").addEventListener('click',()=>{
    document.getElementById('result-fibo').value+=fibonacci(number);
    number++;

    
    }) 

    document.getElementById("adding").addEventListener("click", ()=>{
        document.getElementById("result-fibo").value = "";
        number=0;
      });
      let interval=setInterval(() => {
          document.getElementById('interval').value++;

      }, 1000);
    document.getElementById('interval').addEventListener('click',())