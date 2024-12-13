export { hideMenuScreen, showMenuScreen, hideOrderScreen, showOrderScreen}

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
    let orderScreenElements = document.querySelectorAll('#cart *');
    orderScreenElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
}

function showOrderScreen() {
    let orderScreenElements = document.querySelectorAll('#cart *');
    orderScreenElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}





