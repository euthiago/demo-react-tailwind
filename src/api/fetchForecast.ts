// https://api.weather.gov/gridpoints/AKQ/92,103/forecast

import { Day, ExpectedForecastResult, GeoPointInfo } from "../vite-env"

/**
 * Fetched the forecast using the provided Geo Point url
 */
export default async (geoPointInfo:GeoPointInfo):Promise<Day[]> => {

	try {

		const result = await fetch(geoPointInfo.forecast)
		const expected:ExpectedForecastResult = await result.json()

		// filter out the 'night' version of the forecast
		// and built the temperature range
		let days:Array<Day> = expected
			.properties
			.periods.filter( (_, index) => index % 2 !== 0)
			.map( (day, index) => {
				let temperatureMax = day.temperature
				let temperatureMin = expected.properties.periods[index+1].temperature
				return {
					...day,
					temperatureMin,
					temperatureMax
				}
			})

		return days

	}catch(e){
		return Promise.reject("Could not fetch the forecast")
	}

}