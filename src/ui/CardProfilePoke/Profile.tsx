import { Box } from "@mui/material"
import { usePokeContext } from "../../hooks"

export const Profile = () => {
	const { profile } = usePokeContext()
	console.log("profiele", profile)
	return (
		<>
			<Box className='card-profile__box-content'>
				<Box className='card-profile__box-content-type'>
					<div className='card-profile__box-content-label'>Typ</div>
				</Box>
				<div className='card-profile__box-content-label'>{profile.type ?? "no type"}</div>
			</Box>
			<Box className='card-profile__box-content'>
				<Box className='card-profile__box-content-type'>
					<div className='card-profile__box-content-label'>Výška</div>
				</Box>
				<div className='card-profile__box-content-label'>{profile.height} m</div>
			</Box>
			<Box className='card-profile__box-content'>
				<Box className='card-profile__box-content-type'>
					<div className='card-profile__box-content-label'>Váha</div>
				</Box>
				<div className='card-profile__box-content-label'>{profile.weight} kg</div>
			</Box>
			<Box className='card-profile__box-content content-skills'>
				<Box className='card-profile__box-content-type type-skills'>
					<div className='card-profile__box-content-label'>Dovednosti</div>
				</Box>
				<div className='card-profile__box-content-label label-skills'>
					{(profile?.skills ?? []).join(",")}
				</div>
			</Box>
		</>
	)
}
