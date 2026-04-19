'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PUNE_PROJECTS, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import ReraModal from '@/components/ReraModal';

export default function FeaturedProjects() {
  const featured = PUNE_PROJECTS?.filter((p) => p?.featured)?.slice(0, 6);
  const [detailProject, setDetailProject] = useState<Project | null>(null);
  const [reraProject, setReraProject] = useState<Project | null>(null);

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 xl:px-10 py-10 bg-[#0F1A2E]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="section-label mb-1">Handpicked for You</div>
              <h2 className="text-white font-bold text-xl">Featured Projects</h2>
              <p className="text-slate-400 text-sm mt-1">Top-rated projects across Pune's best micro-markets</p>
            </div>
            <Link
              href="/project-listings"
              className="hidden sm:flex items-center gap-2 btn-primary text-sm"
            >
              View All Projects
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {featured?.map((project) => (
              <ProjectCard
                key={project?.id}
                project={project}
                onViewDetails={setDetailProject}
                onViewRera={setReraProject}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center sm:hidden">
            <Link href="/project-listings" className="btn-primary flex items-center gap-2">
              View All Projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      {detailProject && (
        <ProjectDetailModal project={detailProject} onClose={() => setDetailProject(null)} />
      )}
      {reraProject && (
        <ReraModal project={reraProject} onClose={() => setReraProject(null)} />
      )}
    </>
  );
}
