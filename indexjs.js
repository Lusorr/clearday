const btn = document.getElementById('burger-btn');
const menu = document.getElementById('burger-menu');
let menuOpen = false;
console.log(btn);

btn.addEventListener('click', function(){
    if(menuOpen == false)
    {
        menu.style = `display: block`;
        menuOpen = true;
        btn.classList.add('.burger-btn--opened');
    }
    else
    {
        menu.style = `display: none`;
        menuOpen = false;
        btn.classList.remove('.burger-btn--opened');
    }
})

function RenderProducts(){
    const cont = document.getElementById("cards-cont");
    products.forEach(product => {
        const productHTML = `
        <div class="card">
                <div class="card__image"><img src="${product.image}.jpg" alt=""></div>
                <div class="card__desc">
                    <div class="card__desc-title">${product.name}</div>
                    <div class="card__desc-price">${product.price} р.</div>
                </div>
                <div class="order-btn">
                    <a class="order-btn__text text--upper" href="">Заказать</a>
                </div>
            </div>
        `;
        if(product.name != "" && product.image != "")
        cont.innerHTML += productHTML;
    });
}

window.addEventListener('DOMContentLoaded', RenderProducts)

//Не для слабонервных
const products = [
    {
        name: "Фотозона",
        image: "blue1",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "blue2",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "gold1",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "pink1",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "pink2",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "fontan1",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "fontan2",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "pink4",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "pink5",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "red1",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "white1",
        price: "от 10 000"
    },
    {
        name: "Фотозона",
        image: "white2",
        price: "от 10 000"
    }
]
