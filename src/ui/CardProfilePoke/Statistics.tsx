import { Box } from "@mui/material"
import { Progress } from "../Progress"
import { usePokeContext } from "../../hooks"

export const Statistics = () => {
	const { statistics } = usePokeContext()
	return (
		<>
			<Box className='card-profile__box-content box-statistics'>
				<div className='card-profile__box-content-label'>HP</div>
				<Progress width={statistics?.hp ?? 45} />
			</Box>
			<Box className='card-profile__box-content box-statistics'>
				<div className='card-profile__box-content-label'>Attack</div>
				<Progress width={statistics?.attack ?? 85} />
			</Box>
			<Box className='card-profile__box-content box-statistics'>
				<div className='card-profile__box-content-label'>Defense</div>
				<Progress width={statistics?.defense ?? 35} />
			</Box>
			<Box className='card-profile__box-content box-statistics'>
				<div className='card-profile__box-content-label'>Speed</div>
				<Progress width={statistics?.speed ?? 20} />
			</Box>
			<Box className='card-profile__box-content box-statistics'>
				<div className='card-profile__box-content-label'>Sp Atk</div>
				<Progress width={statistics?.sp_atk ?? 40} />
			</Box>
			<Box className='card-profile__box-content box-statistics'>
				<div className='card-profile__box-content-label'>Sp Def</div>
				<Progress width={statistics?.sp_def ?? 10} />
			</Box>
		</>
	)
}
