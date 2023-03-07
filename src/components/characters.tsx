import { Character as CharacterType } from "@/typescript/types";
import Character from "./character";

type Props = {
    characters?: CharacterType[];
}

const Characters = ({ characters }: Props) => {
    if (!characters) {
      return null;
    };

    return (
        <ol>
          {characters.map((el, index) => (<Character key={index} character={el} />))}
        </ol>
    );
}

export default Characters;
