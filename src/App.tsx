import './App.css'
import DayHours from './DayHours'
import Hero from './Hero'
import Week from './Week'

function App() {

  return (
	<div className="p-4 gap-4 bg-slate-900 bg-gradient-to-b to-slate-900 from-blue-900 w-full min-h-full flex flex-col text-blue-50">
		<Hero className='grow'/>
		<DayHours />
		<Week />
	</div>
  )

}

export default App
