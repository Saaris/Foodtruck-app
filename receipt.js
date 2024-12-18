
import {showCart } from "./cart.js";
import { showReceipt, showMenu } from "./hide-show-functions.js"
import { tenantId, url, apiKey } from "./constants.js"

const seeReceipt = document.getElementById('see-receipt-button')
seeReceipt.addEventListener('click', () => {
    console.log('see button funkar')
    showReceipt()
    //singleOrderReciept()
   
})

// curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/receipts/%22u3hm%22' \
//   -H 'accept: application/json'
//	Returns receipt for single order.

const singleOrderReciept = async () => {

    
    
    let response = await fetch(`${url}/receipts/${tenantId}/${orderId}`, {
        headers:  {
            'Accept': 'application/json', 
            "x-zocom": apiKey,

        }

    });

    let data = await response.json();
    console.log(data);  
}
