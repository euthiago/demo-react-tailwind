import HourWeather from "./HourWeather"
import IconClock from "./IconClock"
import { Hour } from "./vite-env"

const renderHours = (hours:Hour[], fetchHour:number=0) =>
	hours.map( (hour, index) => <HourWeather key={index} hour={hour} fetchHour={fetchHour} /> )

export default ({ hours, fetchHour=0 }:{hours:Hour[], fetchHour?:number }) => {

	return <div>
		<div className="uppercase text-[0.7rem] font-semibold flex p-2">
			<span className="min-w-[50px] text-center flex justify-center">
				<IconClock />
			</span>
			<span>weather by hour</span>
		</div>
		<div className="p-2 w-full overflow-x-auto flex rounded-lg backdrop-blur-sm bg-opacity-5 bg-white scrollbar-thin scrollbar-thumb-slate-300 scrollbar-rounded-sm">
			{ renderHours(hours.filter( (_,i) => i < 24 ), fetchHour) }
		</div>
	</div>
}

