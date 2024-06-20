console.log("Hello World");
console.log(6+6);

// var, let, const
// odni i te je nazvaniya dla peremennix nelza ispolzovat. Var owibku ne vidayet esli ispolzovat odinakovoe nazvanie

var firstName = "Aysel";
console.log(firstName);

firstName = "Aydan"
console.log(firstName)

// var firstName = "Alyasar"
// console.log(firstName)

let lastName = "Memmedzade"
console.log(lastName)

lastName = "Ahmadova"
console.log(lastName)

// let lastName

const birthday = "25.11"
console.log(birthday)

// birthday = 17.10
// console.log(birthday)

// const birthday


// Data Types, Operators
// String - eto vse to cto v kavickax, v konsoli cernogo cveta

let myText = "Hello, today is 8th of may"
console.log(myText)
console.log(typeof myText); //vixodit tip dannogo

//Number - vse cifri,cisla, v konsoli sinego cveta

let num1 = 667
console.log(num1)
console.log(typeof num1)

//Boolean - vidayet logiceskiy otvet, true ili false v zavisimosti ot usloviya
let a = 6<8
console.log(a)

//Math operators
let x = 6
let y = 8
let z = "7"
let g = "3"

let summa = x+y
console.log(summa)

let summaString = z+g
console.log(summaString)
console.log("A"+"y"+"s"+"e"+"l")

let raznost = y-g
console.log(raznost)

let umnojenie = z*g
console.log(umnojenie)

let otnoshenie = x/g
console.log(otnoshenie)

let oatatokOtDeleniya = 8%5
console.log(oatatokOtDeleniya)

let vozvedenieVstepen = 6**3
console.log(vozvedenieVstepen)

let kvadratniyKoren = Math.sqrt(64)
console.log(kvadratniyKoren)

let bolwe = 6>8
console.log(bolwe)

let bolweRavno = 6>=6
console.log(bolweRavno)

let menwe = 6<7
console.log(menwe)

let menweRavno = 6<=6
console.log(menweRavno)

let dvaRavno = 6 =="6"  //!=proveryayet tolko na ravenstvo znaceniy
console.log(dvaRavno)

let triRavno = 6 === 6;  //!==proveryayet ne tolko na ravenstvo no i na tip
console.log(triRavno)

let k = 7.93466789
//7 7.2 8
let okruglenie = Math.round(k)
console.log(okruglenie) 

let okruglenieNaverx = Math.ceil(k)
console.log(okruglenieNaverx)

let okruglenieVniz = Math.floor(k)
console.log(okruglenieVniz)

let okrugleniePosleZapatoy = k.toFixed(3)
console.log(okrugleniePosleZapatoy)

//String methods

let myStr = "Aydan Aysal"
console.log(myStr)

let vseBukviBolwie = myStr.toUpperCase
console.log(vseBukviBolwie)

let vseBukviMalenkie = myStr.toLowerCase
console.log(vseBukviMalenkie)

let povtorenie = myStr.repeat(8)
console.log(povtorenie)

let virezatChast = myStr.substring(5,10)
// (5,10)
console.log(virezatChast)

let dlinaKolvo = myStr.length
console.log(dlinaKolvo)

let peremestit = myStr.replace("a","i")
console.log(peremestit)

let peremestitAll = myStr.replaceAll("a","e")
console.log(peremestitAll)

let esli = myStr.includes("A") //true or false
console.log(esli)

let number = 15
console.log(number)

let numToStr = String(number)
console.log(numToStr)

let string = "24"
console.log(string)

let strToNum = Number(string)
console.log(strToNum)