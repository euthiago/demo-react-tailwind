/// <reference types="vite/client" />

export type Weather = "sunny" |  "rainy" |  "windy" |  "stormy" |  "cloudy"

export type Hour = {

	value: number,
	weather: Weather,
	temperature: number,

}

export type Day = {

	value: number,
	weather: Weather,
	temperature_min: number,
	temperature_max: number,

}
