import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from './components/AboutHero';
import HowItWorks from './components/HowItWorks';
import TeamSection from './components/TeamSection';
import ReraCommitment from './components/ReraCommitment';
import AiFeatureAbout from './components/AiFeatureAbout';
import AboutFooter from './components/AboutFooter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Navbar />
      <div className="pt-16">
        <AboutHero />
        <HowItWorks />
        <TeamSection />
        <ReraCommitment />
        <AiFeatureAbout />
        <AboutFooter />
      </div>
    </div>
  );
}
