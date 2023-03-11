import HourWeather from "./HourWeather"
import IconClock from "./IconClock"
import { Hour } from "./vite-env"


const hours:Hour[] = [
	{ temperature: 26, weather: "stormy", value:(new Date().getHours()) },
	{ temperature: 25, weather: "stormy", value:(new Date().getHours())+1 },
	{ temperature: 24, weather: "stormy", value:(new Date().getHours())+2 },
	{ temperature: 27, weather: "stormy", value:(new Date().getHours())+3 },
	{ temperature: 26, weather: "stormy", value:(new Date().getHours())+4 },
	{ temperature: 25, weather: "stormy", value:(new Date().getHours())+5 },
	{ temperature: 24, weather: "stormy", value:(new Date().getHours())+6 },
	{ temperature: 27, weather: "stormy", value:(new Date().getHours())+7 },
	{ temperature: 26, weather: "stormy", value:(new Date().getHours())+8 },
	{ temperature: 25, weather: "stormy", value:(new Date().getHours())+9 },
	{ temperature: 24, weather: "stormy", value:(new Date().getHours())+10 },
	{ temperature: 27, weather: "stormy", value:(new Date().getHours())+11 },
]

const renderHours = (hours:Hour[]) =>
	hours.map( (hour, index) => <HourWeather key={index} hour={hour} /> )

export default () => {

	return <div>
		
		<div className="uppercase text-[0.7rem] font-semibold flex p-2">
			<span className="min-w-[50px] text-center flex justify-center">
				<IconClock />
			</span>
			<span>weather by hour</span>
		</div>
		<div className="p-2 w-full overflow-x-auto flex rounded-lg backdrop-blur-sm bg-opacity-5 bg-white">
			
			{ renderHours(hours) }
		</div>
		
		
	</div>

}

