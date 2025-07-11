import { useEffect, useState } from "preact/hooks";
import Axios from "npm:axios";
import type { Character } from "../types.ts";

const ShowCharacter = (props: {id: string}) => {

    const [character, setCharacter] = useState <Character> ();

    const getCharacter = async () => {

        const response = await Axios.get <Character> (`https://rickandmortyapi.com/api/character/${props.id}`);
        const data = response.data;

        setCharacter (data);

    }

    useEffect (() => {
        getCharacter()
    }, [])

    return (

        <div class="container">

            <a href="/" class="back-link">Volver</a>
            <div class="character-detail">

                <img src={character?.image} alt={character?.name} />
                <div class="character-info">

                    <h1 class="title"></h1>
                    <ul>

                        <li><strong>Status:</strong>{character?.status}</li>
                        <li><strong>Species:</strong>{character?.species}</li>
                        <li><strong>Gender:</strong>{character?.gender}</li>
                        <li><strong>Origin:</strong>{character?.origin.name}</li>
                        <li><strong>Location:</strong>{character?.location.name}</li>

                    </ul>

                </div>

            </div>

        </div>

    );

}

export default ShowCharacter;