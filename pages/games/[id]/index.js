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

  const addToList = (list) => {
    alert(`Game added to ${list} list`)
  }

  return (
    <>
      {isGameAvailable ? (
        <div className="game__main">
          <div className="game__image">
            <img src={gameSelected.cover} alt="cover" />
          </div>
          <div className="game__info">
            <h1 className="game__title">{gameSelected.game}</h1>
            <p
              className="game__parag"
              dangerouslySetInnerHTML={{ __html: gameSelected.description }}
            ></p>
            <button onClick={() => addToList("done")} className="btn">Add to my done list</button>
            <button onClick={() => addToList("toPlay")} className="btn">Add to my to play list</button>
          </div>
        </div>
      ) : (
        <div className="loading">
          <Loading />
        </div>
      )}
    </>
  );
}
