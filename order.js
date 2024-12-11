//Detta står i API:
//curl -X 'POST' \
// 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/q7jz/orders' \  request url
// -H 'accept: application/json' \
// -H 'Content-Type: application/json' \
// -d '{
// "items": [
//   1
// ]
// }'
// Req
import { apiKey } from "./constants.js"

let url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com'


const orderButton = document.querySelector('.material-symbols-outlined')

const order = async () => {
    try{
        const response = await fetch(`${url}/${tenantId}/orders`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                "x-zocom": apiKey,
            },
            body: JSON.stringify(bodyToSend) 

        
        })
    }catch(error){
        console.log('error:', error)
    }
}
orderButton.addEventListener('click', async () => {

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                "x-zocom": tenantId,
            },
            body: JSON.stringify(bodyToSend)
        }
        fetch(`${url}/${tenantId}/orders`, options)
})


//Detta står i API:
// curl -X 'GET' \
//   'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/%27q7jz%27/orders' \
//   -H 'accept: application/json'



const orderElement = document.getElementById('.material-symbols-outlined');

const getOrder = async () => {
    
    let response = await fetch(`${url}/orders`, {
        headers: { "x-zocom": key }
    });

    let data = await response.json();
    console.log(data);  
}
orderElement.appendChild(orderButton); {


}
getOrder()