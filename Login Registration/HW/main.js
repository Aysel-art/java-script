const logEmail = document.querySelector('#logEmail')
const logPass = document.querySelector('#logPass')
const logBtn = document.querySelector('#logBtn')
const logMsg = document.querySelector('#logMsg')
const logName = document.querySelector('#logName')

const goToLog=document.querySelector("#goToLog")
const goToReg=document.querySelector("#goToReg")

const login_page=document.querySelector(".login_page")
const register_page=document.querySelector(".register_page")

const regEmail = document.querySelector('#regEmail')
const regName = document.querySelector('#regName')
const regNumber = document.querySelector('#regNumber')
const regPass = document.querySelector('#regPass')
const regBtn = document.querySelector('#regBtn')
const regMsg = document.querySelector('#regMsg')



const user = [
    {
        id: 1,
        name: "Aysel Memmedzade",
        email: "ayselm@gmail.com",
        date: "17.10.xxxx",
        pass: 123
    },
    {
        id: 2,
        name: "Aydan Ahmadova",
        email: "aydana@gmail.com",
        date: "25.11.1989",
        pass: 123

    },
    {
        id: 3,
        name: "Cosmin Savar",
        email: "cosmin@gmail.com",
        date: "25.11.1989",
        pass: 123
    },
    {
        id: 1,
        name: "Romania",
        email: "romaniaemb@gmail.com",
        date: "25.11.1989",
        pass: 123
    }
]

logBtn.addEventListener('click', () => {
    if (logEmail.value != '' && logPass.value != '') {
        const checkEmail = user.find(data => data.email == logEmail.value)
        console.log(checkEmail)
        if (checkEmail) {
            if (checkEmail.pass == logPass.value) {
                logMsg.innerHTML = 'success'
                logName.innerHTML = checkEmail.name
            } else {
                logMsg.innerHTML = "Parol neverniy"
            }
        } else {
            logMsg.innerHTML = "Email neverniy"
        }
    } else {
        logMsg.innerHTML = "Vvedite dannie"
    }
})

regBtn.addEventListener('click', () => {
    if (regNumber.value != '' && regEmail.value != '' && regName.value != '' && regPass.value != '') {
        const checkEmail = user.find(data => data.email == regEmail.value)
        console.log(checkEmail)
        if (checkEmail) {
            regMsg.innerHTML = 'Email bil ispolzovan'
        } else {
            const newUser = {
                id: user.length + 1,
                name: regName.value,
                phone_number: regDate.value,
                email: regEmail.value,
                pass: regPass.value
            }

            user.push(newUser)
            regMsg.innerHTML = 'Successfully registered!'
            console.log(user);
        }
    }
})

goToLog.addEventListener('click',()=>{
    register_page.style.display="none"
    login_page.style.display="block"
})
goToReg.addEventListener('click',()=>{ 
    register_page.style.display="block"
    login_page.style.display="none"
})