import "./styles.scss"

import * as React from "react"

import classnames from "classnames"

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"
import { CardProfilePoke } from "../CardProfilePoke"

export const TabPoke = () => {
	const [value, setValue] = React.useState("Profil")

	const handleChange = (event: any, name: string) => {
		setValue(name)
	}

	const isProfile = value === "Profil"

	return (
		<div className='tab-poke'>
			<div className='tab-poke__nav'>
				<button
					className={classnames("tab-poke__nav__btn", { "btn-disable": !isProfile })}
					onClick={(e) => handleChange(e, "Profil")}
				>
					<div className='btn-content'>
						<SentimentSatisfiedAltIcon className='btn-content-icon' />
						<div className='btn-content-label'>Profil</div>
					</div>
				</button>
				<button
					className={classnames("tab-poke__nav__btn", { "btn-disable": isProfile })}
					onClick={(e) => handleChange(e, "Statistiky")}
				>
					<div className='btn-content'>
						<UnfoldMoreIcon className='btn-content-icon' />
						<div className='btn-content-label'>Statistiky</div>
					</div>
				</button>
			</div>

			<div className={classnames("tab-poke__card", { "hide-card": !isProfile })}>
				<CardProfilePoke isProfile />
			</div>

			<div className={classnames("tab-poke__card", { "hide-card": isProfile })}>
				<CardProfilePoke />
			</div>
		</div>
	)
}
