// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { default: axios } = require("axios");
const dotenv = require("dotenv");

const envFound = dotenv.config();

let auth = "no secret key";
if (envFound) {
  auth = process.env.SECRET_KEY;
} else {
  console.log(auth);
}

export default async (req, res) => {
  const games = [];

  await axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      "Client-ID": "gillmyg4he2iqgf9dxmlpn97f7em22",
      Authorization: `${auth}`,
    },
    games: "fields *;",
  })
    .then((res) => {
      for (let i = 0; i < res.games.length; i++) {
        games.push(res.games[i]);
      }

      console.log("funciona la api");
    })
    .catch((e) => {
      console.log(e);
    });

  res.status(200).json(games);
};
