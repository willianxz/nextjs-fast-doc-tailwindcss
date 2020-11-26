import styles from '../styles/Home.module.css';

export default function Footer(){
	return(		
		<div>
			<form action="https://www.paypal.com/donate"
				method="post" target="_top">
				<input type="hidden" name="hosted_button_id" value="H68VWYW9QA8D2" />
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
				  border="0" name="submit" 
				  title="PayPal - The safer, easier way to pay online!" 
				  alt="Donate with PayPal button" 
				 />
				<img alt="" border="0"
				src="https://www.paypal.com/en_BR/i/scr/pixel.gif" 
				width="1" height="1" />
			</form>
			<a
	          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
	          target="_blank"
	          rel="noopener noreferrer"
	        >
	          Powered by{' '}
	          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
	        </a>
        </div>
	);
}
