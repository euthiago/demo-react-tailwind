import DayWeather from "./DayWeather"
import { Day } from "./vite-env"

const days:Day[] = [
	{ temperature_min: 26, temperature_max: 28, weather: "stormy", value:10 },
	{ temperature_min: 25, temperature_max: 28, weather: "stormy", value:11 },
	{ temperature_min: 24, temperature_max: 28, weather: "stormy", value:12 },
	{ temperature_min: 27, temperature_max: 28, weather: "stormy", value:13 },
	{ temperature_min: 25, temperature_max: 28, weather: "stormy", value:14 },
	{ temperature_min: 24, temperature_max: 28, weather: "stormy", value:15 },
	{ temperature_min: 27, temperature_max: 28, weather: "stormy", value:16 },
]

const renderDays = (days:Day[]) =>
	days.map( (day, index) => <DayWeather key={index} day={day} /> )


export default () => 

	<div className="p-2 rounded-lg backdrop-blur-sm bg-opacity-5 bg-white">
		{ renderDays(days) }
	</div>
