import { createContext, useEffect, useState } from 'react'
import './App.css'
import DayHours from './DayHours'
import Hero from './Hero'
import { Store } from './vite-env'
import Week from './Week'

const initialContext = {
	days: [], 
	hours: [],
	setStore: () => {}
}

const StoreContext = createContext<Store>(initialContext)

function App() {


	let [store, setStore] =  useState<Store>(initialContext)

	useEffect( () => {
		setTimeout(() => {
			setStore( (store) => {
				return {
					...store,
					geoPoint: {
						forecast: "https://api.weather.gov/gridpoints/AKQ/92,103/forecast",
						forecastHourly: "https://api.weather.gov/gridpoints/AKQ/92,103/forecast/hourly"
					}
				}
			})
		}, 2000)
	}, [])

	return (
		<StoreContext.Provider value={ store } >
			<div className="p-4 gap-4 bg-slate-900 bg-gradient-to-b to-slate-900 from-blue-900 w-full min-h-full flex flex-col text-blue-50">

				<Hero className='grow' geoInfo={store.geoInfo} day={ store.days.length > 0 ? store.days[0] : undefined } />
				<DayHours />
				<Week geoPoint={store.geoPoint} />
				
			</div>
		</StoreContext.Provider>
	)

}

export default App
