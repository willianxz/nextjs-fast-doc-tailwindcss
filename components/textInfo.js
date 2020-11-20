export default function TextInfo(){
	return(
		<div className="container mx-auto divide-y-4 divide-black divide-opacity-25">

          <div>
            <h3 className="font-mono text-3xl text-center capitalize hover:text-purple-600">text family</h3>     
            <p className="font-sans text-3xl text-center text-gray-600">  
              font-sans
            </p>
            <p className="font-serif text-3xl text-center text-gray-600">
              font-serif
            </p>
            <p className="font-mono text-3xl text-center text-gray-600">
              font-mono
            </p>

            <br/>
            <br/>
          </div>

         <div>
            <h3 className="font-mono text-3xl text-center capitalize hover:text-purple-600">text color</h3>     
            <p className="font-serif text-3xl text-center text-purple-300">  
              text-purple-300
            </p>
            <p className="font-serif text-3xl text-center text-purple-600">
              text-purple-600
            </p>
            <p className="font-serif text-3xl text-center text-purple-900">
              text-purple-900
            </p>

            <br/>
            <br/>
          </div>

          <div>
            <h3 className="font-mono text-3xl text-center capitalize hover:text-indigo-600">text background</h3>     
            <p className="font-serif text-3xl text-center bg-indigo-300">
              bg-indigo-300
            </p>
            <p className="font-serif text-3xl text-center bg-indigo-600">
              bg-indigo-600
            </p>
            <p className="font-serif text-3xl text-center bg-indigo-900">
              bg-indigo-900
            </p>

            <br/>
            <br/>
          </div>

          <div>
            <h3 className="font-mono text-3xl text-center capitalize hover:text-green-600">text size</h3>     
            <p className="font-serif text-center text-green-600 text-base">
              text-base
            </p>
            <p className="font-serif text-center text-green-600 text-lg">
              text-lg
            </p>
            <p className="font-serif text-center text-green-600 text-5xl">
              text-5xl
            </p>

            <br/>
            <br/>
          </div>



          <div>
           <h3 className="font-mono text-3xl text-center capitalize hover:text-blue-600">text opacity</h3>     
            <p className="font-serif text-3xl text-center text-blue-700 text-opacity-30">
              text-opacity-30
            </p>
            <p className="font-serif text-3xl text-center text-blue-700 text-opacity-50">
              text-opacity-50
            </p>
            <p className="font-serif text-3xl text-center text-blue-700 text-opacity-100">
              text-opacity-100
            </p>

            <br/>
            <br/>
          </div>


          <div>
            <h3 className="font-mono text-3xl text-center capitalize hover:text-yellow-600">text transform</h3>     
            <p className="font-serif text-3xl text-center text-yellow-600 uppercase">
              uppercase
            </p>
            <p className="font-serif text-3xl text-center text-yellow-600 lowercase">
              lowercase
            </p>
            <p className="font-serif text-3xl text-center text-yellow-900 capitalize">
              capitalize
            </p>

            <br/>
            <br/>
          </div>

          <div>
            <h3 className="font-mono text-3xl text-center capitalize hover:text-red-600">text effect hover color</h3>     
            <p className="font-serif text-3xl text-center hover:text-red-300">
              hover:text-red-300
            </p>
            <p className="font-serif text-3xl text-center hover:text-red-600">
              hover:text-red-600
            </p>
            <p className="font-serif text-3xl text-center hover:text-red-900">
              hover:text-red-900
            </p>

            <br/>
            <br/>
          </div>


          <div>
            <h3 className="font-mono text-3xl text-center uppercase text-pink-600 hover:bg-pink-300">Text Effect Hover Background</h3>     
            <p className="font-serif text-3xl text-center text-white-600 hover:bg-pink-300">
              hover:bg-pink-300
            </p>
            <p className="font-serif text-3xl text-center text-white-600 hover:bg-pink-600">
              hover:bg-pink-600
            </p>
            <p className="font-serif text-3xl text-center text-white-600 hover:bg-pink-900">
              hover:bg-pink-900
            </p>

            <br/>
            <br/>
          </div>


           <div>
              <h3 className="font-mono text-3xl text-center uppercase hover:text-blue-700">Text Effect Hover Opacity</h3>     
              <p className="font-serif text-3xl text-center text-blue-700 hover:text-opacity-30">
               hover:text-opacity-30
              </p>
              <p className="font-serif text-3xl text-center text-blue-700 hover:text-opacity-50">
                hover:text-opacity-50
              </p>
              <p className="font-serif text-3xl text-center text-blue-700 hover:text-opacity-100">
                hover:text-opacity-100
              </p>

              <br/>
              <br/>
           </div>
          

        </div>
	);
}