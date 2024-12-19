    export { showMenu, showCartScreen, showReceipt, showRecieveOrder}
    
    const menuScreenSection = document.getElementById('menu-screen')
    const cartSection = document.getElementById('cart-section')
    const recieveOrderSection = document.getElementById('recieve-order-section')
    const receiptSection= document.getElementById('receipt-section')
    
    
    function showMenu () { 
        menuScreenSection.classList.remove('hidden')
        cartSection.classList.add('hidden')
        receiptSection.classList.add('hidden')
        recieveOrderSection.classList.add('hidden')
        
     }


    function showCartScreen() {
        cartSection.classList.remove('hidden')
        menuScreenSection.classList.add('hidden')
        receiptSection.classList.add('hidden')
        recieveOrderSection.classList.add('hidden')
    }
    
    function showRecieveOrder() {
        cartSection.classList.add('hidden')
        menuScreenSection.classList.add('hidden')
        receiptSection.classList.add('hidden')
        recieveOrderSection.classList.remove('hidden')
    }

    function showReceipt() {
        cartSection.classList.add('hidden')
        menuScreenSection.classList.add('hidden')
        receiptSection.classList.remove('hidden')
        recieveOrderSection.classList.add('hidden')

    }
 