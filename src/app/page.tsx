import React from 'react';
import { Metadata } from "next";
import HomeHero from '@/components/HomeHero';
import AboutSection from '@/components/AboutSection';

export const metadata: Metadata = {
  title: "Dr. Now MD",
  description: "",
};

export default function Home() {
  return (
    <div className='homepage-container'>
      <HomeHero />
      <AboutSection />
    </div>
  );
}
