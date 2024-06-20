const productsList=document.querySelector('#productsList')
const cartList=document.querySelector('#cartList')

const pizzas=[
    {
        id: 1,
        name: "Pepperoni",
        count: 1,
        price: 4
          
    },
    {
        id: 2,
        name: "Margarita",
        count: 1,
        price: 5
          
    },
    {
        id: 3,
        name: "Vegetarian",
        count: 1,
        price: 6
          
    },
    {
        id: 4,
        name: "Mexican",
        count: 1,
        price: 7
          
    },
    {
        id: 5,
        name: "4cheese",
        count: 1,
        price: 3
          
    },
    {
        id: 6,
        name: "Chicken Barbeque",
        count: 1,
        price: 8
          
    }

]

let cart=[]

if(localStorage.getItem("cart")){
    cart=JSON.parse(localStorage.getItem("cart"))
}

pizzas.forEach(data=>{
    console.log(data)
    productsList.innerHTML+=`
    <li>
    ${data.name} (${data.price}$)
    <button onclick="addToCart(${data.id})">add to cart</button>
    </li>
    <br>
    `
})

function addToCart(id){
    console.log(id)
    const checkCart=cart.find(data=>data.id==id)
    console.log("checkCart", checkCart)

    if(checkCart){
        checkCart.count+=1
    }else{
        const pizza=pizzas.find(data=>data.id==id)
        console.log("pizza",pizza)
        cart.push(pizza)
    }

    localStorage.setItem("cart",JSON.stringify(cart))
    console.log("korzina",cart)
    showCart()
}

function showCart(){
    cartList.innerHTML=''
    cart.forEach(data=>{
        console.log(data)
        cartList.innerHTML+=`
        <li>
        ${data.name}
        <button onclick="changeCount('uvelicenie','${data.id}')">+</button>
        <span>${data.count}</span>
        <button onclick="changeCount('umenshenie','${data.id}')">-</button>
        </li>
            <br>
        `
    })
}
showCart()

function changeCount(type,id){
    if(type=='uvelicenie'){
        const checkCart=cart.find(data=>data.id==id)
        checkCart.count++
    }else{
        const checkCart=cart.find(data=>data.id==id)
        checkCart.count--
        if (checkCart.count==0){
            const prodIndex=cart.findIndex(data=>data.id==id)
            cart.splice(prodIndex,1)
        }
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    showCart()
}