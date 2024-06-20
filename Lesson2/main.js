 // 91 - 100 A 
// 81 - 91 B
// 71 - 81 C
// 61 - 71 D
// 51 - 61 E
//  < 51 F(kesr)

let bal = window.prompt("Vvedite svoy")
console.log(bal)

let result

// && = i
// || = ili

if(bal>=91 && bal<=100){
    result = "A"
}
if(bal>=81 && bal<91){
    result = "B"
}
if(bal>=71 && bal<81){
    result = "C"
}
if(bal>=61 && bal<71){
    result = "D"
}
if(bal>=51 && bal<61){
    result = "E"
}
else{
    result = "F (kesr)"
}
console.log(result)
window.alert(result)

// if = ?
// else - :

if(6>9){
    console.log("1iy")
}else if(6<9){
    console.log("2oy")
}else{
    console.log("nikakoy")
}

let x = 6>9?"1iy": 6<9?"2oy":"nikakoy"
console.log(x)

switch ("Mandarin"){
    case "Apelsin":
        console.log("Apelsin - 2.5")
    break
    case "Alca":
        console.log("alca - 6")
    break
    case "Viwna":
        console.log("viwna - 3")
    break
    case "Klubnika":
        console.log("klubnika - 2.8")
    break
    case "kivi":
        console.log("kivi - 3")
    break
    case "banan":
        console.log("banan - 3")
    break
    case "malina":
        console.log("malina - 3")  
    break
    default:
        console.log("net togo cto vi iwite")
}