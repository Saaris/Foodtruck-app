const cartItem = document.querySelector("#cart")
const cartItemsElement = document.querySelector("#cart-items")
export const cart = []

export const showCart = () => {
    cartItem.classList.remove("hidden")

    cartItemsElement.textContent = "";

    const chosenItems = []
    cart.forEach((item) => {
        if (chosenItems.includes(item.name)) 

            return
            chosenItems.push(item.name)
        
        const itemElement = document.createElement("div")
        const quantity = cart.filter(item => item.name === item.name).length;
        const totalItemPrice = (item.price * quantity)
        
        itemElement.classList.add('item')

        const itemNameElement = document.createElement("h4")
        itemNameElement.textContent = item.name
        
        itemElement.appendChild(itemNameElement)

       
        const priceElement = document.createElement('span')
        priceElement.textContent = `${totalItemPrice}SEK`
        itemElement.appendChild(priceElement) 
        
    

        const quantityContainer = document.createElement('div')
        quantityContainer.classList.add('quantity-container')

        
    })
    
    }
