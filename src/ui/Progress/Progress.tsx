import "./styles.scss"

interface IProgress {
	width: number
}

export const Progress = ({ width = 45 }: IProgress) => {
	return (
		<div className='progress'>
			<div
				className='progress-container progress-color progress-center'
				style={{ width: `${width}%` }}
			>
				{width}
			</div>
		</div>
	)
}
