import DayWeather from "./DayWeather"
import IconCalendar from "./IconCalendar"
import { Day } from "./vite-env"

const renderDays = (days:Day[]) =>
	days.map( (day, index) => <DayWeather key={index} day={day} /> )


export default ({ days }:{ days:Day[] }) => {

	return <div>
		<div className="uppercase text-[0.7rem] font-semibold flex p-2">
			<span className="min-w-[50px] text-center flex justify-center">
				<IconCalendar />
			</span>
			<span>next days</span>
		</div>
		<div className="p-2 rounded-lg backdrop-blur-sm bg-opacity-5 bg-white">
			{ renderDays(days) }
		</div>
	</div>
}
	
