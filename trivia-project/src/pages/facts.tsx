import { useState } from 'react'
import { inter } from './index'

type Fact = {
    text: string
    id?: number
}

type Facts = Fact[]

const listFacts: Facts = [
    {
        text: 'The first known form of writing by humanity was cuneiform writing, developed by the Sumerians in Mesopotamia.',
        id: 1,
    },
    {
        text: 'The first Europeans to set foot in America were the Vikings, who arrived in Canada around the year 1000.',
        id: 2,
    },
    {
        text: 'When D. Pedro I announced Brazil’s independence on September 7th, 1822, he was suffering from intestinal problems caused by consuming contaminated water or food.',
        id: 3,
    },
    {
        text: 'One of the notebooks of Polish scientist Marie Curie (1867-1934), the first woman to win the Nobel Prize, is still radioactive.',
        id: 4,
    },
    {
        text: 'The shortest war in history was between Great Britain and Zanzibar in 1896. It lasted only 38 minutes.',
        id: 5,
    },
]

function Post(facts: Fact) {
    const [likes, setLikes] = useState(0)
    const [isLiked, setLiked] = useState(false)

    const updateLikes = () => {
        if (!isLiked) {
            setLiked(true)
            setLikes(likes + 1)
        } else {
            setLiked(false)
            setLikes(likes - 1)
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2 md:items-start">
                <div className="flex w-16 h-16">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffed00"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                        />
                    </svg>
                </div>
                <div className="flex flex-col gap-4">
                    <p className={`${inter.className}`}>{facts.text}</p>
                    <button
                        onClick={updateLikes}
                        className="flex items-center gap-2 -ml-[4px]"
                    >
                        <div className="w-8 h-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill={`${isLiked ? `#ff0000` : 'none'}`}
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </div>
                        <p className="text-lg font-medium">{likes}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function TriviaFacts() {
    return (
        <main className="container mx-auto">
            <section className="flex flex-col items-center m-8 gap-12">
                <h1 className="text-3xl font-bold">Trivia & Facts</h1>
                <ul className="flex flex-col gap-8">
                    {listFacts.map((fact) => {
                        return <Post key={fact.id} text={fact.text} />
                    })}
                </ul>
            </section>
        </main>
    )
}
