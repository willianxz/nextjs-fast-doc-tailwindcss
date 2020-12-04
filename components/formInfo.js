export default function FormInfo(){
	return(
		
       <div className="grid grid-cols-1 px-9 place-items-center">          
          <div className="p-2 w-full"> 
              <h2 className="font-mono text-center text-3xl text-gray-600">Form Title</h2>
              <br/>
              <br/>

              <br/>
              <h2 className="font-mono text-center text-3xl text-gray-600">Information Session</h2>             
              <br/>

              <div className="grid grid-cols-4 place-items-center"> 
                <div></div>
                <div className="px-2">
                  <p className="text-center">Your Name</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="text" 
                    placeholder="Click to fill this input"
                  />
                </div>
                <div className="px-2">
                  <p className="text-center">Last Name</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="text" 
                    placeholder="Click to fill this input"
                  />
                </div>
                <div></div>
              </div>

              <br/>
              <h3 className="font-mono text-center text-3xl text-gray-600">Contact Session</h3>
              <br/>

              <div className="grid grid-cols-3 place-items-center"> 
                <div className="px-2">
                  <p className="text-center">Your E-mail</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="email" 
                    placeholder="you@exemple.com"
                  />
                </div>
                <div className="px-2">
                  <p className="text-center">Home Phone</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="text" 
                    placeholder="(DD)33350963"
                  />
                </div>
                <div className="px-2">
                  <p className="text-center">Cell Phone</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="text" 
                    placeholder="(DD)999276267"
                  />
                </div>
              </div>


              <br/>
              <h3 className="font-mono text-center text-3xl text-gray-600">Other Session</h3>
              <br/>

              <div className="grid grid-cols-4 place-items-center"> 
                <div className="px-2">
                  <p className="text-center">Other Information</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="text" 
                    placeholder="Click to fill this input"
                  />
                </div>
                <div className="px-2">
                  <p className="text-center">Other Information</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="text" 
                    placeholder="Click to fill this input"
                  />
                </div>
                <div className="px-2">
                  <p className="text-center">Other Information</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="text" 
                    placeholder="Click to fill this input"
                  />
                </div>
                <div className="px-2">
                  <p className="text-center">Other Information</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="text" 
                    placeholder="Click to fill this input"
                  />
                </div>
              </div>


              <div className="grid grid-cols-1 place-items-center"> 
                <div className="px-2 w-full">
                  <p className="text-center">Other Information</p>
                  <input className="bg-gradient-to-r from-indigo-600 to-blue-600 flex-1 appearance-none border border-transparent w-full py-2 px-4 text-white placeholder-gray-300 shadow-xl rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    type="text" 
                    placeholder="Click to fill this input"
                  />
                </div>
              </div>

                   
           </div> 
        </div> 
	);
}