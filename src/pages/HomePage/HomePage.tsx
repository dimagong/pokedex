import "./styles.scss"

import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

import { usePokeList } from "../../hooks"
import { usePagination } from "../../hooks/usePagination"

import { Loader } from "../../ui/Loader"
import { ErrorBoundary } from "../../utility"
import { CardPoke, InputField, Layout } from "../../ui"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import { Pagination } from "@mui/material"
import FilterListIcon from "@mui/icons-material/FilterList"

type PokeListType = { id: number; name: string }[]

export const HomePage = () => {
	const navigate = useNavigate()
	const [page, setPage] = useState<number>(1)
	const { data, loading, error } = usePokeList()
	const pokesList: PokeListType = useMemo(() => data?.data ?? [], [data?.data])
	const [selectedList, setSelectedList] = useState<PokeListType>([...pokesList])
	useEffect(() => {
		setSelectedList(pokesList)
	}, [pokesList])
	const [value, setValue] = useState("")

	const windowWidth = window.innerWidth
	const limit = windowWidth > 600 ? 12 : 24
	const total: number = selectedList.length

	const count = Math.ceil(total / limit)
	const paginationData = usePagination({ data: [...selectedList], itemsPage: limit })

	const handleChange = (e: any, page: any) => {
		setPage(page)
		paginationData.pass(page)
	}

	const onRedirect = (id: number, name: string) => {
		navigate(`pokemon/${id}`, { state: { id, name } })
	}

	const onChangeInput = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	): void => {
		const { value } = event.target
		setValue(value)
		const redData = new RegExp(value)
		const findPokeList = pokesList.filter((el) => el.name.match(redData))
		if (findPokeList.length) {
			setSelectedList([...findPokeList])
		}
	}

	const onEraseValue = (): void => {
		setValue("")
		setSelectedList([...pokesList])
	}

	if (loading) {
		return <Loader />
	}
	if (error) {
		return <ErrorBoundary />
	}

	return (
		<Layout>
			<div className='home-page'>
				<div className='home-page__input-search'>
					<InputField onChangeInput={onChangeInput} onEraseValue={onEraseValue} value={value} />
				</div>
				<div className='home-page__title'>
					{value.length ? (
						<>
							<FilterListIcon className='home-page__title--icon' />
							<div className='home-page__title--content'>Výsledky hledání</div>
						</>
					) : (
						<>
							<ViewModuleIcon className='home-page__title--icon' />
							<div className='home-page__title--content'>`Přehled Pokémonů`</div>
						</>
					)}
				</div>
				<div className='home-page__container'>
					{paginationData.currentData().map((el) => {
						return (
							<div key={el.id} onClick={() => onRedirect(el.id, el.name)}>
								<CardPoke name={el.name} id={el.id} />
							</div>
						)
					})}
				</div>
				<div className='home-page__pagination'>
					<div className='home-page__pagination--move'>
						<Pagination
							count={count}
							page={page}
							onChange={handleChange}
							variant='outlined'
							shape='rounded'
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}
