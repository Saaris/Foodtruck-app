export function resetCount() {
    
    const orderButtonCount = document.getElementById('show-order-count');
    orderButtonCount.textContent = ''; 
    orderButtonCount.style.visibility = "hidden"; 
}