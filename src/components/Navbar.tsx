'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='nav-container'>
      <div className='left'>
          <div className="logo1-wrap">
            <Image 
            src="/images/logo1-colored.png" 
            alt="Saraswat Bank Logo" 
            fill
            style={{ objectFit: 'contain' }} // 'cover' or 'contain'
            />
          </div>
          <div className="logo2-wrap">
            <Image 
            src="/images/logo3-colored.png" 
            alt="Saraswat Bank Logo" 
            fill
            style={{ objectFit: 'contain' }} // 'cover' or 'contain'
            />
          </div>
      </div>
      <div className='right'>
        <ul>
          <li>
            <Link href={'/retail'} className='nav-link-item'>Retail</Link>
          </li>
          <li>
            <Link href={'/coperate'} className='nav-link-item'>Coperate</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar