import type { PageProps } from "$fresh/server.ts";
import ShowCharacter from "../../islands/ShowCharacter.tsx";


const character = (props: PageProps) => {

    const {id} = props.params;

    return (

        <ShowCharacter id={(id)}/>

    );

}
export default character