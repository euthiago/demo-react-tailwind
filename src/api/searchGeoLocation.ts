import { ExpectedGeoLocationResult, GeoLocation } from "../vite-env"
import jsonp from 'jsonp-promise'

const URL = "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address="
const URL_SULFIX = "&benchmark=2020&format=json"

/**
 * Search for a geo location using a text prompt
 * I figured out the regular fetch is not working,
 * but jsonp is due to server side policies
 */
export default async (prompt:string):Promise<GeoLocation> => {

	try {
		// 4600 SILVER HILL RD, WASHINGTON, DC, 20233
		// 1225+Prestwick+Terrace+Mahtomedi+MN
		const url = URL+prompt+URL_SULFIX
		// const url = "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=4600 SILVER HILL RD, WASHINGTON, DC, 20233&benchmark=2020&format=json"
		// const url = "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=1225+Prestwick+Terrace+Mahtomedi+MN&benchmark=Public_AR_Current&format=json"
	
		const expected = await jsonp<ExpectedGeoLocationResult>(url).promise

		if(!expected.result){
			return Promise.reject("GeoLocation service not responding properly. Try again later.")
		}
		if(expected.result.addressMatches.length > 0){

			let addr = expected.result.addressMatches[0]
			return {
				latitude: addr.coordinates.y,
				longitude: addr.coordinates.x,
				city: addr.addressComponents.city,
				state: addr.addressComponents.state,
			}
		}
		return Promise.reject("Location not found. Try a complete one line address (ie: 4600 Silver Hill Rd, Washington, DC 20233)")
	}catch(e){
		console.log(e)
		return Promise.reject("Error fetching the GeoLocation. Try again later.")
	}

}