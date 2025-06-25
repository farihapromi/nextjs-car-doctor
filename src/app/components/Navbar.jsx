import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  const links = (
  <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/services">Services</Link></li>
    <li><Link href="/blog">Blog</Link></li>
    <li><Link href="/contact">Contact</Link></li>
  </>
);

  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link href='/' className="btn btn-ghost text-xl">
        <Image src='/assets/logo.svg' height={87} width={107}/>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
 <div className="navbar-end space-x-2">
  <Link href="/register" className="btn btn-outline  bg-orange-500 text-white">
    Register
  </Link>
  <Link href="/login" className="btn btn-outline bg-orange-500 text-white">
    Login
  </Link>
  <a className="btn btn-primary">Appointment</a>
</div>

</div>
  )
}

export default Navbar
