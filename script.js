const items = [
    {
        id: 11,
        img: './images/action.png',
        title: 'Action Camera',
        price: 50
    },
    {
        id: 12,
        img: './images/airpod.png',
        title: 'Airpod',
        price: 120
    },
    {
        id: 13,
        img: './images/camera.png',
        title: 'Video Camera',
        price: 320
    },
    {
        id: 14,
        img: './images/drone.png',
        title: 'Drone',
        price: 320
    },
    {
        id: 15,
        img: './images/lights.png',
        title: 'Shotting Lights',
        price: 520
    },
    {
        id: 16,
        img: './images/main-camera.png',
        title: 'Canon',
        price: 350
    },
    {
        id: 17,
        img: './images/mic.png',
        title: 'Mic',
        price: 210
    },
    {
        id: 18,
        img: './images/setup.png',
        title: 'Setup',
        price: 999
    },
    {
        id: 19,
        img: './images/single-light.png',
        title: 'Single Light',
        price: 425
    },
    {
        id: 20,
        img: './images/tripod.png',
        title: 'Tripod',
        price: 240
    }

]

const cartContainer = document.querySelector('.cart');

items.forEach(item => {
    // console.log(item);
    const cart = `
    <div class="col">
    <div class="card h-100">
        <img src="${item.img}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
            <h4 class="card-title">${item.title}</h4>
            <h5 class="card-text">$ ${item.price}</h5>
            <button class="btn btn-warning ${item.id}">Add to Cart</button>
        </div>
        
    </div>
</div>
    `
    cartContainer.innerHTML += cart;
})

// console.log(cartContainer);
const orderArea = document.querySelector('.order');

cartContainer.addEventListener('click', e => {
    // console.log(e.target);
    // console.log(e.target.classList);
    const classLists = e.target.classList;
    const priceField = document.querySelector('.price-total');
    console.log(priceField);
    items.forEach(item => {
        classLists.forEach(c => {
            if (c == item.id) {
                // console.log(c, item.price);
                const addToCart = `
                    <div class="d-flex justify-content-between align-items-center mb-4">
                       <div class="d-flex align-items-center"> 
                       <img class="cart-img me-2" src="${item.img}"></img>
                       <h5 class="card-title ">${item.title}</h5>
                       </div>
                        <h5 class="card-text">$ ${item.price}</h5>
                       
                    </div>
                `

                orderArea.innerHTML += addToCart;
                const price = item.price;
                console.log(typeof price);
                let priceTotal = parseInt(priceField.innerHTML);
                priceField.innerHTML = priceTotal + price;
                console.log(priceTotal, typeof priceTotal)

            }

        })

    })

})