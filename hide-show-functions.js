export { hideMenuScreen, showMenuScreen, hideCartScreen, showCartScreen, showReceiptScreen, hideReceiptScreen,
    showRecieveOrderScreen, hideRecieveOrderScreen }

function hideMenuScreen() {
    let menuScreenElements = document.querySelectorAll('#menu-screen *');
    menuScreenElements.forEach(function(element) {
        element.setAttribute('hidden', '');
    });
}

function showMenuScreen() {
    let menuScreenElements = document.querySelectorAll('#menu-screen *');
    menuScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });


}
function hideCartScreen() {
    let orderScreenElements = document.querySelectorAll('#cart-section *');
    orderScreenElements.forEach(function(element) {
        element.setAttribute('hidden', '');
    });
}

function showCartScreen() {
    let orderScreenElements = document.querySelectorAll('#cart-section *');
    orderScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}

function hideRecieveOrderScreen() {
    let recieveOrderScreenElements = document.querySelectorAll('#recieve-order-section *');
    recieveOrderScreenElements.forEach(function(element) {
        element.setAttribute('hidden', '');
    });
}

function showRecieveOrderScreen() {
    let recieveOrderScreenElements = document.querySelectorAll('#recieve-order-section *');
    recieveOrderScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}


function hideReceiptScreen() {
    let receiptScreenElements = document.querySelectorAll('#receipt-section *');
    receiptScreenElements.forEach(function(element) {
        element.setAttribute('hidden', '');
    });
}

function showReceiptScreen() {
    let receiptScreenElements = document.querySelectorAll('#receipt-section *');
    receiptScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}