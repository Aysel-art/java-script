// //1
// let a=0
// for(let i=1;i<=100;i++){
//     console.log(i)
//     a=a+i
// }
// console.log(a)
// //a+i=a
// // 0+1=1
// // 1+2=3
// // 3+3=6

// //2
// let b=1
// for(let i=1;i<=15;i++){
//     console.log(i)
//     b=b*i

// }
// // b*i=b
// // 1*1=1
// // 1*2=2
// // 2*3=6
// // 6*4=24
// // 24*5=120

// //3
// for(let i=1;i<=100;i++){
//     // console.log(i)\
// if (i%2==0){
//     console.log(i)
// }
// }

// //4
// for(let i=1;i<=100;i++){
//     // console.log(i)\
// if (i%2!==0){
//     console.log(i)
// }
// }

// //5
// let d=76
// if (d!=2 && d%2==0){
//     console.log("sostavnoe")
// }else if (d!=3 && d%3==0){
//     console.log("sostavnoe")
// }else if(d!=5 && d%5==0){
//     console.log('sostavnoe')
// }else if(d!=7 && d%7==0){
//     console.log("sostavnoe")
// }else {
//     console.log("prostoe")
// }

//6 
// let chisla = []
// for (let i = 0; i < 10; i++) {
//     // console.log(i)
//     let chislo = window.prompt("Vvedite chislo")
//     console.log(chislo);
//     chisla.push(chislo)
//     console.log(chisla);

// }
// console.log(chisla); // array
// console.log(...chisla); //rasshipit array
// console.log(Math.max(...chisla)); // tak kak Math.max metod ne rabotaet dlya arr

// // console.log(Math.max(5,6,7,12,45,65));

// //7
// let chisla2 = []
// for (let i = 0; i < 10; i++) {
//     // console.log(i)
//     let chislo = window.prompt("Vvedite chislo")
//     console.log(chislo);
//     chisla.push(chislo)
//     console.log(chisla);

// }
// console.log(chisla2);
// console.log(...chisla2);
// console.log(Math.min(...chisla2));

//8
let array=[13,20,25,33,42]
let cetniy=[]
let necetniy=[]
for (let i=0;i<array.length;i++){
    console.log(i,array[i])
    if (array[i]%2==0){
        cetniy.push(array[i])
    }else {
        necetniy.push(array[i])
    }
}
console.log(cetniy)
console.log(necetniy)

//9
let arr=[21,3,56,41,12,88]
let u=0
for(let i=0;i<arr.length;i++){
    console.log(i,arr[i])
    if (arr[i]%2==0){
        u=u+arr[i]
    }
}

console.log(u);

//10
let arr2=[21,3,56,41,12,88]
let k=1
for(let i=0;i<arr2.length;i++){
    console.log(i,arr2[i])
    if (arr2[i]%2!==0){
        k=k*arr2[i]
    }
}

console.log(k);
