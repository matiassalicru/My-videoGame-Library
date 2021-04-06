import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const fetches = () => {
  const { data: cover, error } = useSWR("./api/covers/covers", fetcher);

  if (error) {
    return {error}
  }

  return { cover, error };
};