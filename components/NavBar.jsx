import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
          MoMo Store
        </Link>
      </p>
    </div>
  )
}

export default NavBar