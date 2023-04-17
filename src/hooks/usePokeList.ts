import { useQuery, gql } from "@apollo/client"

const GET_POKE_LIST = gql`
	query getPokeAPIquery {
		data: pokemon_v2_pokemonspecies(
			where: { pokemon_v2_generation: { name: { _eq: "generation-i" } } }
			order_by: { id: asc }
		) {
			name
			id
			pokemon_v2_pokemons {
				height
				weight
			}
		}
	}
`



export const usePokeList = () => {
	const { data, loading, error } = useQuery(GET_POKE_LIST)

	return {data, loading, error}
}



