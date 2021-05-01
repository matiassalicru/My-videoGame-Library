import { useState } from "react";
import Grid from "../../../components/Grid";

const juegos = ({data}) => {
//HACER UN SCROLL INFINITO.
  return <Grid gamesList={data.results}/>;
};


// This gets called on every request
export async function getServerSideProps(context) {
  console.log(context.params);

  // Fetch data from external API
  const res = await fetch(`https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=5&page=${context.params.page}`)
  const data = await res.json()
  
  if (!data) {
    console.log('no data');
  }
  
  // Pass data to the page via props
  return { props: { data } }
}

export default juegos;