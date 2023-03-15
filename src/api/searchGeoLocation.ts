import { ExpectedGeoLocationResult, GeoLocation } from "../vite-env"

const URL = "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address="
const URL_SULFIX = "&benchmark=2020&format=json"

/**
 * Search for a geo location using a text prompt
 */
export default async (prompt:string):Promise<GeoLocation> => {

	try {
		const url = URL+prompt+URL_SULFIX
		const result = await fetch(url, { mode: 'no-cors'})
		let expected:ExpectedGeoLocationResult = await result.json()
		console.log("we...", expected)
		if(expected.result.addresses.length > 0){

			console.log("okok  1")
			let addr = expected.result.addresses[0]
			return {
				latitude: addr.coordinates.y,
				longitude: addr.coordinates.x,
				city: addr.addressComponents.city,
				state: addr.addressComponents.state,
			}
		}
		console.log("okok")
		return Promise.reject("Location not found")
	}catch(e){
		return Promise.reject("Error fetching the GeoLocation")
	}

}