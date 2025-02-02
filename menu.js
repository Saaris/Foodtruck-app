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

            const foodContainer = document.createElement('div');
            foodContainer.id = "city";
            foodContainer.classList.add('show-price');

            const dishContainer = document.createElement('p');
            dishContainer.innerText = item.name;

            const priceContainer = document.createElement('p');
            priceContainer.innerText = `${item.price}SEK`;

            const dotsContainer = document.createElement('div');
            dotsContainer.classList.add('dots');
            dotsContainer.style.borderBottom = "3px dotted white";

            foodContainer.append (dishContainer, dotsContainer, priceContainer);

            menuButton.addEventListener('click', () => {
                pickItem(item);
            })
            
            
            if (item.type === 'wonton') {
                
                const foodIngredient = document.createElement('p');
                
                foodIngredient.classList.add('ingredient');
                foodIngredient.innerText = item.ingredients.join(', ');
               
                menuButton.appendChild(foodContainer);
                menuButton.appendChild(foodIngredient);

                foodElement.appendChild(menuButton)

            }
            
            else if (item.type === 'dip') {

                const sauceBox = document.getElementById('sauce-box');
            //fick göra en if sats då jag hela tiden fick 6 st saucesBox

                if (!sauceBox.hasChildNodes()) {
                    
                    const sauceHeader = document.createElement('p');
                    sauceHeader.innerText = "DIPSÅS";
                    sauceHeader.classList.add('sauce-header');
            
                    const saucePrice = document.createElement('p');
                    saucePrice.innerText = `${item.price}SEK`;
                    saucePrice.classList.add('sauce-price');
            
                    const sauceDots = document.createElement('div');
                    sauceDots.classList.add('dots');
                    sauceDots.style.borderBottom = "3px dotted white";
            
                    // Lägg till dessa element i sauceBox
                    sauceBox.append(sauceHeader, sauceDots, saucePrice);
                }

                const SaucesContainer = document.getElementById('saucesContainer')
                
                const sauce = document.createElement('p');
                sauce.innerText = item.name; 
                sauce.classList.add('dip-sauce');
                
                sauce.addEventListener('click', () => {
                    pickItem(item);
                })
                SaucesContainer.appendChild(sauce);
                
            }
            
            else if (item.type === 'drink'){

                const drinkBox = document.getElementById('drink-box');

                // lägga in en if sats för att inte få 6 st drinkBox
                if (!drinkBox.hasChildNodes()) {

                const drinkHeader = document.createElement('p');
                drinkHeader.innerText = "DRICKA";
                drinkHeader.classList.add('drink-header');
            
                const drinkPrice = document.createElement('p');
                drinkPrice.innerText = `${item.price}SEK`;
                drinkPrice.classList.add('drink-price');
            
                const drinkDots = document.createElement('div');
                drinkDots.classList.add('dots');
                drinkDots.style.borderBottom = "3px dotted white";
            
                    // Lägg till dessa element i sauceBox
                    drinkBox.append(drinkHeader, drinkDots, drinkPrice);
                }
                
                const drinksContainer = document.getElementById('drinksContainer')
                const drink = document.createElement('p');
                drink.innerText = item.name;  
                drink.classList.add('drinks')
                
                drink.addEventListener('click', () => {
                    pickItem(item);
                })
             
                drinksContainer.appendChild(drink)
            }
        });
        
    } else {
        console.error('sorry, error', items);
    }
};

getMenu();

function pickItem(item) {
    cart = getCart();
    cart.push(item);
    console.log(`Du klickade på: ${item.name}`);
    orderCount();
    let showOrderCount = document.getElementById('show-order-count');
    showOrderCount.style.visibility = "visible";
}

//visar antal i cart (röd cirkel)
export function orderCount() {
    let orderButtonCount = document.getElementById('show-order-count');
    
    if (cart.length > 0) {
        const itemCount = cart.length;
        orderButtonCount.textContent = `${itemCount}`; 
    }
    else {
        orderButtonCount.textContent = '0'; // Visa 0 om inga varor
    }
}


