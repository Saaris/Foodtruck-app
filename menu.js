let url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com'

// fetch(`${url}/keys`, { method: 'POST' })

const getKey = async () => {
    let response= await fetch(`${url}/keys`, 
        { method: 'POST' })
    let data = await response.json()
    return data.key
}
// getKey()

const key=  "yum-ngfeNG1iaq9Q2PJK"


const getTenant = async () =>  {
    let key = await getKey()
    let response= await fetch(`${url}/tenants`, 
        {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-zocom": key,
        },
        body: JSON.stringify({
            name: "Sara Serti1"
        })
    })
    let data = await response.json()
    console.log(data)
}
getTenant()


const foodElement = document.getElementById('food');

const getMenu = async () => {
    
    let response = await fetch(`${url}/menu`, {
        headers: { "x-zocom": key }
    });

    let data = await response.json();
    console.log(data);  

    let items = Array.isArray(data) ? data : data.items;

    if (Array.isArray(items)) {
        items.forEach((item, index) => {
            
            const menuButton = document.createElement('button');
            menuButton.id = "menu";
            menuButton.classList.add('menu-box');


            const price = document.createElement('p');
            price.id = "city";
            price.classList.add('show-price');
            price.innerText = `${item.name}...............................${item.price}SEK`;

            
            if (index < 5) {
                
                const foodIngredient = document.createElement('p');
                foodIngredient.id = "food-ingredient";
                foodIngredient.classList.add('ingredient');
                foodIngredient.innerText = item.ingredients;

               
                menuButton.appendChild(price);
                menuButton.appendChild(foodIngredient);
            }
            
            else if (index === 5) {
                const sauceSection = document.createElement('p');
                sauceSection.id = "sauce";
                sauceSection.innerText = "DIPSÅS"; 

                
                menuButton.appendChild(price);
                menuButton.appendChild(sauceSection);
            }
            
            else if (index === 6) {
                const drink = document.createElement('p');
                drink.id = "drink";
                drink.innerText = "DRICKA"; 

                menuButton.appendChild(price);
                menuButton.appendChild(drink);
            }

            foodElement.appendChild(menuButton);
        });
    } else {
        console.error('Expected an array of items, but got:', items);
    }
};

getMenu();

            
        


//  curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu/q7jz' \
//   -H 'accept: application/json'

const getMenuId  = async () =>  {
    const menuUrl = (`${url}/menu`);

    // try {
      
      const response = await fetch(menuUrl + '/q7jz', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
  
      console.log('Response:', response);
  
      if (response.ok) {
        
        const data = await response.json();
        console.log('Data:', data); 
      } else {
        throw new Error('Network response was not ok');
      }
    // } catch (error) {

    //   console.log(error);
    // }
  }
  
//   getMenuId();
  