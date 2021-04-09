import { useEffect } from "react";

export default function index() {
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=30&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[1]);
      });
  }, []);

  return (
    <div>
      <h1>Juegosssss</h1>
    </div>
  );
}
