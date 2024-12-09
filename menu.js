let url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com'

fetch(`${url}/keys`, { method: 'POST' })

async function getKey (){
    let response= await fetch(`${url}/keys`, 
        { method: 'POST' })
    let data = await response.json()
    return data.key
}
getKey()

const key=  "yum-ngfeNG1iaq9Q2PJK"


async function getTenant() {
    let key = await getKey()
    let response= await fetch(`${url}/tenants`, 
        {
        method: 'POST',
        headers: {
            "x-zocom": key,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Sara Seerrti"
        })
    })
    let data = await response.json()
    console.log(data)
}
getTenant()

const foodEl = document.getElementById("food")

async function loadMenu() {

    let response = await fetch(`${url}/menu`, {
         headers: {
             "x-zocom": key
         }
     })
     let data = await response.json()

     data.items.forEach(item => {
         const html = `<button id="menu-karlstad" class="menu-box">
             <p id="karlstad-price" class="show-price">${item.name}...............................${item.price}SEK</p>
            <p id="karlstad-ingredient" class="ingredient">
                 ${item.ingredients}             </p>
         </button>`
         foodEl.insertAdjacentHTML('beforeend', html)

     })
 }

 loadMenu()

//  curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu/q7jz' \
//   -H 'accept: application/json'

async function getMenu() {
    const menuUrl = (`${url}/menu/q7jz`);
  
    try {
      
      const response = await fetch(menuUrl, {
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
    } catch (error) {

      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  getMenu();
  