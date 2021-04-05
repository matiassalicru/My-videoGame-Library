
export const GamesGrid = ({covers}) => {
  console.log(covers);
  return (
    <div>
      {covers.map( cover => (
        <img key={cover.id} src={cover.url}/>
      ))}
    </div>
  )
}


