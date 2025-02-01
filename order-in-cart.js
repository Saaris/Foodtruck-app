//nollställ om man beställer igen
let cart = [];
export function resetCount() {
    
    const orderButtonCount = document.getElementById('show-order-count');
    cart.length = 0;
    orderButtonCount.textContent = 0; 
    orderButtonCount.style.visibility = "visible"; 
}
// export function emptyCartButton () {
//         if (itemCount = 0)
//             !startOrder 
//         }