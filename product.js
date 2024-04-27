const fetchProductBtn=document.getElementsByClassName('select');
const dataDisplay=document.getElementById('container');
fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
function displayProduct(products){
    dataDisplay.innerHTML=""
    item.forEach((product)=>{
        dataDisplay.innerHTML+=`
        <div class="product-card">
        <img class="product-pic" src="${product.pic}" alt="">
        <div class="title">${product.title}</div>
        <div class="product-price">${product.price}></div>`
    })
}