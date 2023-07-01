
const POKEMON_API= 'https://pokeapi.co/api/v2/'

// getpokemonList -> get all pokemons 151

export async function getPokemonList(){
    const response = await fetch(POKEMON_API + 'pokemon?limit=151&offset=0')
    const data = await response.json()
    return data.results
}


// getpokemon -> get pokemon by name
export async function getPokemon(name : any){
    const response = await fetch(POKEMON_API + 'pokemon/' + name)
    const data = await response.json()
    return data
}