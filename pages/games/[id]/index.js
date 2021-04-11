import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUp } from "../../../store/actions/gameAction";

export default function index() {
  const dispatch = useDispatch();
  const [isGameAvailable, setIsGameAvailable] = useState(false);
  const gameSelected = useSelector((state) => state.game);

  useEffect(() => {
    if (Object.entries(gameSelected).length !== 0) {
      setIsGameAvailable(true);
    }
  }, [gameSelected]);

  const fixDescription = (desc) => {
    const noBr = desc.replace(/\<br \/>/g, "");
    const noP = noBr.replace("<p>", "");
    const noClosedP = noP.replace(/\<\/p>/g, "");

    return <p>{noClosedP}</p>;
  };

  return (
    <div>
      {isGameAvailable ? (
        <>
          <h1>{gameSelected.game}</h1>
          {fixDescription(gameSelected.description)}
          <div>
            <img className="game__image" src={gameSelected.cover} alt="cover" />
          </div>
        </>
      ) : (
        <h2> Loading... </h2>
      )}
    </div>
  );
}
