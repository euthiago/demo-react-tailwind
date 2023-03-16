import { SyntheticEvent, useContext, useEffect, useRef, useState } from "react"
import fetchGeoPointInfo from "./api/fetchGeoPointInfo"
import searchGeoLocation from "./api/searchGeoLocation"
import StoreContext from "./lib/context"
import { Store } from "./vite-env"

export default () => {

	const form = useRef(null)
	const input = useRef(null)
	const [ loading, setLoading ] = useState<boolean>(false)
	const [ error, setError ] = useState<string>("")
	const [ closedTranslate, setClosedTranslate ] = useState<string>("translateY(280px)")
	const { days, setStore } = useContext<Store>(StoreContext)

	const onSubmit = async (e:SyntheticEvent) => {

		e.preventDefault()
		e.stopPropagation()
		if(input.current && !loading){
			const ipt = input.current as HTMLInputElement
			setLoading(true)
			setError("")
			try{

				// geoLocation
				let geoLocation = await searchGeoLocation(ipt.value)

				// geoPoint
				let geoPoint = await fetchGeoPointInfo(geoLocation.latitude, geoLocation.longitude)

				setStore(store => {

					return {
						...store,
						geoLocation,
						geoPoint
					}

				})

				setError("")
			}catch(e){
				setError( _ => e as string )
			}finally{
				setLoading(false)
			}
		}
		
	}

	useEffect( () => {

		let closedTranslate = days.length === 0
			? "translateY(280px)"
			: "translateY(0)"

		setClosedTranslate(closedTranslate)

	}, [days.length])


	return <div className="ease-in-out transition-transform mt-[-280px] duration-500 bg-white bg-opacity-5 backdrop-blur-sm" style={{ transform: closedTranslate }} >

		<div className="font-semibold p-10 pt-20 absolute w-full">

			<h2 className="text-center text-lg" >Please inform the desired street, city, state and zipcode</h2>
			
			<div className="p-4 text-center text-sm text-white text-opacity-80">
				<p>
					<span className="select-none text-opacity-70">i.e.: </span>4600 SILVER HILL RD, WASHINGTON, DC, 20233
				</p>
				<p >
					<span className="select-none text-opacity-70">or </span>1225+Prestwick+Terrace+Mahtomedi+MN
				</p>
			</div>
		</div>

		<div className='p-2 border-b-2 border-orange-300 w-full mt-[280px]'>
			<form ref={form} onSubmit={onSubmit} className="w-full flex">
				<input ref={input} disabled={loading}  className="grow bg-transparent p-2 outline-none min-w-0" type="text" placeholder='4600 SILVER HILL RD, WASHINGTON, DC, 20233'></input>
				<button disabled={loading} type="submit" className="disabled:opacity-70 text-sm hover:text-orange-300 rounded border-[1px] p-2 border-orange-300 hover:border-opacity-100 active:border-opacity-100 focus:border-opacity-100 border-opacity-50"  >{ loading ? "loading" : "search"}</button>
			</form>
			
		</div>
		{ error && <div className="p-2 text-red-300 w-full text-center">{ error }</div>}
		
	</div>
}
	