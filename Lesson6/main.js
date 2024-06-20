//0 1 1 2 3 5 8 13
function fibonachi(count) {
    let fib = []
    for (i = 0; i < count; i++) {
        if (i == 0) {
            fib[i] = 0
        } else if (i == 1) {
            fib[i] = 1
        } else {
            fib[i] = fib[i - 1] + fib[i - 2]
        }

    }

    return fib
}

console.log(fibonachi(6))
console.log(fibonachi(20))

function factorial(x) {
    let result = 1

    if (x == 0) {
        return result
    } else if (x == 1) {
        return result
    } else {
        for (let i = 1; i <= x; i++) {
            console.log(i)
            result = result * i
        }
    }

    return result
}
console.log(factorial(9))


function summaIProizvedenie(chislo) {
    console.log(chislo);
    let x = String(chislo)
    console.log(x)
    // console.log(x[0])
    let sum = 0
    let umn = 1

    for (let i = 0; i < x.length; i++) {
        // console.log(i,x[i])
        let y = Number(x[i])
        console.log(y);
        sum = sum + y
        umn = umn * y
    }

    return {
        "Summa": sum,
        "Umnojenie": umn
    }
}
console.log(summaIProizvedenie(98765))


function addition(a, b) {

}
//
// let convert = "minuta"
// let convertTo ="sekunda"
// let summa = 20
// let result
// if (convert =="minuta"){
//     if (convertTo =="sekunda"){
//         result=summa*60
//     }
// }
// console.log(result)

//
let x = 52
let y = 3
let summa2 = x + y
console.log(summa2)

//	
function convert(minutes) {
    return minutes * 60
}
console.log(convert(5))
console.log(convert(3))
console.log(convert(2))

//
function addition(num) {
    return num + 1
}
console.log(addition(0))
console.log(addition(9))
console.log(addition(-3))

//
function howManySeconds(hours) {
    return hours * 3600
}
console.log(howManySeconds(2))
console.log(howManySeconds(10))
console.log(howManySeconds(24))

//
function circuitPower(voltage, current) {
    return voltage * current
}
console.log(circuitPower(230, 10))
console.log(circuitPower(110, 3))
console.log(circuitPower(480, 20))

//
function lessThan100(a, b) {
    // return a+b<100==(true)
    if (a + b < 100) {
        return true
    } else {
        return false
    }

}
console.log(lessThan100(22, 15))
console.log(lessThan100(83, 34))
console.log(lessThan100(3, 77))

//
function lessThanOrEqualToZero(num) {
    // return num<=0==(true)
    if (num <= 0) {
        return true
    } else {
        return false
    }
}
console.log(lessThanOrEqualToZero(5))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

//
function findPerimeter(length, width) {
    return 2 * (length + width)

}
console.log(findPerimeter(6, 7))
console.log(findPerimeter(20, 10))
console.log(findPerimeter(2, 9))

//
function remainder(x, y) {
    return x % y

}
console.log(remainder(1, 3))
console.log(remainder(3, 4))
console.log(remainder(-9, 45))
console.log(remainder(5, 5))

//
function calcAge(age) {
    return age * 365
}
console.log(calcAge(65))
console.log(calcAge(0))
console.log(calcAge(20))

//
function points(twoPointers, threePointers) {
    return 2 * twoPointers + 3 * threePointers

}
console.log(points(1, 1))
console.log(points(7, 5))
console.log(points(38, 8))

//
function giveMeSomething(a) {
    return ("something") + " " + a

}
console.log(giveMeSomething("is better than nothing"))
console.log(giveMeSomething("Bob Jane"))
console.log(giveMeSomething("something"))

//
function getFirstValue(arr) {
    return arr[0]

}
console.log(getFirstValue([1, 2, 3]))
console.log(getFirstValue([80, 5, 100]))
console.log(getFirstValue([-500, 0, 50]))

//
function matchHouses(step) {
    return step * 6 - (step - 1)
}
console.log(matchHouses(1))
console.log(matchHouses(4))
console.log(matchHouses(87))

//
function match(n) {
    return n * 10 - 2
}
console.log(match(3))

//
function simmetric(x) {
    let str = String(x)
    let k = Math.floor(String(x).length / 2)

    console.log(k)
    for (let i = 0; i < k; i++) {
        console.log(str[i])
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        } else {
            return true
        }
    }
}
console.log(simmetric(7227));

//
function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== i % 2) {
            return false; // If the parity of the index doesn't match the parity of the element, return false
        }
    }
    return true; // If all elements meet the condition, return true
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]))
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]))
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]))
