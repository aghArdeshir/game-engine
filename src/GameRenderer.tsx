import { I_Game } from "./game";
import Thing from "./Thing";

type Props = {
  game: I_Game;
};

export default function GameRenderer(props: Props) {
  return (
    <>
      {props.game.things.map((thing: any) => (
        <Thing key={thing.name} thing={thing} />
      ))}
    </>
  );
}
