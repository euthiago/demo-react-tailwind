import { Day, TemperatureRange } from "../vite-env"

/**
 * Calculates the temperature range given 
 * an array of Day
 */
export default (days:Day[]): TemperatureRange => {

	let otp = { 
		min: Number.MAX_SAFE_INTEGER,
		max: Number.MIN_SAFE_INTEGER
	}

	days.map( day => {
		if(day.temperatureMin < otp.min) otp.min = day.temperatureMin
		if(day.temperatureMax > otp.max) otp.max = day.temperatureMax
	})

	return otp

}