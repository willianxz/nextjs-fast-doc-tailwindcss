import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Navbar from '../components/navbar';
import HeaderInfo from '../components/headerInfo';
import Footer from '../components/footer';

export default function Header(){
	return(
		<div>
	      <Head>
	        <title>Fast Doc Tailwindcss</title>
	        <link rel="icon" href="/favicon.ico" />
	      </Head>

	      <header>
	        <Navbar/>
	      </header>

	      <main> 
	        <HeaderInfo/>
	      </main>
	       

	      <footer className={styles.footer}>
	        <Footer/>
	      </footer>
	    </div>
	);
}