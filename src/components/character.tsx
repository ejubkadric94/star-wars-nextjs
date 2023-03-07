import { Character } from "@/typescript/types";

type Props = {
    character: Character;
}

function Character({ character }: Props) {
    return (
        <li>
            <span>{character.name}</span>
        </li>
    );
};

export default Character;
