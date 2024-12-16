export function pickItem(item) {
    // Lägg till varan i cart
    cart.push(item);
    console.log(`Du klickade på: ${item.name}`);

    // Uppdatera antalet varor på #order-button
    updateOrderButtonCount();
}

// Ny funktion för att uppdatera antalet varor på #order-button
function updateOrderButtonCount() {
    const orderButton = document.querySelector('#order-button'); // Hitta #order-button
    if (orderButton) {
        // Räkna alla varor i cart
        const itemCount = cart.length;
        // Uppdatera texten på knappen
        orderButton.textContent = `Order (${itemCount})`; // Visar t.ex. "Order (3)"
    }
}