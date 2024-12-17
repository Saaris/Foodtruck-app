export function pickItem(item) {
    
    cart.push(item);
    console.log(`Du klickade på: ${item.name}`);

    
    orderButtonCount();
}


function orderButtonCount() {
    const orderButtonCount = document.getElementById('order-button-count') 
    if (orderButton) {
        
        const itemCount = pickItem;

        orderButton.textContent = `antal i varukorgen är: ${itemCount}`; 
    }
}