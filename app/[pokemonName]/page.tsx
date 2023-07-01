import PokemonImage from "@/components/pokemon-image"
import { getPokemon } from "@/lib/pokemonAPI"

const PokemonPage = async ({ params }: { params: { pokemonName: string } }) => {
    const { pokemonName } = params
    // get the api data for the pokemon
    const pokemonObject = await getPokemon(pokemonName)
    console.log(pokemonObject)
    return (
        <>
            <h1 className="text-4xl font-bold">{pokemonName}</h1>
           <PokemonImage image={pokemonObject.sprites.other['official-artwork'].front_default}
            name={pokemonName}
           ></PokemonImage>
        </>
    )
}

export default PokemonPage