import Head from "next/head";
import { Nav } from "../components/Nav";
import { GamesGrid } from "../components/GamesGrid";

import "../helpers/fontAwesome";
import { fetches } from "../helpers/fetcher";

export default function Home() {
  const { cover, error } = fetches();

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

// export async function getStaticProps() {
//   const res = await fetch(`http://localhost:3000/api/fetches.covers`);
//   const fetches.covers = await res.json();

//   if (!fetches.covers) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { fetches.covers }, // will be passed to the page component as props
//   };
// }
