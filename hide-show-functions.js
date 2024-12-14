export { hideMenuScreen, showMenuScreen, hideOrderScreen, showOrderScreen, showReceitScreen, hideReceitScreen,
    showRecieveOrderScreen, hideRecieveOrderScreen
}

function hideMenuScreen() {
    let menuScreenElements = document.querySelectorAll('#menu-screen *');
    menuScreenElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
}

function showMenuScreen() {
    let menuScreenElements = document.querySelectorAll('#menu-screen *');
    menuScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });


}
function hideOrderScreen() {
    let orderScreenElements = document.querySelectorAll('#cart-section *');
    orderScreenElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
}

function showOrderScreen() {
    let orderScreenElements = document.querySelectorAll('#cart-section *');
    orderScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}

function hideRecieveOrderScreen() {
    let recieveOrderScreenElements = document.querySelectorAll('#recieve-order-section *');
    recieveOrderScreenElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
}

function showRecieveOrderScreen() {
    let recieveOrderScreenElements = document.querySelectorAll('#recieve-order-section *');
    recieveOrderScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}


function hideReceitScreen() {
    let receitScreenElements = document.querySelectorAll('#receit-section *');
    receitScreenElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
}

function showReceitScreen() {
    let receitScreenElements = document.querySelectorAll('#receit-section *');
    receitScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}