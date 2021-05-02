import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='Ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          nihil provident earum. Iusto adipisci quod, explicabo suscipit
          voluptatem, reprehenderit non at laborum doloribus alias quae corrupti
          aperiam officia minus. Dolor deserunt sint delectus dicta. Aliquam
          nostrum asperiores totam sint placeat!
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          nihil provident earum. Iusto adipisci quod, explicabo suscipit
          voluptatem, reprehenderit non at laborum doloribus alias quae corrupti
          aperiam officia minus. Dolor deserunt sint delectus dicta. Aliquam
          nostrum asperiores totam sint placeat!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninjas listings</a>
        </Link>
      </div>
    </>
  );
}
