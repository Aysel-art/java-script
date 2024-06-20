const minus=document.querySelector('#minus')
const plus=document.querySelector('#plus')
const zero=document.querySelector('#zero')

let cislo=0

minus.addEventListener('click',()=>{
    cislo--
    zero.innerHTML = cislo
})
plus.addEventListener('click',()=>{
    cislo++
    zero.innerHTML=cislo
})

const body=document.querySelector('body')

let randNum = Math.floor(Math.random()*100)
console.log(randNum);

window.addEventListener('scroll',()=>{
    let num1 = Math.floor(Math.random()*255)
    let num2 = Math.floor(Math.random()*255)
    let num3 = Math.floor(Math.random()*255)
    body.style.backgroundColor = `rgb(${num1},${num2},${num3})`
})

