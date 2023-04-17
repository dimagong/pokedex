import "./styles.scss"

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import { Profile } from "./Profile"
import { Statistics } from "./Statistics"
import { usePokeContext } from "../../hooks"

type CardProfilePokeType = {
	isProfile?: boolean
}

export const CardProfilePoke = ({ isProfile }: CardProfilePokeType) => {
	const { name, id } = usePokeContext()
	return (
		<Card className='card-profile' elevation={0}>
			<Box className='card-profile__img'>
				<div className='card-profile__img-label'>{name}</div>
				<CardMedia
					className='card-profile__img-media'
					component='img'
					image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
					alt='cococo'
				/>
			</Box>

			<Box className='card-profile__box' sx={{ display: "flex", flexDirection: "column" }}>
				{isProfile ? <Profile /> : <Statistics />}
			</Box>
		</Card>
	)
}
