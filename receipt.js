
import { showReceipt } from "./hide-show-functions.js"
import { tenantId, url, apiKey } from "./constants.js"
import { latestId } from "./order.js"
import { getCart } from "./cart.js"

//Visar kvitto med senaste order med GET Request, kopplat till se kvitto-button

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
   
})
// Här är GET request för enstaka order som skall visas på kvitto
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
            return;
        }
         //lista på de items jag valt som skall visas på kvitto
        const itemsList = document.createElement('div');
        const orderInReceipt = document.createElement('div');
        const totalPriceContainer = document.getElementById('total-section'); 
        const receiptContainer = document.getElementById('show-order-on-receipt'); 
        receiptContainer.innerHTML = '';

        totalPriceContainer.innerHTML = '';
            
        orderInReceipt.classList.add('order');
        
        itemsList.classList.add('items-list');

    
        data.receipt.items.forEach(item => {
            const orderedItems = document.createElement('div');
            const itemNamePrice = document.createElement('div');

            orderedItems.classList.add('receipt-item');
            itemNamePrice.classList.add('item-name-price');

            // Visar namn, pris och antal på kvitto
            const itemName = document.createElement('p');
            const itemPrice = document.createElement('p');
            const itemQuantity = document.createElement('p');

            itemName.textContent = `${item.name}.........................${item.price} SEK`; 
            itemNamePrice.appendChild(itemName);
            
            itemNamePrice.appendChild(itemPrice);
            orderedItems.appendChild(itemNamePrice);

            itemQuantity.textContent = `${item.quantity} stycken`;
            itemQuantity.classList.add('quantity')
            orderedItems.appendChild(itemQuantity);

            itemsList.appendChild(orderedItems);
        });

        orderInReceipt.appendChild(itemsList);
        
        //visar totalpris på kvitto
        const totalPrice = data.receipt.items.reduce((total, item) => total + item.price * item.quantity, 0);
        const totalPriceOnReceipt = document.createElement('p');
        const momsText = document.createElement('p');

        totalPriceOnReceipt.classList.add('total-price');
        totalPriceOnReceipt.textContent = `TOTALT    ${totalPrice} SEK`;

        totalPriceContainer.appendChild(totalPriceOnReceipt);
        receiptContainer.appendChild(orderInReceipt);

        
        momsText.textContent = 'inkl 20% moms';
        momsText.classList.add('moms')
        totalPriceContainer.appendChild(momsText)

    } catch (error) {
        console.log('fel:', error);
    }
}
