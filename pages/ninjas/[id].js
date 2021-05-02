export let getStaticPaths = async () => {
  let res = await fetch('http://jsonplaceholder.typicode.com/users')
  let data = await res.json()

  let paths = data.map(user => {
    return {
      params: {id: ninja.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
}
 
export default Details;