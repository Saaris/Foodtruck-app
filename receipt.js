
import { showReceipt } from "./hide-show-functions.js"
import { tenantId, url, apiKey } from "./constants.js"
import { latestId } from "./order.js"



//eventlyssnare visa kvitto + senaste ordern
const seeReceipt = document.getElementById('see-receipt-button')
seeReceipt.addEventListener('click', async () => {
    console.log('see button funkar')
    // const orderId = getLatestId()
    console.log("visa kvitto:")
    showReceipt()
    singleOrderReciept(latestId)           //få in orderId i denna funktion, som parameter
    console.log(singleOrderReciept())  
   
})
// Här är GET request för single order som skall visas på kvitto
const singleOrderReciept = async (id) => {
        console.log(id)
    let response = await fetch(`${url}/receipts/${id}`, {
        headers:  {
            'Accept': 'application/json', 
            "x-zocom": apiKey,
        }
    });

    let data = await response.json();
    console.log(data);  
}

// const showSingleOrder = document.querySelector('#show-order-on-receipt')
// showSingleOrder.textContent = orderId;
