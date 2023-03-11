

import { Day } from "./vite-env"

const valueOrNow = (value:number) => value === (new Date()).getDate() ? "now" : value

export default ({ day }:{ day:Day } ) => 

	<div className="p-1 flex gap-2">
		<div className="font-bold text-center min-w-[50px]">
			{ valueOrNow(day.value) }
		</div> 
		<div className="text-center">
			{ day.weather }
		</div>
		<div className="font-semibold text-center grow">
			{ day.temperature_min }
			{ day.temperature_max }
		</div>
	</div>


