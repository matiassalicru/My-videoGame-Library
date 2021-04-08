import { useEffect, useState } from "react";
import { GamePin } from "./GamePin";

export const Grid = () => {
  const [gamesList, setGamesList] = useState(null);


// Trae de la API juegos con un máximo de 20 por página.
  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=30&page=2")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        return setGamesList(data.results);
      });
  }, []);

  function scrolled(o)
        {
          console.log(o);
            //visible height + pixel scrolled = total height
            if(o.offsetHeight + o.scrollTop == o.scrollHeight)
            {
                alert("End");
            }
        }



  const handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
    }
  }

  return (
    <div className="games_pin-container" >
      {gamesList &&
        gamesList.map((game) => (
          <GamePin key={game.id} cover={game.background_image} name={game.name}/>
        ))}
    </div>
  );
};
