import { useEffect, useState } from "react"
import fetchForecast from "./api/fetchForecast"
import DayWeather from "./DayWeather"
import IconCalendar from "./IconCalendar"
import { Day, GeoPointInfo } from "./vite-env"

const renderDays = (days:Day[]) =>
	days.map( (day, index) => <DayWeather key={index} day={day} /> )


export default ({ geoPoint }:{ geoPoint?:GeoPointInfo }) => {

	const [days, setDays] = useState<Day[]>([])

	useEffect( () => {

		if(!geoPoint){
			setDays([])
			return 
		}

		(async () => {
			try {
				console.log("fetching geopoint:", geoPoint.forecast)
				let days = await fetchForecast(geoPoint)
				console.log(days)
				setDays(days)
			} catch(e) {
				console.log(e)
			}
		})()

	}, [geoPoint?.forecast])

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
	
