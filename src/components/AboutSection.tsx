'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image";

function AboutSection() {
  return (
    <div className='about-section'>
        <div className='top'>
            <div className='left'>
                <h1>About  Dr. Now</h1>
                <p>
                    Dr. Younan Nowzaradan is regarded as one of the most experienced 
                    and knowledgeable weight loss physicians. 
                    He works with obese, morbidly obese, and often super-obese 
                    individuals, bringing innovative solutions to weight loss and surgical interventions.

                </p>
                <div className='book-img'>
                    <Link href={'/order'} className="link-wrap">
                        <div className="book-img-wrap">
                            <Image 
                            src="/images/book1.png" 
                            alt="" 
                            fill
                            style={{ objectFit: 'contain' }} // 'cover' or 'contain'
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='right'>
                <div className="right-img-wrap">
                    <Image 
                    src="/images/bg4.jpg" 
                    alt="" 
                    fill
                    style={{ objectFit: 'contain' }} // 'cover' or 'contain'
                    />
                </div>
            </div>
        </div>
        <div className='bottom'>
            <h3>Dr Nowzaradan is board-certified by ABS (American Board of Surgery) and holds professional memberships in the following organizations</h3>
            <ul>
                <li>ACS (American College of Surgeons)</li>
                <li>ASBMS (American Society of Bariatric and Metabolic Surgery)</li>
                <li>SAGES (Society of American Gastrointestinal and Endoscopic Surgery)</li>
                <li>DCCA (Denton Cooley Cardiovascular Association)</li>
                <li>AMA (American Medical Association)</li>
                <li>TMA (Texas Medical Association)</li>
                <li>HCMS (Harris County Medical Society)</li>
            </ul>
            <div className='logos'>
                <Image 
                src="/images/logos.png" 
                alt="" 
                fill
                style={{ objectFit: 'contain' }} // 'cover' or 'contain'
                />
            </div>
        </div>
    </div>
  )
}

export default AboutSection