import { createContext, useContext } from "react"

interface Props {
	children: React.ReactNode
	value: any
}

const PokeContext = createContext<any>(undefined)

const PokeContextProvider = ({ children, value }: Props) => {
	return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>
}

const usePokeContext = () => {
	return useContext(PokeContext)
}

export { PokeContextProvider, usePokeContext }
