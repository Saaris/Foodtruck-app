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
//  Req
import { apiKey, tenantId } from "./constants.js"


let url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com'


const orderButton = document.querySelector('.material-symbols-outlined')

const order = async () => {
    try{
        const response = await fetch(`${url}/${tenantId}/orders`, {
            method: 'POST',
            headers: {
                "x-zocom": apiKey,
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                "items": [
                    1, 2, 3 ,4 ,5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
                  ]
            },
            body: JSON.stringify(bodyToSend) 

        
        })
    }catch(error){
        console.log('error:', error)
    }
}
orderButton.addEventListener('click', async () => {

        fetch(`${url}/${tenantId}/orders`, order)
})


//Detta står i API:
// curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/%27q7jz%27/orders' \
//   -H 'accept: application/json'



// const orderElement = document.getElementById('.material-symbols-outlined');

// const getOrder = async () => {
    
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
// getOrder()



