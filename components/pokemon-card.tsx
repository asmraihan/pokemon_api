import Link from "next/link";

interface PokemonCardProps {
    name: string
}

export function PokemonCard({ name }: PokemonCardProps) {
    return (
        <Link
            key={name + 'Card'}
            href={name}
            className="group rounded-lg border px-5 py-4 m-3 transition-colors border-gray-300/10 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={`text-2xl font-semibold`}>
               {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>

        </Link>
    )
}