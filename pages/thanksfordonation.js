import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Navbar from '../components/navbar';
import DonateCompleted from '../components/donateCompleted';
import Footer from '../components/footer';

export default function ThanksForDonation(){
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
	        <DonateCompleted/>
	      </main>
	       

	      <footer className={styles.footer}>
	        <Footer/>
	      </footer>
	    </div>
	);
}