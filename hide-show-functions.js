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
function hideFirstScreen() {
    let firstScreenElements = document.querySelector('.img');
    firstScreenElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
}

function showFirstScreen() {
    let firstScreenElements = document.querySelector('.img');
    firstScreenElements.forEach(function(element) {
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


export { hideMenuScreen, showMenuScreen, hideFirstScreen, showFirstScreen, hideOrderScreen, showOrderScreen}

