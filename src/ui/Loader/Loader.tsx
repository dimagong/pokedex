import * as React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

export const Loader = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100vw",
				height: "100vh",
			}}
		>
			<Box sx={{ display: "flex" }}>
				<CircularProgress />
			</Box>
		</div>
	)
}
