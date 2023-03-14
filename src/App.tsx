import { createContext, useEffect, useState } from 'react'
import fetchForecast from './api/fetchForecast'
import fetchHourlyForecast from './api/fetchHourlyForecast'
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
				console.log((new Date()).getHours())
				return {
					...store,
					fetchHour: (new Date()).getHours(),
					geoPoint: {
						forecast: "https://api.weather.gov/gridpoints/AKQ/92,103/forecast",
						forecastHourly: "https://api.weather.gov/gridpoints/AKQ/92,103/forecast/hourly"
					}
				}
			})
		}, 2000)
	}, [])

	useEffect( () => {

		(async () => {
			if(store.geoPoint){
				try {
					let days = await fetchForecast(store.geoPoint)
					setStore( (store) => {
						return {
							...store,
							days
						}
					})
				} catch(e) {
					console.log(e)
				}
			}
		})();

		(async () => {
			if(store.geoPoint){
				try {
					let hours = await fetchHourlyForecast(store.geoPoint)
					setStore( (store) => {
						return {
							...store,
							hours
						}
					})
				} catch(e) {
					console.log(e)
				}
			}
		})();

	}, [store.geoPoint])

	return (
		<StoreContext.Provider value={ store } >
			<div className="p-4 gap-4 bg-slate-900 bg-gradient-to-b to-slate-900 from-blue-900 w-full min-h-full flex flex-col text-blue-50">

				<Hero className='grow' geoLocation={store.geoLocation} hour={ store.hours.length > 0 ? store.hours[0] : undefined } />
				<DayHours hours={store.hours} fetchHour={store.fetchHour} />
				<Week days={store.days} />
				
			</div>
		</StoreContext.Provider>
	)

}

export default App
