import * as React from "react"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"

import IconButton from "@mui/material/IconButton"

import SearchIcon from "@mui/icons-material/Search"

import CloseIcon from "@mui/icons-material/Close"

type InputFieldProps = {
	onChangeInput: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
	onEraseValue: () => void
	value: string
}

export const InputField = ({ onChangeInput, onEraseValue, value }: InputFieldProps) => {
	return (
		<Paper
			component='form'
			sx={{ p: "2px 15px", display: "flex", alignItems: "center", width: "100%", height: "100%" }}
		>
			<IconButton sx={{ pl: "10px" }} aria-label='menu'>
				<SearchIcon />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder=''
				onChange={(e) => onChangeInput(e)}
				value={value}
			/>
			<IconButton type='button' sx={{ pr: "10px" }} aria-label='search' onClick={onEraseValue}>
				<CloseIcon />
			</IconButton>
		</Paper>
	)
}
