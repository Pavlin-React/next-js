import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil
        provident earum. Iusto adipisci quod, explicabo suscipit voluptatem,
        reprehenderit non at laborum doloribus alias quae corrupti aperiam
        officia minus. Dolor deserunt sint delectus dicta. Aliquam nostrum
        asperiores totam sint placeat!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil
        provident earum. Iusto adipisci quod, explicabo suscipit voluptatem,
        reprehenderit non at laborum doloribus alias quae corrupti aperiam
        officia minus. Dolor deserunt sint delectus dicta. Aliquam nostrum
        asperiores totam sint placeat!
      </p>
      <Footer />
    </div>
  )
}
