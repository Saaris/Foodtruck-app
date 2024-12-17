    export { showMenu, showCartScreen, showReceipt, showRecieveOrder}
    
    const menuScreenSection = document.getElementById('menu-screen')
    const cartSection = document.getElementById('cart-section')
    const recieveOrderSection = document.getElementById('recieve-order-section')
    const receiptSection= document.getElementById('receipt-section')
    
    
    function showMenu () { 
        console.log('show-menu körs')
        menuScreenSection.classList.remove('hidden')
    
        cartSection.classList.add('hidden')
        console.log('hide-cart körs')
        receiptSection.classList.add('hidden')
        console.log('hide-receipt körs')
        recieveOrderSection.classList.add('hidden')
        console.log('hide-recieve-order körs')
     }


    function showCartScreen() {
        console.log('visa-cart-screen före')
        cartSection.classList.remove('hidden')
        console.log('visa-cart-screen efter')

        console.log('göm-menu-screen före')
        menuScreenSection.classList.add('hidden')
        console.log('göm-menu-screen efter')
        
        console.log('göm receipt-screen före')
        receiptSection.classList.add('hidden')
        console.log('göm receipt-screen efter')

        console.log('göm receive order-screen före')
        recieveOrderSection.classList.add('hidden')
        console.log('göm receive order-screen efter')
    }
    
    function showRecieveOrder() {
        console.log('showrecieveorder körs')
        cartSection.classList.add('hidden')
        menuScreenSection.classList.add('hidden')
        receiptSection.classList.add('hidden')
        recieveOrderSection.classList.remove('hidden')
    }

    function showReceipt() {
        console.log('showreceipt körs')
        cartSection.classList.add('hidden')
        menuScreenSection.classList.add('hidden')
        receiptSection.classList.remove('hidden')
        recieveOrderSection.classList.add('hidden')

    }
 


// export { hideMenuScreen, showMenuScreen, hideCartScreen, showCartScreen, showReceiptScreen, hideReceiptScreen,
//     showRecieveOrderScreen, hideRecieveOrderScreen }

// function hideMenuScreen() {
//     let menuScreenElements = document.querySelectorAll('#menu-screen *');
//     menuScreenElements.forEach(function(element) {
//         element.setAttribute('hidden', '');
//     });
// }

// function showMenuScreen() {
//     let menuScreenElements = document.querySelectorAll('#menu-screen *');
//     menuScreenElements.forEach(function(element) {
//         element.removeAttribute('hidden');
//     });


// }
// function hideCartScreen() {
//     let orderScreenElements = document.querySelectorAll('#cart-section *');
//     orderScreenElements.forEach(function(element) {
//         element.setAttribute('hidden', '');
//     });
// }

// function showCartScreen() {
//     let orderScreenElements = document.querySelectorAll('#cart-section *');
//     orderScreenElements.forEach(function(element) {
//         element.removeAttribute('hidden');
//     });
// }

// function hideRecieveOrderScreen() {
//     let recieveOrderScreenElements = document.querySelectorAll('#recieve-order-section *');
//     recieveOrderScreenElements.forEach(function(element) {
//         element.setAttribute('hidden', '');
//     });
// }

// function showRecieveOrderScreen() {
//     let recieveOrderScreenElements = document.querySelectorAll('#recieve-order-section *');
//     recieveOrderScreenElements.forEach(function(element) {
//         element.removeAttribute('hidden');
//     });
// }


// function hideReceiptScreen() {
//     let receiptScreenElements = document.querySelectorAll('#receipt-section *');
//     receiptScreenElements.forEach(function(element) {
//         element.setAttribute('hidden', '');
//     });
// }

// function showReceiptScreen() {
//     let receiptScreenElements = document.querySelectorAll('#receipt-section *');
//     receiptScreenElements.forEach(function(element) {
//         element.removeAttribute('hidden');
//     });
// }