

export let getStaticPaths = async () => {
  let res = await fetch('http://jsonplaceholder.typicode.com/users')
  let data = await res.json()

  let paths = data.map(user => {
    return {
      params: {id: user.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export let getStaticProps = async ( context ) => {
  let id = context.params.id
  let res = await fetch('http://jsonplaceholder.typicode.com/users/' + id)
  let data = await res.json()

  return {
    props: { user: data }
  }
}

const Details = ( {user} ) => {
  return (
    <div>
      <h1>{ user.name }</h1>
      <h1>{ user.email }</h1>
      <h1>{ user.website }</h1>
      
    </div>
  );
}
 
export default Details;