import { TemperatureRange } from "./vite-env"

type RelativeTempProps = {
	min:number,
	max:number,
	temperatureRange:TemperatureRange
}

// local type as props and somewhat 
// complex 'visual' component demonstration
export default ({ min, max, temperatureRange }:RelativeTempProps) =>{

	let widthSize = ( max - min ) === 0 || (temperatureRange.max - temperatureRange.min) === 0
		? 3
		: 100*(( max - min) || 0.01) / ((temperatureRange.max - temperatureRange.min) || 0.01)
	
	if(widthSize < 3) widthSize = 3
	const width = widthSize+"%"

	const marginLeft = min-temperatureRange.min === temperatureRange.max - temperatureRange.min 
		? "0" 
		: `${100*(min-temperatureRange.min) / (temperatureRange.max - temperatureRange.min)}%`

	return <div className="flex relative w-full">
		<div className="absolute bottom-0 left-0 rounded-lg h-2 bg-white bg-opacity-25 w-full"></div>
		<div className="absolute bottom-0 left-0 rounded-lg h-2 bg-orange-600 bg-opacity" style={{ width, marginLeft }}></div>
	</div>

}
	