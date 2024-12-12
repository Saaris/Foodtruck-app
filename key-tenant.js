import { url, apiKey } from "./constants.js"

const apiButton = document.querySelector('#api-button')
const tenantButton = document.querySelector('#tenant-button')

apiButton.addEventListener('click', async () => {
	const options = {
		method: 'POST'
	}
	const response = await fetch(url + '/keys', options)
	const data = await response.json()
	console.log('API-nyckel data:', data)
})


tenantButton.addEventListener('click', async  () => {
	const options = {
		method: 'POST',
		body: JSON.stringify({ name: 'Sara Serti3' }),
		headers: {
			"Content-Type": 'application/json',
			"x-zocom": apiKey
		}
	}
	const response = await fetch(url + '/tenants', options)
	const data = await response.json()
	console.log('Tenant: ', data)
})