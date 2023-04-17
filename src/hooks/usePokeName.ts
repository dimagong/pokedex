import { useQuery, gql } from "@apollo/client"

const GET_POKE_BY_NAME = gql`query pokNameAPIquery($name: String_comparison_exp = {}) {
	pokemon_v2_pokemon(where: {name: $name}) {
	  weight
	  height
	  name
	  order
	}
  }`

  export const usePokeName = (name: string) => {
	const { data, loading, error } = useQuery(GET_POKE_BY_NAME, {
		variables: {"name": {"_eq":name}},
	  })

	return {data, loading, error}
}