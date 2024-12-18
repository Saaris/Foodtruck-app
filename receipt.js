
import { showReceipt } from "./hide-show-functions.js"
import { tenantId, url, apiKey } from "./constants.js"

latestId = latestOrderId

//eventlyssnare visa kvitto + senaste ordern
const seeReceipt = document.getElementById('see-receipt-button')
seeReceipt.addEventListener('click', async () => {
    console.log('see button funkar')
    const orderId = latestId
    showReceipt()
    singleOrderReciept(orderId)  //få in orderId i denna funktion, som parameter
   
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
