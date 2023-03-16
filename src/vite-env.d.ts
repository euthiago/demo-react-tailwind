/// <reference types="vite/client" />

import { Dispatch, SetStateAction } from "react"

export type Forecast = "Mostly Sunny" |  "Light Rain Likely" |  "Mostly Clear" |  "Clear" |  "Partly Cloudy"

export type Day = {
	name: string,
	number: number,
	shortForecast: Forecast,
	temperatureMin: number,
	temperatureMax: number,
	probabilityOfPrecipitation: {
		value: number,
	},
	relativeHumidity: {
		value: number,
	},
}

export type GeoLocation = {
	latitude:string,
	longitude:string,
	city?:string,
	state:string
}

export type GeoPointInfo = {
	forecast: string,
	forecastHourly: string,
}

export type ExpectedAddress = {
	coordinates: {
		x: string,
		y: string,
	},
	addressComponents:{
		city: string,
		state: string
	}
}

export type ExpectedGeoLocationResult = {
	result: {
		addressMatches: ExpectedAddress[]
	}
}

export type ExpectedGeoPointResult = {
	properties: {
		forecast: string,
		forecastHourly: string,
	}
}

export type ExpectedDay = {
	name: string, 
	number: number,
	shortForecast: Forecast,
	temperature: number,
	probabilityOfPrecipitation: {
		value: number,
	},
	relativeHumidity: {
		value: number,
	},
}

export type ExpectedForecastResult = {
	properties: {
		periods: ExpectedDay[]
	}
}

export type Hour = {
	number: number,
	temperature: number,
	probabilityOfPrecipitation: {
		value: number,
	},
	relativeHumidity: {
		value: number,
	},
	shortForecast: Forecast,
}

export type ExpectedHourlyForecastResult = {
	properties: {
		periods: Hour[]
	}
}

export type Store = {
	geoPoint?: GeoPointInfo,
	geoLocation?: GeoLocation,
	days: Day[],
	hours: Hour[],
	temperatureRange?: TemperatureRange,
	fetchHour?: number,
	setStore: Dispatch<SetStateAction<Store>>
}

export type TemperatureRange = {
	min: number,
	max: number
}