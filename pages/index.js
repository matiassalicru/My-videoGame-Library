import Head from "next/head";
import { useEffect } from "react";

// Components
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
    // router.push("/games/:pagenumber");
  // }, []);

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
    </div>
  );
}
