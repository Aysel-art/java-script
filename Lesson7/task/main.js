const myName=document.getElementById('hava')


function getKeyDown(event){
    console.log(event.target.value)
    myName.innerHTML=event.target.value
}
const block=document.getElementById('id')

function Click(event){
    // block.style.backgroundColor='yellow'
    if(!block.style.backgroundColor){
        block.style.backgroundColor='yellow'
    }else if (block.style.backgroundColor == 'red'){
        block.style.backgroundColor='yellow'

    }
    else{
        block.style.backgroundColor='red'
    }
    
}