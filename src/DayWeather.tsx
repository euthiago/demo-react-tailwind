

import { useContext } from "react"
import StoreContext from "./lib/context"
import RelativeTempBar from "./RelativeTempBar"
import { Day, Store } from "./vite-env"

const oneDay = 1000*60*60*24
const valueOrNow = (value:number) => {

	if(value === 2) return "today"
	let dayTS = (value/2 - 1) * oneDay + Date.now()
	return new Date(dayTS).getDate()

}

// mix of props, context props, destructuring and default values example
// demonstrating a complex flex+css scenario
// if tailwindcss had first class support for grid template areas
// this would be significantly simplified (without plugins) 
export default ({ day }:{ day:Day } ) => {

	const { temperatureRange={ min:day.temperatureMin, max:day.temperatureMax } } = useContext<Store>(StoreContext)

	return	<div className="flex gap-2 items-center pt-2 ">
		<div className="font-bold text-center w-[50px]">
			{ valueOrNow(day.number) }
		</div> 
		<div className="flex flex-col gap-1 text-sm" style={{width:"calc(100% - 50px)"}}>

			<div className="flex gap-2 ">
				<div>{ day.temperatureMin }°F</div>
				<div className="flex-1 text-sm text-center min-w-0 ">
					<div className="whitespace-nowrap text-ellipsis overflow-hidden" >
						{ day.shortForecast }
					</div>
				</div>
				<div>{ day.temperatureMax }°F</div>
			</div>
			<div className="w-full pt-1">
				<RelativeTempBar min={day.temperatureMin} max={day.temperatureMax} temperatureRange={temperatureRange} />
			</div>

		</div>
		
	</div>

}


