import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const gamesFetcher = (url) => fetch(url).then((res) => res.json());


export const fetches = () => {
  const { data: cover, error } = useSWR("./api/covers/covers", fetcher);

  if (error) {
    return {error}
  }

  return { cover, error };
};

export const getGameName = ({ id }) => {
  const { data: game, error } = useSWR("./api/games/games", fetcher);


}