
import { showReceipt } from "./hide-show-functions.js"
import { tenantId, url, apiKey } from "./constants.js"
import { latestId } from "./order.js"
import { getCart } from "./cart.js"

//Visar kvitto med senaste order med GET Request

const seeReceipt = document.getElementById('see-receipt-button')
seeReceipt.addEventListener('click', async () => {
    console.log('see button funkar')
    
    console.log("latestId:", latestId);
    
    if (!latestId) {
        console.log('Ingen giltig order ID finns!');
        return;  
    }
    
    console.log("visa kvitto för orderId:", latestId);
    
    showReceipt();  
    await singleOrderReciept(latestId); 

    // console.log("visa kvitto:")
    // showReceipt()
    // await singleOrderReciept(orderId);
    // //singleOrderReciept()           
    // console.log(singleOrderReciept())  
   
})
// Här är GET request
const singleOrderReciept = async (id) => {
    if (!id) {
        console.log('Order ID är undefined eller tomt!');
        return;
    }

    console.log("Hämtar kvitto för order ID:", id);

    try {
        let response = await fetch(`${url}/receipts/${id}`, {
            headers: {
                'Accept': 'application/json',
                "x-zocom": apiKey,
            }
        });

        if (!response.ok) {
            throw new Error(`Fel vid hämtning: ${response.statusText}`);
        }

        let data = await response.json();
        console.log("Kvitto-data:", data);  // Logga den hämtade datan

        if (!data || !data.receipt || !data.receipt.items) {
            console.log('Ingen giltig orderdata mottogs från servern');
            return;
        }

        
        const receiptContainer = document.getElementById('show-order-on-receipt'); 

        receiptContainer.innerHTML = '';

        
        const orderInReceipt = document.createElement('div');
        orderInReceipt.classList.add('order');

        const itemsList = document.createElement('div');
        itemsList.classList.add('items-list');

        
        data.receipt.items.forEach(item => {
            const orderedItems = document.createElement('div');
            orderedItems.classList.add('item');

            // Skapa och lägg till item namn, typ, pris och kvantitet
            const itemName = document.createElement('p');
            itemName.textContent = `${item.name}`; 
            orderedItems.appendChild(itemName);

            const itemPrice = document.createElement('p');
            itemPrice.textContent = `${item.price} SEK`;
            orderedItems.appendChild(itemPrice);

            const itemQuantity = document.createElement('p');
            itemQuantity.textContent = `${item.quantity} stycken`;
            orderedItems.appendChild(itemQuantity);

            itemsList.appendChild(orderedItems);
        });

        orderInReceipt.appendChild(itemsList);
        
        const totalPrice = data.receipt.items.reduce((total, item) => total + item.price * item.quantity, 0);
        
        const totalPriceOnReceipt = document.createElement('p');
        totalPriceOnReceipt.classList.add('total-price');
        totalPriceOnReceipt.textContent = `${totalPrice} SEK`;
        orderInReceipt.appendChild(totalPriceOnReceipt);

       
        receiptContainer.appendChild(orderInReceipt);

    } catch (error) {
        console.log('fel:', error);
    }
}
