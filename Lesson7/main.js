// DOM-Document Object Model

const texth2=document.getElementsByTagName('h2')
console.log(texth2)
console.log(texth2[2])

const getTest=document.getElementsByClassName('test')
console.log(getTest)

const text=document.getElementById('text')
console.log(text)

function btnClick(e){
    console.log("Salam")
    console.log(e.target)
} 

function getKeyDown(e){
    console.log(e.target.value)
}

function getKeyUp(e){
    console.log(e.target.value)
}

function getMouseEvent(type){
    console.log(type)
}

const myName=document.getElementById('myName')
console.log(myName)

myName.innerText ="Aydan"
myName.innerText="<h1>Aydan</h1>"
myName.innerHTML="<h1>Aydan</h1>"