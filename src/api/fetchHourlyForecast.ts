// https://api.weather.gov/gridpoints/AKQ/92,103/forecast/hourly


import { ExpectedHourlyForecastResult, GeoPointInfo, Hour } from "../vite-env"

/**
 * Fetched the hourly forecast using the provided Geo Point url
 */
export default async (geoPointInfo:GeoPointInfo):Promise<Hour[]> => {

	try {

		const result = await fetch(geoPointInfo.forecastHourly)
		const expected:ExpectedHourlyForecastResult = await result.json()
		return expected.properties.periods

	}catch(e){
		return Promise.reject("Could not fetch the hourly forecast")
	}

}