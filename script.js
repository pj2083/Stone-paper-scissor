var compDisp=document.getElementById('computer-choice');
var userDisp=document.getElementById('user-choice');
var res=document.getElementById('result');
var choices=document.querySelectorAll('button');
var userChoice;
choices.forEach(choices => choices.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userDisp.innerHTML=userChoice;
}))