import React from 'react'
import'../../assets/logo HG.png'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
    <>
 <nav className="navbar bg-primary" data-bs-theme="dark">
  <div className="logo d-flex">
  <img className='d-block w-100' src='assets/logo HG.png' alt='logo'/>
  <div className="navoption">
    <ul className='options d-flex mx-5'>
      <li>Home</li>
      <li>Category</li>
      <li>About</li>
      <li>WorkWithUs</li>
    </ul>
  </div>
  </div>
</nav>
   </>
  )
}

export default Navbar