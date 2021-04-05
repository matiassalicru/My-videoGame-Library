import Head from "next/head";
import { Nav } from "./components/Nav";
import { GamesGrid } from "./components/GamesGrid";

import "../helpers/fontAwesome";
import { useState } from "react";

export default function Home({covers}) {

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
      <GamesGrid covers={covers} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/covers`);
  const covers = await res.json();

  if (!covers) {
    return {
      notFound: true,
    };
  }

  return {
    props: { covers }, // will be passed to the page component as props
  };
}