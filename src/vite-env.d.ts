/// <reference types="vite/client" />

import { Dispatch, SetStateAction } from "react"

export type Forecast = "Mostly Sunny" |  "Light Rain Likely" |  "Mostly Clear" |  "Clear" |  "Partly Cloudy"

export type Day = {
	name: string,
	value: number,
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
		addresses: ExpectedAddress[]
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
	value: number,
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
	geoInfo?: GeoLocation,
	days: Day[],
	hours: Hour[],
	setStore: Dispatch<SetStateAction<Store>>
}
