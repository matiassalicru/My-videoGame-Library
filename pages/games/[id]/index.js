import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUp } from "../../../store/actions/gameAction";
import Loading from "../../../Assets/puff.js";

export default function index() {
  const dispatch = useDispatch();
  const [isGameAvailable, setIsGameAvailable] = useState(false);

  const gameSelected = useSelector((state) => state.game);

  useEffect(() => {
    if (Object.entries(gameSelected).length !== 0) {
      setIsGameAvailable(true);
    }
  }, [gameSelected]);

  useEffect(() => {
    return () => {
      dispatch(cleanUp());
      setIsGameAvailable(false);
      console.log("cleaned", isGameAvailable);
    };
  }, []);

  return (
    <div>
      {isGameAvailable ? (
        <>
          <h1 className="game__title">{gameSelected.game}</h1>
          <p
            className="game__parag"
            dangerouslySetInnerHTML={{ __html: gameSelected.description }}
          ></p>
          <img className="game__image" src={gameSelected.cover} alt="cover" />
        </>
      ) : (
        <div className="loading">
          <Loading />
        </div>
      )}
    </div>
  );
}
