import { useEffect, useState } from 'react'
import fetchForecast from './api/fetchForecast'
import fetchHourlyForecast from './api/fetchHourlyForecast'
import './App.css'
import DayHours from './DayHours'
import Hero from './Hero'
import StoreContext, { initialContext } from './lib/context'
import tempRange from './lib/tempRange'
import Search from './Search'
import { Store } from './vite-env'
import Week from './Week'

function App() {

	const [store, setStore] =  useState<Store>(initialContext)

	useEffect( () => {
		
		(async () => {
			if(store.geoPoint){
				try {

					const daysForecast = fetchForecast(store.geoPoint)
					const hoursForecast = fetchHourlyForecast(store.geoPoint)

					const [ days, hours ] = await Promise.all([ daysForecast, hoursForecast ])
					
					const temperatureRange = tempRange(days)

					setStore( (store) => {
						return {
							...store,
							temperatureRange,
							days,
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
		<StoreContext.Provider value={ { ...store, setStore } } >
			<div className='bg-slate-900 bg-gradient-to-b to-slate-900 from-blue-900 w-screen min-h-screen'>
				<div className="max-w-5xl mx-auto p-4 gap-4 flex flex-col text-blue-50">

					<Search />

					{ store.days.length > 0 && 
						<>
							<Hero className='grow' geoLocation={store.geoLocation} hour={ store.hours.length > 0 ? store.hours[0] : undefined } />
							<DayHours hours={store.hours} fetchHour={store.fetchHour} />
							<Week />
						</>
					}

				</div>
			</div>
		</StoreContext.Provider>
	)

}

export default App
