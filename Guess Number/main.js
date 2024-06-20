const inp = document.querySelector('#inp')
const btn = document.querySelector('#btn')
const restart = document.querySelector('#restart')
const initialScore = document.querySelector('#initialScore')
const errMsg = document.querySelector('#errMsg')
const maxScore = document.querySelector('#maxScore')


let score = 20
let randNum = Math.floor(Math.random() * 20)
console.log(randNum)
let scoreArr = []

btn.addEventListener('click', () => {
    if (inp.value != '') {
        if (score > 0) {
            if (inp.value > 20) {
                errMsg.innerHTML = 'Maksimum 20'
            } else if (inp.value < 0) {
                errMsg.innerHTML = 'Minimum 0'
            } else {
                if (inp.value > randNum) {
                    errMsg.innerHTML = 'Vi skazali bolshe'
                    score--
                    initialScore.innerHTML = score
                } else if (inp.value < randNum) {
                    errMsg.innerHTML = 'Vi skazali menshe'
                    score--
                    initialScore.innerHTML = score
                } else {
                    errMsg.innerHTML = 'You Win'
                    scoreArr.push(score)
                    maxScore.innerHTML = Math.max(...scoreArr)
                }

            }
        } else {
            errMsg.innerHTML = 'Game Over'
        }
    } else {
        errMsg.innerHTML = 'Napishite cislo'
    }
})

//console.log(...[34,23,54,56,67,12,5455,55,11,11,3])

restart.addEventListener('click', () => {
    score = 20
    initialScore.innerHTML = score
    randNum = Math.floor(Math.random() * 20)
    inp.value = ''
    errMsg.innerHTML = ''
})