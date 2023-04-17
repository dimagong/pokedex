import React, { Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Loader } from "./ui"

//<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />

const HomePageComponent = React.lazy(() =>
	import("./pages/HomePage").then((module) => ({ default: module.HomePage }))
)
const PokePageComponent = React.lazy(() =>
	import("./pages/PokePage").then((module) => ({ default: module.PokePage }))
)

let router = createBrowserRouter([
	{
		path: "/",
		Component: HomePageComponent,
	},
	{
		path: "pokemon/:id",
		Component: PokePageComponent,
	},
])

const App = () => {
	return (
		<Suspense fallback={<Loader />}>
			<RouterProvider router={router} />
		</Suspense>
	)
}

export default App
