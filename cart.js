const cartItem = document.getElementById("cart-section")
const cartItemsElement = document.querySelector("#cart-items")
export const cart = []

export const showCart = () => {
    cartItem.classList.remove("hidden")
    console.log('showcart körs')
    cartItemsElement.textContent = "";

    const chosenItems = []

    let totalPrice = 0


    cart.forEach((item) => {
        if (chosenItems.includes(item.name)) 

            return
            chosenItems.push(item.name)
        
        const itemElement = document.createElement("div")
        const quantity = cart.filter(i => i.name === item.name).length; 
        const totalItemPrice = (item.price * quantity)

        totalPrice += totalItemPrice;

        itemElement.classList.add('item')

        const itemNameElement = document.createElement("h4")
        itemNameElement.textContent = item.name.toUpperCase();
       
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
                cart.splice(itemIndex, 1); 
                showCart(); 
            }
        })

        cartItemsElement.appendChild(itemElement)

    })
    //uppdatera totalpriset
    const totalPriceElement = document.getElementById("total-price");
    if (!totalPriceElement) {
        const newTotalPriceElement = document.getElementById("total");
        //newTotalPriceElement.id = "total-price";
        //newTotalPriceElement.textContent = `${totalPrice} SEK`;
        cartItemsElement.appendChild(newTotalPriceElement);
    } else {
     totalPriceElement.textContent = `Total: ${totalPrice} SEK`;
    }
    }
    
    
  

