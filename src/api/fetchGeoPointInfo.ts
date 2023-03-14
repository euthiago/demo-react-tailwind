import { ExpectedGeoPointResult, GeoPointInfo } from "../vite-env"

const URL = "https://api.weather.gov/points/"

/**
 * Geo Point Info fetching
 */
export default async (latitude:string, longitude:string):Promise<GeoPointInfo> => {

	try {
		const url = `${URL}${latitude},${longitude}`
		const result = await fetch(url)
		let expected:ExpectedGeoPointResult = await result.json()
		let { forecast, forecastHourly } = expected.properties
		return {
			forecast, 
			forecastHourly
		}
	}catch(e){
		return Promise.reject("Error fetching the GeoPointInfo")
	}

}