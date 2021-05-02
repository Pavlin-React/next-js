import styles from '../../styles/Ninjas.module.css'

export let getStaticProps = async () => {
  let res = await fetch('http://jsonplaceholder.typicode.com/users')
  let data = await res.json()
  return {
    props: { ninjas: data }
  }
}

const index = ( { ninjas } ) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      { ninjas.map(item => (
        <div key={ item.id }>
          <a className={ styles.single }>
            <h3>{ item.name }</h3>
          </a>
        </div>
          
      )) }
    </div>
  );
}
 
export default index;