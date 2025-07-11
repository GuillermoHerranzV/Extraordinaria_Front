import { useEffect, useState } from "preact/hooks";
import type { ApiResponse, Character } from "../types.ts";
import Axios from "npm:axios";

const ShowCharacters = () => {

    const [characters, setCharacters] = useState <Character[]> ([]);
    const [pages, setPages] = useState <number> (1);
    const [currentPage, setCurrentPage] = useState <number> (1);
    //const searchVal = new Signal <string> ("")
    const [searchValue, setSearchValue] = useState <string> ("");

    const getData = async () => {

        if (searchValue === ""){

            const response = await Axios.get <ApiResponse> (`https://rickandmortyapi.com/api/character?page=${currentPage}`);
            const data = response.data;
            setPages (data.info.pages);
            setCharacters (data.results);

        }else {

            const response = await Axios.get <ApiResponse> (`https://rickandmortyapi.com/api/character?page=${currentPage}`);
            const data = response.data;
            console.log(data)

            const charSearch = data.results.filter (char => char.name.includes (searchValue));

            setCharacters (charSearch);

        }

    }

    useEffect (() => {

        getData ();

    }, [currentPage, searchValue]);

   

    return (

        <div class ="container">

            <h1 class="title">Rick and Morty Characters</h1>
            <div>

                <form class="search-form" action="">

                    <input class="search-input" value={searchValue} placeholder="Nombre del personaje" type="text" onInput={(e) => setSearchValue (e.currentTarget.value)}/>
                    <button type="submit" class="button" onClick={(e) => setSearchValue (e.currentTarget.value)}>Buscar</button>

                </form>
                <div class="characters">

                    {characters.map (char => {

                        return (

                            <a href={`/character/${char.id}`} class="character-card">

                                    <img src={char.image} alt={char.name} />
                                    <p>{char.name}</p>

                                </a>

                        );

                    })}

                </div>
                <div class="pagination">

                    <button disabled={currentPage === 1} class="button" onClick={()=> setCurrentPage(currentPage-1)}>Anterior</button>
                    <span>{`${currentPage}/${pages}`}</span>
                    <button disabled={currentPage === pages} class="button" onClick={()=> setCurrentPage(currentPage+1)}>Siguente</button>

                </div>

            </div>

        </div>

    );

}

export default ShowCharacters;