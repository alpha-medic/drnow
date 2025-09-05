'use client';

import React from 'react';
import Link from 'next/link';

function HomeHero() {
  return (
    <div className='hero'
    style={{
    backgroundImage: `url('/images/bg3.jpg')`}}>
        <div className='left'></div>
        <div className='right'>
        <h1>Dr. Younan Nowzaradan MD  F.A.C.S</h1>
        <h3>Pioneer & Expert in Advanced Bariatric and Vascular Surgery</h3>
        <p>Dr. Now, MD, has over 35+ years of experience in Bariatric Surgery and is committed to providing personalized care to his clients in Houston, TX.</p>
        <Link href={'/order'} className='btn-one'><span>Click here to order my book</span></Link>
        </div>
    </div>
  )
}

export default HomeHero