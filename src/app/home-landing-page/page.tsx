import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import LocationChips from './components/LocationChips';
import AiFeatureTeaser from './components/AiFeatureTeaser';
import LandingFooter from './components/LandingFooter';
import AiChatSidebar from '@/components/AiChatSidebar';
import FeaturedProjects from '@/app/home-landing-page/components/FeaturedProjects';


export default function HomeLandingPage() {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Navbar />
      <div className="flex pt-16">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <HeroSection />
          <StatsBar />
          <LocationChips />
          <FeaturedProjects />
          <AiFeatureTeaser />
          <LandingFooter />
        </div>
        {/* AI Chat Sidebar — desktop */}
        <div className="hidden lg:block w-80 xl:w-96 flex-shrink-0 border-l border-[#2D3F55]">
          <AiChatSidebar />
        </div>
      </div>
    </div>
  );
}
