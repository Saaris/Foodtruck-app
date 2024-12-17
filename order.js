
import { apiKey, url, tenantId } from "./constants.js"
import {showCart, cart} from "./cart.js";
import { showCartScreen, showMenu, showRecieveOrder } from "./hide-show-functions.js";
import { resetCount } from "./order-in-cart.js";

const orderButton = document.getElementById('order-button')

orderButton.addEventListener('click', () => {
    console.log('showCart-screen körs')
    showCart()
    showCartScreen()
    //console.log('showcart-screen körs')
} 
    
    
);


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
            const latestOrder = await response.json();
            console.log('id senaste ordern', latestOrder)
            const receiptSections = document.querySelectorAll('.order-id')
            receiptSections.forEach(section => {
                section.innerText = latestOrder.order.id;
            })
            console.log('beställning skickad:', bodyToSend);
            cart.length = 0;
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
    showRecieveOrder()

    console.log("Ordern har startat!")
    recieveOrder()
    //här lägger du i GET request functionen
});

//Detta står i API:
// curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/%27q7jz%27/orders' \
//   -H 'accept: application/json'


 const recieveOrder = async () => {
    
    let response = await fetch(`${url}/${tenantId}/orders`, {
        headers:  {
            'Accept': 'application/json', 
            "x-zocom": apiKey,
        }

    });

    let data = await response.json();
    console.log(data);  
}
// orderElement.appendChild(showCart); 
 //recieveOrder()



 const backToMenu = document.getElementById('cart-button')
 backToMenu.addEventListener('click', () => {
     cart.length = 0;
     showCart()
     showMenu()
     resetCount()
    
console.log('tillbaka till meny')
})

const firstNewOrder = document.getElementById('first-neworder-button')
firstNewOrder.addEventListener('click', () => {
     cart.length = 0;
     showCart()
     showMenu()
     resetCount()
    
console.log('tillbaka till meny från recieve-order vyn')
})

const secondNewOrder  = document.getElementById('second-neworder-button')
secondNewOrder.addEventListener('click', () => {
     cart.length = 0;
     showCart()
     showMenu()
     resetCount()
    
console.log('tillbaka till meny från kvittovyn')
})