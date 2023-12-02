const inputEl=document.querySelector('input');
const btn=document.querySelector('button');
const listEl=document.querySelector('ul');
function Goal(){
const inputVal=inputEl.value;
const listEle=document.createElement('li');
listEle.textContent=inputVal;
listEl.appendChild(listEle);
inputEl.value=''
}
btn.addEventListener('click',Goal)