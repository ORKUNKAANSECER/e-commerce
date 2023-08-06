const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar ul');
const lines = document.querySelector('.hamburger div');
const logo = document.querySelector('.navbar h1');
const productssection = document.querySelector('.products');

let products = [];

hamburger.addEventListener('click',()=>{
    menu.classList.toggle('slide')
    lines.foreach((item)=>{
        item.classList.toggle('toggle')
    })
});
const allProducts = ()=>{
    productssection.innerHTML = ''
    products.forEach((item)=>{
        let product = document.createElement('div');
        let image = document.createElement('img');
        let button = document.createElement('button')
        button.textContent = 'Sepete At';
        image.src = item.image;
        product.classList.add('product')
        product.appendChild(image);
        product.appendChild(button);
        productssection.appendChild(product);
    })
}
const getProducts = async()=>{
    const data = await fetch('https://fakestoreapi.com/products');
    products = await data.json();
    console.log(products)
    let categories = [];
    products.forEach((item) =>{
        if(!categories.includes(item.category)){
            categories.push(item.category);
        }
    })
    categories.forEach((item)=>{
        let li = document.createElement('li');
        li.setAttribute('data-value',item)
        li.textContent = item.toUpperCase()
        menu.appendChild(li)
        allProducts();
        menu.querySelectorAll('li').forEach((item)=>{
            item.addEventListener('click',(e)=>{
                productssection.innerHTML = '';
                let value = e.target.getAttribute('data-value');
                products.forEach((item) => {
                    if(item.category=== value){
                        let product = document.createElement('div');
                        let image = document.createElement('img');
                        let button = document.createElement('button')
                        button.textContent = 'Sepete At';
                        image.src = item.image;
                        product.classList.add('product')
                        product.appendChild(image);
                        product.appendChild(button);
                        productssection.appendChild(product);
                    }
                })
            });
        })
    })
}
getProducts()
logo.addEventListener('click',()=>{
    allProducts();
})