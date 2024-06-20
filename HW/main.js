//
function isSameNum(num1, num2) {
	if (num1===num2) {
        return true
    }else{
        return false
    }
}
console.log(isSameNum(4, 8))
console.log(isSameNum(2, 2))
console.log(isSameNum(2, "2"))

//
function lessThan100(a, b) {
	if (a+b<100) {
        return true
    }else{
        return false
    }
}
console.log(lessThan100(22, 15))
console.log(lessThan100(83, 34))
console.log(lessThan100(3, 77))

//
function convert(hours, minutes) {
	return (hours*3600)+(minutes*60)
}
console.log(convert(1, 3))
console.log(convert(2, 0))
console.log(convert(0, 0))

//
function isSeven(x) {
    if (x=="7") {
        return true
    }else{
        return false
    }
}
console.log(isSeven(4))
console.log(isSeven(9))
console.log(isSeven(7))

//
function footballPoints(wins, draws, losses) {
	return (wins*3) + (draws*1) + (losses*0);

}
console.log(footballPoints(3, 4, 2))
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(0, 0, 1))

    
//
function and(a, b) {
    if ((a, b) == a && b){
        return true
    }else{
        return false
    }

}
console.log(and(true, false))
console.log(and(true, true))
console.log(and(false, true))
console.log(and(false, false))

//
function makesTen(a, b) {
	if (a+b==10 || a==10 || b==10) {
        return true
    }else{
        return false
    }
}
console.log(makesTen(9, 10))
console.log(makesTen(9, 9))
console.log(makesTen(1, 9))

//
function frames(minutes, fps) {
	return (minutes*fps)*60
}
console.log(frames(1, 1))
console.log(frames(10, 1))
console.log(frames(10, 25))

//
function swap(a, b) {
	return [b, a]

}
console.log(swap(100, 200))
console.log(swap(44, 33))
console.log(swap(21, 12))

//
function printArray(number) {
    var newArray = [];

    for (var i = 1; i <= number; i++){
      newArray.push(i);
    }
    return newArray;
} 
console.log(printArray(1))
console.log(printArray(3))
console.log(printArray(6))

//
function comp(str1, str2) {
    return str1.length===str2.length

}
console.log(comp("AB", "CD"))
console.log(comp("ABC", "DE"))
console.log(comp("hello", "edabit"))

//
arrowFunc=(arg)=>arg

console.log(arrowFunc(3))
console.log(arrowFunc("3"))
console.log(arrowFunc(true))

//
function checkEquality(a, b) {
    if (a===b){
        return true     
    }else{
        return false
    }
}
console.log(checkEquality(1, true))
console.log(checkEquality(0, "0"))
console.log(checkEquality(1,  1))

