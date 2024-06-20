let currentCurency = "AZN"
let convertToCurrency = "USD"
let summa = 598
let result

if (currentCurency=="AZN"){
    if (convertToCurrency=="USD"){
        result= summa*0.59
    }else if (convertToCurrency=="EUR"){
        result=summa*0.54
    }else if (convertToCurrency=="TRY"){
        result=summa*18.98
    }else{
        result = "Mi ne razmenivaem na" + convertToCurrency
    }
}else if (currentCurency =="USD"){
    if (convertToCurrency=="AZN"){
        result=summa*1.70
    }else if (convertToCurrency=="EUR"){
        result=summa*0.92
    }else if (convertToCurrency=="TRY"){
        result=summa*32.27
    }else{
        result="Mi ne razmenivaem na" +convertToCurrency
    }
}
console.log(result)

function privetstvie(name,surname){
    console.log("Hello")
    return "Privet " + name +" " +surname
    //console.log("Bye")
}

console.log(privetstvie("Aysel", "Memmedzade"))

function math(birthYear,currentYear=2024){
    return currentYear-birthYear
}
console.log(math(1989))
console.log(math(2003,2030))

//Arrow function strelocnaya funkciya,vizivaetsa tolko posle seba
let hello = () => {
    return "hello"
}
console.log(hello())
console.log(hello())

let cars = ["BMW,Mercedes,Audi,Ferrari,Lamborghini,Pagani,Nissan gtr"]
console.log(cars)

let dlinaKolvo=cars.length
console.log(dlinaKolvo)

console.log(cars[4])

cars[2]="Toyota"
console.log(cars)

let poisk=cars.find(car=> car=="Mercedes") //esli est vernet element,a esli net underfined
console.log(poisk)

let naytiIndex=cars.findIndex(x=> x =="Audi") //esli est index vernetsa,a esli net -1
console.log(naytiIndex)

let estIliNet = cars.includes("Porsche") //daet boolean otvet
console.log(estIliNet)

let udalitPosledniyElement=cars.pop()
console.log(cars)

let dobavitSKonca=cars.push("Porsche","Toyota")
console.log(cars)

let udalitPerviyElement=cars.shift()
console.log(cars)

let dobavitSNacala=cars.unshift("BMW x7","BMW f30")
console.log(cars)

let udalitPoKoordinatam= cars.splice(2,3)
//pervoe znacenie gde nacinaet udalat po indexu,a vtoroe kolvo udalennix elementov
console.log(cars)

let dobavitPoKoordinatam =cars.splice(2,0,"Mercedes e200","McLaren")
console.log(cars)

let vzatChast =cars.slice(1,4)
//pervoe vixodit v promejutok,a 4 net(1,2,3)//slice ne menaet pervonacalnoe sostoyanie arraya,a prosto kopiruet cast v noviy array
console.log(vzatChast)
console.log(cars)

let num = [8,9,1,5,3,5,2,6,7,4]
let soedinitArrVOdnu = cars.concat(num,cars)
console.log(soedinitArrVOdnu)

let filter = num.filter(a=> a>5)
console.log(filter); //Filtriruet iz osnovnogo arr po usloviyu i sozdaet noviy array s dannimi

let poUbivaniyu = num.sort((x,y) => y-x)
console.log(poUbivaniyu)

let poVozrostaniyu = num.sort((a,b) => a-b)
console.log(poVozrostaniyu)

let summaDannix = num.reduce((a,b) => a+b)
console.log(summaDannix)

let raznostDannix = num.reduce((a,b) =>a-b)
console.log(raznostDannix)

let soedinit = cars.join()
console.log(soedinit)

let soedinit2 = cars.join("  hhhhvuj  ")
console.log(soedinit2)

let perevernutNaoborot = cars.reverse()
console.log(perevernutNaoborot)

let name = "AyselAydan"
console.log(name)

let strToArr = Array.from(name)
console.log(strToArr)




