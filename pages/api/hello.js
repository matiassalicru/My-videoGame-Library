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
  const data = [];

  await axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      "Client-ID": "gillmyg4he2iqgf9dxmlpn97f7em22",
      Authorization: `${auth}`,
    },
    data: "fields game,height,image_id,url,width; limit 100;",
  })
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        data.push(res.data[i]);
      }
    })
    .catch((e) => {
      console.log(e);
    });

  res.status(200).json(data);
};