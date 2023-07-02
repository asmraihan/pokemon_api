import PokemonImage from "@/components/pokemon-image"
import { Progress } from "@/components/ui/progress"
import { getPokemon } from "@/lib/pokemonAPI"



const PokemonPage = async ({ params }: { params: { pokemonName: string } }) => {
    const { pokemonName } = params
    // get the api data for the pokemon
    const pokemonObject = await getPokemon(pokemonName)
    console.log(pokemonObject)
    return (
        <>
            <h1 className="text-4xl font-bold uppercase">{pokemonName}</h1>
            <div className="m-4 relative w-[300px] h-[300px]">
                <PokemonImage image={pokemonObject.sprites.other['official-artwork'].front_default}
                    name={pokemonName}
                ></PokemonImage>
            </div>
            <h3 className="">Weight: {pokemonObject.weight}</h3>
            <div className="flex flex-col">
                {
                    pokemonObject.stats.map((statObject: any) => {
                        const statName = statObject.stat.name
                        const statValue = statObject.base_stat

                        return (
                            <div className="flex items-stretch" style={{width : '500px'}} key={statName}>
                                <h3 className="p-3 w-2/4 uppercase">{statName} : {statValue}</h3>
                                <Progress className="w-2/4 m-auto" value={statValue}></Progress>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PokemonPage