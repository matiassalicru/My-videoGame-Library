import Link from "next/link";

export const GamePin = ({ game }) => {
  const { name, background_image: cover, id, slug } = game;

  return (
    <Link href={`/games/${id}`} as={`/games/${slug}`}>
      <div className="games_pin">
        <h3 className="game__title">{name}</h3>
        <img className="game__cover" src={cover} alt="cover" />
      </div>
    </Link>
  );
};
