import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const fetchCovers = () => {
  const { data: covers, error } = useSWR("./api/covers/covers", fetcher);

  if (error) {
    return { error };
  }

  return { covers, error };
};


export const fetchGames = () => {

  let games = [];
  
  const options = {
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      "Client-ID": "gillmyg4he2iqgf9dxmlpn97f7em22",
      Authorization: `Bearer ydpawzo4ydflwtvhb86notvyb72lpj`,
    },
    data: "fields name, cover; limit 10; ",
  };

  axios(options)
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        games.push(res.data[i]);
      }
    })
    .catch((e) => {
      console.log(e);
    });
}