import Link from "next/link";
import { useDispatch } from "react-redux";
import { fetchGame } from "../store/actions/gameAction";

export const GamePin = ({ game }) => {
  const dispatch = useDispatch();
  const { name, background_image: cover, id, slug } = game;

  const getGame = () => {
    dispatch(fetchGame(id));
  };

  return (
    <Link href={`/game/${id}`} as={`/game/${slug}`}>
      <div className="games_pin" onClick={getGame}>
        <h3 className="games__title">{name}</h3>
        <img className="games__cover" src={cover} alt="cover" />
        <p className="games__name">{name}</p>
      </div>
    </Link>
  );
};
