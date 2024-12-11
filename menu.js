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


const foodElement = document.getElementById('menu-screen');
//hämta dipsås och dryckeselementet och append resp sak i de
//baserat på type(wonton, dip och drink)
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

            
            if (item.type === 'wonton') {
                
                const foodIngredient = document.createElement('p');
                foodIngredient.id = "food-ingredient";
                foodIngredient.classList.add('ingredient');
                foodIngredient.innerText = item.ingredients;
               
                menuButton.appendChild(price);
                menuButton.appendChild(foodIngredient);

                foodElement.appendChild(menuButton)
            }
            
            else if (item.type === 'dip') {
                const sauceSection = document.createElement('p');
                sauceSection.id = item.id;
                sauceSection.innerText = item.name; 
                sauceSection.classList.add('dip-sauce') //kan styla denna i css
                //lägga in namn på såserna här

                
                //menuButton.appendChild(price);
                //menuButton.appendChild(sauceSection);

                const sauceContainer = document.getElementById('sauce-section')
                sauceContainer.appendChild(sauceSection)
            }
            
            else if (item.type === 'drink') {
                const drink = document.createElement('p');
                drink.id = "drink";
                drink.innerText = "DRICKA"; 

                menuButton.appendChild(price);
                menuButton.appendChild(drink);
            }

        
        });
    } else {
        console.error('sorry, error', items);
    }
};

getMenu();

            
        


//  curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu/q7jz' \
//   -H 'accept: application/json'

// const getMenuId  = async () =>  {
//     const menuUrl = (`${url}/menu`);

//     // try {
      
//       const response = await fetch(menuUrl + '/q7jz', {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json'
//         }
//       });
  
//       console.log('Response:', response);
  
//       if (response.ok) {
        
//         const data = await response.json();
//         console.log('Data:', data); 
//       } else {
//         throw new Error('Network response was not ok');
//       }
//     // } catch (error) {

//     //   console.log(error);
//     // }
//   }
  
//   getMenuId();
  