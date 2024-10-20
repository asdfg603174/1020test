const products = [
    {
        name:'鍋燒意麵',
        price: 100,
    },

    {
        name: '起司奶油鍋燒意麵',
        price: 120,
    },

    {
        name: '韓式泡菜鍋燒意麵',
        price: 115,
    },


];
let shoppingCart = [];
let total = 0;


const product1Btn = document.querySelector('#product1')
const product2Btn = document.querySelector('#product2')
const product3Btn = document.querySelector('#product3')

product1Btn.addEventListener('click',function() {
    shoppingCart.push(products[0])
    
    total = shoppingCart.reduce((pre,curr) => {
        return pre + curr.price;

    }, 0);
    console.log(shoppingCart,total)
})