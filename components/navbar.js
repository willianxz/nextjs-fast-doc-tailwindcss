import Link from 'next/link'

const links = [

  { href: 'https://github.com/willianxz', label: 'My GitHub' },
  { href: 'https://programandoagora.000webhostapp.com', label: 'My Website' },
  { href: 'https://www.linkedin.com/in/willian-duarte-78218996', label: 'Linkedin' },
  { href: 'https://nextjs.org/docs', label: 'Docs Nextjs' },
  { href: 'https://tailwindcss.com/docs', label: 'Docs Tailwindcss' },
]

export default function Navbar(){
	return(
		<nav>
	      <ul className="flex justify-center flex-wrap p-8 space-x-4 ">
	        <li>
	          <Link href="/">
	            <a className="text-blue-500 no-underline uppercase">Home</a>
	          </Link>
	        </li>
	        <li>
	          <Link href="/text">
	            <a className="no-underline hover:text-blue-500 uppercase">Text</a>
	          </Link>
	        </li>
	        <li>
	          <Link href="/button">
	            <a className="no-underline hover:text-blue-500 uppercase">Button</a>
	          </Link>
	        </li>
	        <li>
	          <Link href="/input">
	            <a className="no-underline hover:text-blue-500 uppercase">Input</a>
	          </Link>
	        </li>
	         <li>
	          <Link href="/div">
	            <a className="no-underline hover:text-blue-500 uppercase">Div</a>
	          </Link>
	        </li>
	        <li>
	          <Link href="/form">
	            <a className="no-underline hover:text-blue-500 uppercase">Form</a>
	          </Link>
	        </li>
	        <li>
	          <Link href="/header">
	            <a className="no-underline hover:text-blue-500 uppercase">Header</a>
	          </Link>
	        </li>
	        <ul className="flex justify-center flex-wrap space-x-4 ">
	          {links.map(({ href, label }) => (
	            <li key={`${href}${label}`}>
	              <a href={href} className=" no-underline hover:text-blue-500 uppercase">
	                {label}
	              </a>
	            </li>
	          ))}
	        </ul>
	      </ul>
	    </nav>
    );
}