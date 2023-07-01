'use client'

import { useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { PokemonCard } from "./pokemon-card"

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList: pokemonList } : PokemonGridProps ) {
    const [searchtext, setSearchtext] = useState('')
    console.log(pokemonList)
    return (
        <>
            <div>
                <h3 className="text-2xl py-6 text-center">Search for your Pokemon</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="pokemonName">Pokemon name</Label>
                    <Input type="text"
                        value={searchtext}
                        id="pokemonName"
                        autoComplete="off"
                        placeholder="Charizard, Pikachu, etc."
                        onChange={(e) => setSearchtext(e.target.value)}
                    ></Input>
                </div>
                <h3 className="text-3xl pt-12 pb-6">Pokemon Collection</h3>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">

             {
                    pokemonList.map((pokemon: any) => {
                        return (
                            <PokemonCard name={pokemon.name} key={pokemon.name}></PokemonCard>
                        )
                    }
                    )
             }

            </div>

        </>
    )
}