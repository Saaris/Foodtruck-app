const cartItem = document.getElementById("cart-section")
const cartItemsElement = document.querySelector("#cart-items")
export const cart = []

export const showCart = () => {
    // cartItem.classList.remove("hidden")
    cartItemsElement.textContent = "";

    

    const chosenItems = []



    cart.forEach((item) => {
        if (chosenItems.includes(item.name)) 

            return
            chosenItems.push(item.name)
        
        const itemElement = document.createElement("div")
        const quantity = cart.filter(i => i.name === item.name).length; //i är antalet, inte samma som item
        const totalItemPrice = (item.price * quantity)
    
        // const allTotal = (list.length.totalItemPrice)
        // const allTotalElement = document.querySelector('.receipt-total-price')
        // allTotalElement.textContent = `${allTotal}`
    

        itemElement.classList.add('item')

        const itemNameElement = document.createElement("h4")
        itemNameElement.textContent = item.name.toUpperCase();
        
        //itemElement.appendChild(itemNameElement)

       
        const priceElement = document.createElement('span')
        priceElement.textContent = `..........................${totalItemPrice}SEK`
        itemElement.appendChild(priceElement) 
        
        const namePriceContainer = document.createElement('div')
        namePriceContainer.classList.add('name-price-container')
        
        
        namePriceContainer.appendChild(itemNameElement)
        namePriceContainer.appendChild(priceElement)
    

        const quantityContainer = document.createElement('div')
        quantityContainer.classList.add('quantity-container')

        const plusButton = document.createElement('button')
        plusButton.textContent = '+'
        plusButton.classList.add('plus-button')
        
        const minusButton = document.createElement('button')
        minusButton.textContent = '-'
        minusButton.classList.add('minus-button')

        const quantityElement = document.createElement('span')
        quantityElement.textContent = quantity

        quantityContainer.appendChild(minusButton)
        quantityContainer.appendChild(quantityElement)
        quantityContainer.appendChild(plusButton)
        
        itemElement.appendChild(namePriceContainer)
        itemElement.appendChild(quantityContainer)
        

       
        plusButton.addEventListener('click', () => {
            cart.push({...item})
            showCart()
        })

        minusButton.addEventListener('click', () => {
            
            const itemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1); // Ta bort objektet på rätt index
                showCart(); // Uppdatera cart
            }
        })

        cartItemsElement.appendChild(itemElement)

    })
   
    }
    

  

