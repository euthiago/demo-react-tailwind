

import { Hour } from "./vite-env"

const formatHour = (hour:number) => {
	hour = hour % 24
	if(hour === 12) return "12 pm"
	if(hour < 13) return hour + " am"
	if(hour === 0) return "12 am"
	return (hour % 12) + " pm"
}

const valueOrNow = (value:number) => 
	value === (new Date).getHours() ? "now" : formatHour(value)

export default ({ hour, fetchHour=0 }:{ hour:Hour, fetchHour?:number } ) => 

	<div className="p-2 border-r-2 border-blue-100 border-opacity-25 last:border-r-0">
		<div className="font-bold text-center border-b-2 border-blue-100 border-opacity-25 text-sm w-12">
			{ valueOrNow(hour.number + fetchHour - 1) }
		</div> 
		<div className="font-semibold text-center ">
			{hour.temperature}°F
		</div>
		<div className="text-center text-sm">
			{hour.shortForecast}
		</div>
	</div>


