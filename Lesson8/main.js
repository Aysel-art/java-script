const headingTwo=document.querySelector('h2')
console.log(headingTwo)

const getAll=document.querySelectorAll('h2')
console.log(getAll)
console.log(getAll[2])

const test=document.querySelector('.test')
console.log(test)

const testAll=document.querySelector('.test')
console.log(testAll)

const title=document.querySelector('#title')
console.log(title)

const btn=document.querySelector('#btn')
const greeting=document.querySelector('#greeting')
console.log(btn)

btn.addEventListener('click',()=>{
    greeting.innerHTML="Hello World"
})

const inp=document.querySelector('#inp')
console.log(inp)

inp.addEventListener('input', function(e){
    console.log(e.target.value)
    console.log(inp.value)
})

//e(event)- Deystvie(click,scroll,input,load)
//e.target- podrazumevaetsa element nad kot.vipolnaetsa deystvie
//e.target.value- znacenie napisannoe vnutri(v slucae inputa)
//e.target=inp=>e.target.value=inp.value(v slucae inputa)

window.addEventListener('scroll',()=>{
    console.log("scroool")
})

const loading=document.querySelector('#loading')

window.addEventListener('load',()=>{
    console.log("looadd")
    setTimeout(() =>{
        loading.style.display='none'
    },2000)
})

title.style.backgroundColor="red"
title.style.fontSize="24px"

const newP=document.createElement('p')
console.log(newP)

newP.innerHTML="06.06.24"

const container=document.querySelector('.container')
console.log(container)

container.appendChild(newP)

container.classList.add('active')
container.classList.remove('active')

console.log(container.textContent)
