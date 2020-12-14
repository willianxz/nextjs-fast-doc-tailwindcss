export default function HeaderInfo(){
	return(
		<div className="container mx-auto px-4">
		    
	        <h1 className="font-mono text-center text-red-600 text-5xl">Header</h1>
	        <br/>

	        <ul className="flex justify-center flex-wrap p-8 space-x-4 ">
		        <li>		         
		            <a href="#" className="text-blue-500 no-underline uppercase">Home</a>
		        </li>
		        <li>
		            <a href="#" className="no-underline hover:text-blue-500 uppercase">About</a>
		        </li>
		        <li>
		            <a href="#" className="no-underline hover:text-blue-500 uppercase">Product</a>
		        </li>
		        <li>
		            <a href="#" className="no-underline hover:text-blue-500 uppercase">Suport</a>
		        </li>
		         <li>
		            <a href="#" className="no-underline hover:text-blue-500 uppercase">Business</a>
		        </li>
		        <li>
		            <a href="#" className="no-underline hover:text-blue-500 uppercase">Contact</a>
		        </li>
		        <ul className="flex justify-center flex-wrap space-x-4 ">
		         	<li>
		              <a href="#" className=" no-underline hover:text-blue-500 uppercase">Login</a>
	               </li>
		        </ul>	       
	      </ul>


	           <div className="grid grid-cols-1 gap-2 place-items-center">
				  <div className="bg-white p-2">
				   <code className="select-all">
				     &lt;div className="container mx-auto px-4"&gt;
						&lt;ul className="flex justify-center flex-wrap p-8 space-x-4 "&gt;
					        &lt;li&gt;		         
					            &lt;a href="#" className="text-blue-500 no-underline uppercase"&gt;Home&lt;/a&gt;
					        &lt;/li&gt;
					        &lt;li&gt;
					            &lt;a href="#" className="no-underline hover:text-blue-500 uppercase"&gt;About&lt;/a&gt;
					        &lt;/li&gt;
					        &lt;li&gt;
					            &lt;a href="#" className="no-underline hover:text-blue-500 uppercase"&gt;Product&lt;/a&gt;
					        &lt;/li&gt;
					        &lt;li&gt;
					            &lt;a href="#" className="no-underline hover:text-blue-500 uppercase"&gt;Suport&lt;/a&gt;
					        &lt;/li&gt;
					         &lt;li&gt;
					            &lt;a href="#" className="no-underline hover:text-blue-500 uppercase"&gt;Business&lt;/a&gt;
					        &lt;/li&gt;
					        &lt;li&gt;
					            &lt;a href="#" className="no-underline hover:text-blue-500 uppercase"&gt;Contact&lt;/a&gt;
					        &lt;/li&gt;
					        &lt;ul className="flex justify-center flex-wrap space-x-4 "&gt;
					         	&lt;li&gt;
					              &lt;a href="#" className=" no-underline hover:text-blue-500 uppercase"&gt;Login&lt;/a&gt;
					           &lt;/li&gt;
					        &lt;/ul&gt;	       
						&lt;/ul&gt;
					&lt;/div&gt;
				   </code>
				  </div>
				</div>
		   
		</div>
	);
}