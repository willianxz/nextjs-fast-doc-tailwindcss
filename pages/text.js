import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Navbar from '../components/navbar';
import TextInfo from '../components/textInfo';
import Footer from '../components/footer';

export default function Text(){
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
	        <TextInfo/>
	      </main>
	       

	      <footer className={styles.footer}>
	        <Footer/>
	      </footer>
	    </div>
	);
}