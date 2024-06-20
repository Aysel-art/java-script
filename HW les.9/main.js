//HW
function sevenBoom(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += ""
        if (arr[i].includes("7")) {
            return 'Boom!'
        }
    }
    return "there is no 7 in the array"

}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86]))


// (https://edabit.com/challenge/GLbuMfTtDWwDv2F73)
function countTrue(arr) {
	let count=0
    for(let i=0; i<arr.length;i++){
        if(arr[i]===true){
            count++
        }
    }
    return count
}
console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))

// (https://edabit.com/challenge/hzxN9bAebBPNqdQto)
let f1 =redundant ("apple")
let f2=redundant("pear")
let f3=redundant(" ")

function redundant(str) {
    return()=>str
	
}
console.log(f1())
console.log(f2())
console.log(f3())


// (https://edabit.com/challenge/8Qg78sf5SNDEANKti)
let chickensLegs = 2
let cowsLegs = 4
let pigsLegs = 4

function animals(chickens, cows, pigs) {
	return chickens*2+(cows+pigs)*4
}
console.log(animals(2, 3, 5))
console.log(animals(1, 2, 3))
console.log(animals(5, 2, 8))

// (https://edabit.com/challenge/xsi99TwpGyFC8KS6d)
function numberSplit(n) {
	return [Math.floor(n/2),Math.ceil(n/2)]
}
console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))

// (https://edabit.com/challenge/GwvwXHWCThHZrR7xu)
let wins=3
let draws=1
let losses=0

function footballPoints(wins, draws, losses) {
	return (wins*3)+(draws*1)+(losses*0)
}
console.log(footballPoints(3, 4, 2))
console.log(footballPoints(5, 0, 2) )
console.log(footballPoints(0, 0, 1))

// (https://edabit.com/challenge/Q3n42rEWanZSTmsJm)
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))

// (https://edabit.com/challenge/XdAR3KohR5w7rjrFg)
function sumOfCubes(nums) {
    let summa=0
    for (let i=0; i<nums.length; i++){
        summa+=nums[i]**3
    }
	return summa
}
console.log(sumOfCubes([1, 5, 9]))
console.log(sumOfCubes([3, 4, 5]))
console.log(sumOfCubes([2]))
console.log(sumOfCubes([]))
