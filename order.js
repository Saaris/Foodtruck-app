
import { apiKey, url, tenantId } from "./constants.js"
import {showCart} from "./cart.js";
import { hideOrderScreen, showMenuScreen } from "./hide-show-functions.js";
const orderButton = document.querySelector('.material-symbols-outlined')

orderButton.addEventListener('click', showCart);

const startOrder = async () => {
    console.log('startOrder')
   
    const bodyToSend = {
        items: [ 1, 2, 3, 4 ,5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    };
    try{
        const response = await fetch(`${url}/${tenantId}/orders`, {
            method: 'POST',
            headers: {
                "x-zocom": apiKey,
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyToSend) 
        })
        if (response.ok) {
            const data = await response.data;
            console.log('beställning skickad:', bodyToSend);
        } else {
            console.log('fel vid beställning:', response.status);
        }
    } catch (error) {
        console.log('fel:', error);
    }
};

const payButton = document.querySelector('.pay-button');

payButton.addEventListener('click', () => {
    startOrder();
    console.log("Ordern har startat!")
});


//const orderButton = document.querySelector('.')
//orderButton.addEventListener('click', startOrder);


//Detta står i API:
// curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/%27q7jz%27/orders' \
//   -H 'accept: application/json'



 //const recieveOrder = async () => {
    
//     let response = await fetch(`${url}/${tenantId}/orders`, {
//         headers:  {
//             'Accept': 'application/json', 
//             "x-zocom": apiKey,
//         }

//     });

//     let data = await response.json();
//     console.log(data);  
// }
// orderElement.appendChild(orderButton); {


// }
// recieveOrder()



const backToMenu = document.getElementById('cart-button')
backToMenu.addEventListener('click', () => {
    document.querySelector('#cart').classList.add('hidden') 
    document.querySelector('#menu-screen').classList.remove('hidden')
console.log('tillbaka till meny')
})