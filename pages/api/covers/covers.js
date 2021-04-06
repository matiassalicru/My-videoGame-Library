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
  const covers = [];

  console.log(req);

  await axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      "Client-ID": "gillmyg4he2iqgf9dxmlpn97f7em22",
      Authorization: `${auth}`,
    },
    data: "fields game,height,image_id,url,width; ",
  })
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        covers.push(res.data[i]);
      }

      console.log("funciona la api");
    })
    .catch((e) => {
      console.log(e);
    });

  res.status(200).json(covers);
};
