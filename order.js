
import { apiKey, url, tenantId } from "./constants.js"
import {showCart, cart} from "./cart.js";
// import { hideOrderScreen, showOrderScreen, showReceiptScreen, hideReceiptScreen,
//     showRecieveOrderScreen, hideRecieveOrderScreen } from "./hide-show-functions.js"

const orderButton = document.getElementById('order-button')

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
            const latestOrder = await response.json();
            console.log('id senaste ordern',latestOrder)
            const receiptSection = document.querySelector('id-show')
            receiptSection.innerText = latestOrder.id
            console.log('beställning skickad:', bodyToSend);
            cart.length = 0;
        } else {
            console.log('fel vid beställning:', response.status);
        }
    } catch (error) {
        console.log('fel:', error);
    }
};



function toggleElementDisplay(element, hide) {
    if (hide) {
        element.classList.remove('hidden')
    }
    else {
        element.classList.add('hidden')
    }
}



const payButton = document.querySelector('.pay-button');

payButton.addEventListener('click', () => {
    startOrder();
    const cartSection = document.getElementById('cart-section')
    cartSection.classList.add('hidden')
    
    //const menuScreenSection = document.getElementById('menu-screen')
    //menuScreenSection.classList.add('hidden')

   //toggleElementDisplay(cartSection, false)
    
    const recieveOrderSection = document.getElementById('recieve-order-section')
   
    recieveOrderSection.style.display = 'block';
    recieveOrderSection.classList.remove('hidden')


    //toggleElementDisplay(recieveOrderSection, true)
    
    const receiptSection= document.getElementById('receipt-section')
    receiptSection.classList.add('hidden')
    

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
     document.querySelector('#cart-section').classList.add('hidden') 
     document.querySelector('#menu-screen').classList.remove('hidden')
     
    
    
console.log('tillbaka till meny')
})