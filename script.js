
// const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com';

// let apiKey;

// const getKey = async () => {
//   try {
//     const response = await fetch(`https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) return;

//     const keyData = await response.json();
//     apiKey = keyData.key;
//     console.log(apiKey);
//     return keyData.key;
//   } catch (error) {
//     console.log('det gick inte att..', error);
//   }
// };

// getKey();

// const getTenant = async () => {
//     const key = await getKey(); 
    
//     try {
//       const bodyToParse = {
//         'name': 'Sara S',
//       };
  
//       const response = await fetch(`https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants`, {
//         method: 'POST',
//         name: "x-zocom",
//         body: JSON.stringify(bodyToParse),
//         headers: {
//           'Content-Type': 'application/json',
//           'x-zocom': key,
//         },
//       });
  
//       if (!response.ok) return;
  
//       const tenantData = await response.json();
  
//       localStorage.setItem('user', JSON.stringify(tenantData));
  
//       return tenantData.id;
//     } catch (error) {
//       console.log('error:', error);
//     }
//   };
  
//   getTenant();



// const url = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/';
//   let apiKey= 'yum-toeJ8M4AzH5F1cFK'


// const bodyToSend = {
//     name: 'Ann di Feynd'
// }
// const options = {
//     method: 'POST',
//     body: JSON.stringify(bodyToSend)
// }
// fetch(url, options)


//     try {
//     const response = await fetch(url,options)
//         console.log('status är: ', response.status);

//         const data = await response.json()
//         console.log('data från API: ', data);


// } catch (error) {
//     console.log('det gick inte ...', error.message);

// }


// const getTenant = {
//     name: 'Sara S'
// }
// const options = {
//     method: 'POST',
//     headers: {
//     "Content-Type": 'application/json',  // vi skickar JSON i body
//     "x-zocom": apiKey  // din API-nyckel
// },
// body: JSON.stringify(bodyToSend)
// }
// fetch(url, options)

//'yum-PxtRFopRoKZwir25'

const keyUrl = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys'
    const bodyToSend = {
    name: 'Saaris'
}
    const options = {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json',  

    },

    body: JSON.stringify(bodyToSend)
}

    try {
    const response = await fetch(keyUrl,options)
        console.log('status är: ', response.status);

        const data = await response.json()
        console.log('data från API: ', data);


} catch (error) {
    console.log('det gick inte ...', error.message);

}

const getTenantUrl = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants'

const option = {
        method: 'POST',
        headers: {
        "Content-Type": 'application/json', 
        "x-zocom": 'yum-NKsTcw3OPrMQPoSz'
    },
    body: JSON.stringify(bodyToSend)
}
    fetch(getTenantUrl, option)




