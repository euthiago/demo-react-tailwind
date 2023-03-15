import { createContext } from "react"
import { Store } from "../vite-env"

export const initialContext:Store = {
	days: [], 
	hours: [],
	setStore: () => {}
}

const StoreContext = createContext<Store>(initialContext)


export default StoreContext