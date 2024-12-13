const cartItem = document.querySelector("#cart")
const cartItemsElement = document.querySelector("#cart-items")
export const cart = []

export const showCart = () => {
    cartItem.classList.remove("hidden")

    cartItemsElement.textContent = "";
    
    const chosenItems = []
    cart.forEach((item) => {
        if (chosenItems.includes(item.name)) 
        
        const itemElement = document.createElement("div")
        const quantity = cart.filter(item => item.name === item.name).length;
        const price = (item.price * quantity)
        
        itemElement.classList.add('item')
    })
    
    }
