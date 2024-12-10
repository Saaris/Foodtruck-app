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
    let orderScreenElements = document.querySelectorAll('#order *');
    orderScreenElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
}

function showOrderScreen() {
    let orderScreenElements = document.querySelectorAll('#order *');
    orderScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}


//alternativt

function hideScreen(screenId) {
    document.getElementById(screenId).setAttribute('hidden', true);
}

function showScreen(screenId) {
    document.getElementById(screenId).removeAttribute('hidden');
}
hideScreen('menu-screen');
showScreen('menu-screen');
hideScreen('order');
showScreen('order');
