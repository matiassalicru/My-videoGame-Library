import Link from "next/link";
import { useDispatch } from "react-redux";
import { fetchGame } from '../store/actions/gameAction';

export const GamePin = ({ game }) => {
  const dispatch = useDispatch();
  const { name, background_image: cover, id, slug } = game;

  const getGame = () => {
    dispatch(fetchGame(id));
  };

  return (
    <Link href={`/games/${id}`} as={`/games/${slug}`}>
      <div className="games_pin" onClick={getGame}>
        <h3 className="game__title">{name}</h3>
        <img className="game__cover" src={cover} alt="cover" />
      </div>
    </Link>
  );
};
