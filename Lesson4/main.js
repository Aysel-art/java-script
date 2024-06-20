const user={
    imya:"Aysel",
    familiya:"Mammadzada",
    age:12,
    sposobnosti:["html","css","js/90"],
    fullName: function(){
        return this.imya+" "+this.familya
    },
    address:{
        strana:"Azerbaijan",
        qorod:"Baku",
        ulica:"xojali"
    },
    rodstvenniki:[
        {
            position:"sestra",
            name:"Aydan"
        },
        {
            position:"mama",
            name:"Sevil"
        }
    ]

}

console.log(user)
//Tocecniy sposob (Dotte notation)

console.log(user.imya)
console.log(user.familiya)
console.log(user.sposobnosti)
console.log(user.sposobnosti[1])
console.log(user.fullName())
console.log(user.address)
console.log(user.address.strana)
console.log(user.rodstvenniki)
console.log(user.rodstvenniki[1])
console.log(user.rodstvenniki[1].name)

//Skobocniy metod (Bracked notation)
 
console.log(user["familiya"])
console.log(user["sposobnosi"])
console.log(user["sposobnosti"][2])
console.log(user["address"])
console.log(user["address"].strana)
console.log(user["address"]["qorod"])

user.imya="Aydan"
console.log(user)