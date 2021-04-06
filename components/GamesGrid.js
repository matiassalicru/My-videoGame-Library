export const GamesGrid = ({ covers }) => {

  const ids = [];

  for (let i = 0; i < covers.length; i++) {
    ids.push(covers[i].game);
  }

  console.log(ids);

  return (
    <div className="games_pin-container">
      {covers.map((cover) => (
        <div className="card" key={cover.id}>
          <img src={cover.url} />
        </div>
      ))}
    </div>
  );
};
