import Head from "next/head";

// Components
import { Grid } from "../components/Grid";

// Helpers
import "../helpers/fontAwesome";

export default function Home() {
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
      <Grid />
    </div>
  );
}
