// curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/receipts/%22u3hm%22' \
//   -H 'accept: application/json'
//	Returns receipt for single order.

//gör eventlyssn på #see-receipt-button
// import { hideMenuScreen, showMenuScreen, hideOrderScreen, showOrderScreen, showReceiptScreen, hideReceiptScreen,
//     showRecieveOrderScreen, hideRecieveOrderScreen, 
//     hideCartScreen} from "./hide-show-functions.js"
console.log('Scriptet laddades')
    import { showReceiptScreen } from './hide-show-functions.js'

const seeReceipt = document.getElementById('see-receipt-button')
seeReceipt.addEventListener('click', () => {
    console.log('see button funkar')
    showReceiptScreen()
   
})
