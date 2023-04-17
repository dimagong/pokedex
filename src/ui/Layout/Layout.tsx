import "./styles.scss"

export const Layout = ({ children }: any) => {
	return (
		<div className='layout'>
			<div className='layout__wrapper'>
				<div className='layout__header'>
					<div className='layout__header__logo'>
						<img
							className='layout__header__logo--img'
							src={
								"https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:932f44d0-1051-4995-bda3-49d62dd15b5d;revision=0?component_id=ea3bf1ac-741d-4b34-96ce-ff5e76c8aa51&api_key=CometServer1&access_token=1681592201_urn%3Aaaid%3Asc%3AUS%3A932f44d0-1051-4995-bda3-49d62dd15b5d%3Bpublic_7cbb281ca852e65bc6dee126e0b5b9b0631b11ac"
							}
							alt='pokedex'
						/>
					</div>
					<div className='layout__header__menu'>
						<div>O nás</div>
						<div>Pokémoni</div>
					</div>
				</div>
				<div className='layout__component'>{children}</div>
				<div className='layout__footer'></div>
				<div className='layout__bottom'></div>
				<div className='layout__sign first' />
				<div className='layout__sign second' />
				<div className='layout__sign third' />
				<div className='layout__sign fourth' />
			</div>
		</div>
	)
}
