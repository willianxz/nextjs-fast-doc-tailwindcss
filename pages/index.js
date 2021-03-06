import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Navbar from '../components/navbar';
import Welcome from '../components/welcome';
import Footer from '../components/footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Fast Doc Tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar/>
      </header>

      <main> 
        <Welcome/>
      </main>
       

      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}
