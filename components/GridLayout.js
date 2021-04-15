import MasonryLayout from "./MasonryLayout";

export const GridLayout = (columns, gamesList = null) => {
  console.log(gamesList);
  return (
    <div>
      <MasonryLayout columns={columns} gap={2}>
        {gamesList &&
          gamesList.map((game) => <GamePin key={game.id} game={game} />)}
      </MasonryLayout>
    </div>
  );
};
