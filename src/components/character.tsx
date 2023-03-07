import { Character } from "@/typescript/types";
import Films from "./films";

type Props = {
    character: Character;
}

function Character({ character }: Props) {
    return (
        <li>
            <div>{character.name}</div>
            <Films filmsUrls={character.films} />
        </li>
    );
};

export default Character;
