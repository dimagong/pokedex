import "./styles.scss"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

interface ICardPoke {
	id?: number
	name?: string
}

const initName = "limber"

export const CardPoke = ({ id = 132, name = initName }: ICardPoke) => {
	return (
		<Card className='card-poke'>
			<CardMedia
				className='card-poke__card-media'
				image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
				title={name}
			/>
			<CardContent className='card-poke__card-content'>
				<Typography variant='h5' component='div'>
					{name}
				</Typography>
			</CardContent>
		</Card>
	)
}
