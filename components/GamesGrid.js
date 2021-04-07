import axios from "axios";
import { useEffect, useState } from "react";

const gameOptions = {
  url: "https://nameless-tor-01561.herokuapp.com/https://api.igdb.com/v4/games",
  method: "POST",
  headers: {
    "Client-ID": "gillmyg4he2iqgf9dxmlpn97f7em22",
    Authorization: `Bearer ydpawzo4ydflwtvhb86notvyb72lpj`,
    "X-Requested-With": "XMLHttpRequest",
  },
  data: "fields name, cover; limit 10; ",
};

const coverOptions = {
  url:
    "https://nameless-tor-01561.herokuapp.com/https://api.igdb.com/v4/covers",
  method: "POST",
  headers: {
    "Client-ID": "gillmyg4he2iqgf9dxmlpn97f7em22",
    Authorization: `Bearer ydpawzo4ydflwtvhb86notvyb72lpj`,
    "X-Requested-With": "XMLHttpRequest",
  },
  data: "fields url;",
};

export const GamesGrid = () => {
  const [gamesList, setGamesList] = useState(null);
  const [coversList, setCoversList] = useState(null);
  // TODO: Hacer un array de objetos del tipo { game: nombreDelJuego, cover: URLdeLaImagenDelJuego }
  const [game, setGame] = useState([]);

  useEffect(() => {
    axios(gameOptions)
      .then((res) => {
        setGamesList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios(coverOptions)
      .then((res) => {
        setCoversList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="games_pin-container">
      {gamesList ? (
        gamesList.map((game) => (
          <div key={game.id}>
            <small>{game.name}</small>
          </div>
        ))
      ) : (
        <div>Loading titles...</div>
      )}
      {coversList ? (
        coversList.map((cover) => (
          <img src={cover.url} alt="covers" key={cover.id} />
        ))
      ) : (
        <div>Loading images...</div>
      )}
    </div>
  );
};
