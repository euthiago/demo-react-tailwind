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

				let currentTemp = day.temperature
				let nextTemp = expected.properties.periods[index+1].temperature

				let temperatureMax = currentTemp > nextTemp ? currentTemp : nextTemp
				let temperatureMin = currentTemp > nextTemp ? nextTemp : currentTemp
				
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