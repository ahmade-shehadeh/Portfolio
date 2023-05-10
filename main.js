const btn=document.querySelector('#btnMenu')
const menu=document.querySelector('#menu')

btn.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
})