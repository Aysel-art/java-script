const again=document.querySelector('#again')
const initialScore=document.querySelector('#initialScore')
const msg=document.querySelector('#msg')
const maxScore=document.querySelector('#maxScore')
const inp=document.querySelector('#inp')
const check=document.querySelector('#check')

let score=20
let randNum = Math.floor(Math.random() * 20)
let scoreArr = []

btn.addEventListener('click', () => {
    if (inp.value != '') {
        if (score > 0) {
            if (inp.value > 20) {
                msg.innerHTML = 'Maksimum 20'
            } else if (inp.value < 0) {
                msg.innerHTML = 'Minimum 0'
            } else {
                if (inp.value > randNum) {
                    msg.innerHTML = 'Vi skazali bolshe'
                    score--
                    initialScore.innerHTML = score
                } else if (inp.value < randNum) {
                    msg.innerHTML = 'Vi skazali menshe'
                    score--
                    initialScore.innerHTML = score
                } else {
                    msg.innerHTML = 'You Win'
                    scoreArr.push(score)
                    maxScore.innerHTML = Math.max(...scoreArr)
                }

            }
        } else {
            msg.innerHTML = 'Game Over'
        }
    } else {
        msg.innerHTML = 'Napishite cislo'
    }
})

again.addEventListener('click', () => {
    score = 20
    initialScore.innerHTML = scorerandNum = Math.floor(Math.random() * 20)
    inp.value = ''
    msg.innerHTML = ''
})