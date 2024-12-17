// curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/receipts/%22u3hm%22' \
//   -H 'accept: application/json'
//	Returns receipt for single order.

//gör eventlyssn på #see-receipt-button
import {showCart } from "./cart.js";
import { showReceipt, showMenu } from "./hide-show-functions.js"

const seeReceipt = document.getElementById('see-receipt-button')
seeReceipt.addEventListener('click', () => {
    console.log('see button funkar')
    showReceipt()
   
})

