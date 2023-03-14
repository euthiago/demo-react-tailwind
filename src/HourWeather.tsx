

import { Hour } from "./vite-env"

const valueOrNow = (value:number) => value === (new Date).getHours() ? "now" : value


export default ({ hour }:{ hour:Hour } ) => 

	<div className="p-2 border-r-2 border-blue-100 border-opacity-25 last:border-r-0">
		<div className="font-bold text-center border-b-2 border-blue-100 border-opacity-25">
			{ valueOrNow(hour.number % 24) }
		</div> 
		<div className="text-center">
			{hour.shortForecast}
		</div>
		<div className="font-semibold text-center ">
			{hour.temperature}
		</div>
	</div>


