const grid = document.querySelector('.grid')
const sidebar = document.querySelector('.sidebar')

const products = [
    {
        label: 'Geneva Dark Blue',
        img: 'https://thegallerist.se/cdn/shop/files/Darkbluesida.jpg?v=1754412245&width=535',
        price: 2499
    },
    {
        label: 'Geneva White',
        img: 'https://thegallerist.se/cdn/shop/files/Darkbluesida.jpg?v=1754412245&width=535',
        price: 2399
    },
     {
        label: 'Moritz Summer',
        img: 'https://thegallerist.se/cdn/shop/files/Darkbluesida.jpg?v=1754412245&width=535',
        price: 1999
    },
     {
        label: 'Moritz Winter',
        img: 'https://thegallerist.se/cdn/shop/files/Darkbluesida.jpg?v=1754412245&width=535',
        price: 2699
    },
]


let productsHTML = '';

products.forEach(product => {
    productsHTML += `
    <div class="product">
                        <div class="imgBox">
                            <img src="${product.img}" alt="">
                        </div>
                        <div class="textBox">
                            <h4>${product.label}</h4>
                            <h6>${product.price.toLocaleString('sv-SE')} sek</h6>
                        </div>
                    </div>`
})

grid.innerHTML = productsHTML

function toggleMenu() {
    sidebar.classList.toggle('active')
}