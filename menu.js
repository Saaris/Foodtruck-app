import { getCart } from "./cart.js";
import { apiKey, url } from "./constants.js"

// här hämtar jag items från menyn i ett request
 let cart = getCart()

const foodElement = document.querySelector('.food-section');

const getMenu = async () => {

    let response = await fetch(`${url}/menu`, {
        headers: { "x-zocom": apiKey }
    });

    let data = await response.json();
    console.log(data);  

    let items = Array.isArray(data) ? data : data.items;


    if (Array.isArray(items)) {
        items.forEach((item, index) => {
            
            //mat, dips och dricka varsin eventlyssnare för att de skall hamna i cart
            const menuButton = document.createElement('button');
            menuButton.id = "menu";
            menuButton.classList.add('menu-box');

            const price = document.createElement('p');
            price.id = "city";
            price.classList.add('show-price');
            price.innerText = `${item.name}.....................${item.price} SEK`;

            menuButton.addEventListener('click', () => {
                pickItem(item);
            })
            
            
            if (item.type === 'wonton') {
                
                const foodIngredient = document.createElement('p');
                
                foodIngredient.classList.add('ingredient');
                foodIngredient.innerText = item.ingredients.join(', ');
               
                menuButton.appendChild(price);
                menuButton.appendChild(foodIngredient);

                foodElement.appendChild(menuButton)

            }
            
            else if (item.type === 'dip') {

                const saucePrice = document.getElementById('sauce-price');
                saucePrice.classList.add('show-sauce-price');
                saucePrice.innerText = `DIPSÅS..............................${item.price} SEK`;

                const SaucesContainer = document.getElementById('saucesContainer')
                const sauce = document.createElement('p');
                sauce.innerText = item.name; 
                sauce.classList.add('dip-sauce')
                
                sauce.addEventListener('click', () => {
                    pickItem(item);
                })
                SaucesContainer.appendChild(sauce, saucePrice);
                
            }
            
            else if (item.type === 'drink') {

                const drinkPrice = document.getElementById('drinks-price');
                drinkPrice.classList.add('show-drink-price');
                drinkPrice.innerText = `DRICKA..............................${item.price} SEK`;
                
                const drinksContainer = document.getElementById('drinksContainer')
                const drink = document.createElement('p');
                drink.innerText = item.name;  
                drink.classList.add('drinks')
                
                drink.addEventListener('click', () => {
                    pickItem(item);
                })
             
                drinksContainer.appendChild(drink, drinkPrice)
            }
        });
        
    } else {
        console.error('sorry, error', items);
    }
};

getMenu();

function pickItem(item) {
    cart.push(item);
    console.log(`Du klickade på: ${item.name}`);
    orderCount();
    let showOrderCount = document.getElementById("show-order-count");
    showOrderCount.style.visibility = "visible";
}

//visar antal i cart (röd cirkel)
export function orderCount() {
    const orderButtonCount = document.getElementById('show-order-count');
    if (cart.length > 0) {
        const itemCount = cart.length;
        orderButtonCount.textContent = `${itemCount}`; 
    }
}


