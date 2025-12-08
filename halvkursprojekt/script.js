const sidebar = document.querySelector('.sidebar')


const products = [
    {
        label: 'Geneva Dark Blue',
        img: 'https://thegallerist.se/cdn/shop/files/milanodarkbluemain_4dda6bb4-4ea3-42ba-800b-66ee87122172.jpg?v=1761041574&width=535',
        price: 2499
    },
    {
        label: 'Geneva White',
        img: 'https://thegallerist.se/cdn/shop/files/WHITE_45x2_1cafa5c1-2242-4a4d-80df-36e4a071b7fd.jpg?v=1759245708&width=360',
        price: 2399
    },
     {
        label: 'Vienna Dark Blue',
        img: 'https://thegallerist.se/cdn/shop/files/viennadarkbluemain.jpg?v=1761045861&width=535',
        price: 1999
    },
     {
        label: 'Madrid Summer',
        img: 'https://thegallerist.se/cdn/shop/files/MadridSneaker.jpg?v=1747932695&width=535',
        price: 2699
    },

     {
        label: 'Vienna Black',
        img: 'https://thegallerist.se/cdn/shop/files/svartnymain.jpg?v=1760952076&width=535',
        price: 2699
    },

     {
        label: 'Moritz Winter',
        img: 'https://thegallerist.se/cdn/shop/files/Darkbluesida.jpg?v=1754412245&width=535',
        price: 2699
    },

     {
        label: 'Moritz Brown',
        img: 'https://thegallerist.se/cdn/shop/files/Brown_outside.jpg?v=1760082343&width=535',
        price: 2699
    },

     {
        label: 'Moritz Brown',
        img: 'https://thegallerist.se/cdn/shop/files/gronnymain.jpg?v=1760952379&width=535',
        price: 2699
    },

    {
        label: 'Moritz Brown',
        img: 'https://thegallerist.se/cdn/shop/files/nyblaskomainbild.jpg?v=1755701694&width=535',
        price: 2699
    },

    {
        label: 'Moritz Brown',
        img: 'https://thegallerist.se/cdn/shop/files/milanonavymain.jpg?v=1761035801&width=535',
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

const grid = document.querySelector('.grid-s');

if (grid) {
    // endast kör på shoes.html
    grid.innerHTML = productsHTML;
}


function toggleMenu() {
    sidebar.classList.toggle('active')
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observera alla tre klasser
document.querySelectorAll('.home2, .home3, .home4').forEach(el => {
  observer.observe(el);
});
