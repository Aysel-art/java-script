//i+1=i++
for(let i=0; i<100; i++){
    console.log(i);
    console.log("Hello World");
}

for(let i=0; i<=50; i++){
    console.log(i);
    console.log("Hello World");
}

for(let i=30; i<60; i++){
    console.log(i);
}

//i--=i-1
for(let i=30;i>10;i--){
    console.log(i);
}

let colors = ["Red","Green","torqousi","yellow","purple","orange","pink","black"]
console.log(colors);
console.log(colors[3]);

for(let i=0;i<colors.length;i++){
    console.log(i,colors[i]);
    //if(i==4){
    //break
    //}
}

//For in-rabotaet po indexu, v osnovnom ispolzuem dla obyektov

for(let z in colors){
    console.log(z,colors[z]);
    //if(z==3){
        //break
        //}
}

let user={
    name:"Aydan",
    surname:"Ahmadova",
    email:"aydanahm@gmail.com"
}

for(let y in user){
    //console.log(y);
    //console.log(typeof y);
    console.log(user[y]);
}

//For of-rabotaet po elementu, v osnovnom ispolzuem dla array

for(let n of colors){
    console.log(n);
}

//dla JS
colors.forEach((data,index)=>{
    console.log(data,index);
    //break nelza
})

//dla React
colors.map((data,index)=>{
    console.log(data,index);
    //break nelza
})