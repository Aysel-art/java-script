// String
localStorage.setItem("data","Seqodnya 15 iyunya")

let a=localStorage.getItem("data")
console.log(a)

// Number
localStorage.setItem("age",21)

let b=localStorage.getItem("age")
console.log(b)

// Array
let names=['Aysel','Aydan','Nigar','Sabina']
console.log(names)
console.log(names[0])

localStorage.setItem("namesArr",JSON.stringify(names))

let getCorrectArr=JSON.parse(localStorage.getItem("namesArr"))
console.log(getCorrectArr)

// Object
let address={
    country:"Azerbaijan",
    city:"Baku",
    street:"Khatai 6a"
}
console.log(address)
console.log(address.city)

localStorage.setItem("address",JSON.stringify(address))

let getObj=localStorage.getItem('address')
console.log(getObj)
console.log(getObj[0])

let getCorrectObj=JSON.parse(localStorage.getItem("address"))
console.log(getCorrectObj)


localStorage.removeItem("data")

// localStorage.clear()