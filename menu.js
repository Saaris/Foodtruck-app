 import { apiKey, url } from "./constants.js"

const foodElement = document.getElementById('menu-screen');
//hämta dipsås och dryckeselementet och append resp sak i de
//baserat på type(wonton, dip och drink)

const getMenu = async () => {
    
    let response = await fetch(`${url}/menu`, {
        headers: { "x-zocom": apiKey }
    });

    let data = await response.json();
    console.log(data);  

    let items = Array.isArray(data) ? data : data.items;

    if (Array.isArray(items)) {
        items.forEach((item, index) => {
            
            const menuButton = document.createElement('button');
            menuButton.id = "menu";
            menuButton.classList.add('menu-box');

            const price = document.createElement('p');
            price.id = "city";
            price.classList.add('show-price');
            price.innerText = `${item.name}...............................${item.price}SEK`;

            menuButton.addEventListener('click', () => {
                pickItem(item);
            })

            
            if (item.type === 'wonton') {
                
                const foodIngredient = document.createElement('p');
                //foodIngredient.id = "food-ingredient";
                foodIngredient.classList.add('ingredient');
                foodIngredient.innerText = item.ingredients;

                const foodDescription = document.createElement('p')
                foodDescription.classList.add('description');
                foodDescription.innerText = item.description;
               
                menuButton.appendChild(price);
                menuButton.appendChild(foodIngredient);
                menuButton.appendChild(foodDescription);

                foodElement.appendChild(menuButton)
            }
            
            else if (item.type === 'dip') {
                const sauceSection = document.createElement('p');
                //sauceSection.id = item.id;
                sauceSection.innerText = item.name; 
                sauceSection.classList.add('dip-sauce') //kan styla denna i css
                //lägga in namn på såserna här
                sauceSection.addEventListener('click', () => {
                    pickItem(item);
                })

                const sauceContainer = document.getElementById('sauce-section')
                sauceContainer.appendChild(sauceSection)
            }
            
            else if (item.type === 'drink') {
                const drink = document.createElement('p');
                //drink.id = item.id;
                drink.innerText = item.name;  
                drink.classList.add('drinks')
                drink.addEventListener('click', () => {
                    pickItem(item);
                })

                const drinkContainer = document.getElementById('drink-section')
                drinkContainer.appendChild(drink)
            }

        
        });
    } else {
        console.error('sorry, error', items);
    }
};

getMenu();

function pickItem(item) {
    console.log(`Du klickade på: ${item.name}`);
}
            