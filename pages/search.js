import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamePin } from "../components/GamePin";
import MasonryLayout from "../components/MasonryLayout";
import Loading from "../Assets/puff.js";
import { cleanSearch } from "../store/actions/searchAction";

const search = () => {
  const search = useSelector((state) => state.search.results);
  const loading = useSelector((state) => state.search.loading);
  const dispatch = useDispatch();

  const [gamesSearched, setGamesSearched] = useState(search);

  useEffect(() => {
    !loading && setGamesSearched(search);
  }, [loading]);

  useEffect(() => {
    return () => {
      dispatch(cleanSearch());
    };
  }, []);

  return (
    <div className="games__pin_container">
      {!loading ? (
        <MasonryLayout columns={3} gap={7}>
          {gamesSearched &&
            gamesSearched.map((game) => <GamePin key={game.id} game={game} />)}
        </MasonryLayout>
      ) : (
        <div className="loading">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default search;
