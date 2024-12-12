//order
// Detta står i API:
// curl -X 'POST' \
// 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/q7jz/orders' \  request url
//  -H 'accept: application/json' \
//  -H 'Content-Type: application/json' \
//  -d '{
//  "items": [
//    1
//  ]
//  }'


import { apiKey, url, tenantId } from "./constants.js"
const orderButton = document.querySelector('.material-symbols-outlined')


const startOrder = async () => {
    console.log('startOrder')
   
    const bodyToSend = {
        items: [ 1, 2, 3, 4 ,5 ,6]
    };
    try{
        const response = await fetch(`${url}/${tenantId}/orders`, {
            method: 'POST',
            headers: {
                "x-zocom": apiKey,
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyToSend) 
        })
        if (response.ok) {
            const data = await response.data;
            console.log('beställning skickad:', data);
        } else {
            console.log('fel vid beställning:', response.status);
        }
    } catch (error) {
        console.log('fel:', error);
    }
};
orderButton.addEventListener('click', startOrder);

//const orderButton = document.querySelector('.material-symbols-outlined')
//orderButton.addEventListener('click', startOrder);


//Detta står i API:
// curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/%27q7jz%27/orders' \
//   -H 'accept: application/json'


// const backToMenu = document.querySelector('.material-symbols-outlined1')
// const finishOrderButton = document.querySelector('.material-symbols-outlined')

// const finishOrder = async () => {
    
//     let response = await fetch(`${url}/${tenantId}/orders`, {
//         headers:  {
//             'Accept': 'application/json', 
//             "x-zocom": apiKey,
//         }

//     });

//     let data = await response.json();
//     console.log(data);  
// }
// orderElement.appendChild(orderButton); {


// }
// finishOrder()



