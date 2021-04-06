import Head from "next/head";

// Components
import { GamesGrid } from "../components/GamesGrid";
import { Nav } from "../components/Nav";

// Helpers
import { fetches } from "../helpers/fetcher";
import "../helpers/fontAwesome";

export default function Home() {
  const { cover, error } = fetches('covers', 'covers');


  if (cover || error) console.log(cover, error);

  return (
    <div>
      <Head>
        <title>My game library</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="description"
          content="A library where you can look for games that you want to play or have played already to add to some lists you can have"
        />
      </Head>
      <Nav />
      {!cover ? <div>Loading...</div> : <GamesGrid covers={cover} />}
    </div>
  );
}
