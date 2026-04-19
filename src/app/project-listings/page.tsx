import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectListingsContent from './components/ProjectListingsContent';

export default function ProjectListingsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Navbar />
      <ProjectListingsContent />
    </div>
  );
}
