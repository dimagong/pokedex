import "./styles.scss"

import { useLocation, useNavigate } from "react-router-dom"
import { PokeContextProvider, usePokeName } from "../../hooks"
import { Layout, Loader, TabPoke } from "../../ui"
import { ErrorBoundary } from "../../utility"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

type IProfile = {
	type: string
	height: string
	weight: string
	skills: string[]
}

type IStatistics = {
	hp: number
	attack: number
	defense: number
	speed: number
	sp_atk: number
	sp_def: number
}

const profileInit: IProfile = {
	type: "Oheň",
	height: `0,6`,
	weight: `8,5`,
	skills: [`solární`, `energie`, `plameny`],
}

const statisticsInit: IStatistics = {
	hp: 45,
	attack: 85,
	defense: 20,
	speed: 75,
	sp_atk: 80,
	sp_def: 30,
}

export const PokePage = () => {
	let location = useLocation()
	const navigate = useNavigate()
	const { name, id } = location.state
	const { data, loading, error } = usePokeName(name)
	if (loading) return <Loader />
	if (error) return <ErrorBoundary />

	const { height, weight } = data?.pokemon_v2_pokemon[0] ?? {}

	const profile: IProfile = Object.assign(profileInit, { height, weight })

	const statistics: IStatistics = Object.assign({}, statisticsInit)

	const onRedirectBack = () => {
		navigate(`/`)
	}

	return (
		<Layout>
			<div className='poke-page'>
				<div className='poke-page__back' onClick={onRedirectBack}>
					<ArrowBackIosIcon />
					Zpět na přehled
				</div>
				<div className='poke-page__tab'>
					<PokeContextProvider value={{ profile, statistics, name, id }}>
						<TabPoke />
					</PokeContextProvider>
				</div>
			</div>
		</Layout>
	)
}
