// GET = hämtar någonting, POST = skickar med någonting
// POST (då behöver vi skicka med en body)
// API-Key: yum-3PqATVLPR8zw2xRn

const baseUrl = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com';

let apiKey;

const getKey = async () => {
  try {
    const response = await fetch(`${baseUrl}/keys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) return;

    const keyData = await response.json();
    apiKey = keyData.key;
    console.log(apiKey);
    return keyData.key;
  } catch (error) {
    console.log('det gick inte att..', error);
  }
};

getKey();

