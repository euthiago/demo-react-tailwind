import { GeoLocation, Hour } from "./vite-env"

// component with props demonstration
export default ({ className="", hour, geoLocation }:{ className?:string, hour?:Hour, geoLocation?:GeoLocation }) => 
	<div className={"min-h-[150px] p-9 flex align-center "+ className}>
		{ geoLocation && hour && (
			<div className="m-auto flex flex-col h-full justify-center">
				<div className="text-center font-semibold text-xl">
					{geoLocation.city && geoLocation.city + " ,"}{geoLocation.state}
				</div>
				<div className="text-center text-9xl bold">
					{hour.temperature}°F
				</div>
				<div className="text-center">
					{hour.shortForecast}
				</div>
			</div>
		)}
	</div>


