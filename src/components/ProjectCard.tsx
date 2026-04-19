'use client';
import React from 'react';
import { MapPin, Building2, Calendar, TrendingUp, ChevronRight, ExternalLink, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  onViewRera: (project: Project) => void;
}

const TAG_STYLES: Record<string, string> = {
  'High ROI': 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
  'Low Risk': 'bg-blue-500/15 text-blue-400 border border-blue-500/25',
  'Ready to Move': 'bg-purple-500/15 text-purple-400 border border-purple-500/25',
  'Under Construction': 'bg-amber-500/15 text-amber-400 border border-amber-500/25',
  'Pre-Launch': 'bg-rose-500/15 text-rose-400 border border-rose-500/25',
  'Luxury': 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/25',
  'Affordable': 'bg-teal-500/15 text-teal-400 border border-teal-500/25',
  'RERA Verified': 'bg-slate-500/15 text-slate-400 border border-slate-500/25',
};

const STATUS_CONFIG = {
  'Ready to Move': { icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  'Under Construction': { icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  'Pre-Launch': { icon: AlertCircle, color: 'text-rose-400', bg: 'bg-rose-500/10' },
};

const GRADIENT_MAP: Record<string, string> = {
  'from-emerald-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(6,78,59,0.85) 0%, rgba(15,23,42,0.95) 100%)',
  'from-blue-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(30,58,138,0.85) 0%, rgba(15,23,42,0.95) 100%)',
  'from-purple-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(88,28,135,0.85) 0%, rgba(15,23,42,0.95) 100%)',
  'from-cyan-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(22,78,99,0.85) 0%, rgba(15,23,42,0.95) 100%)',
  'from-rose-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(136,19,55,0.85) 0%, rgba(15,23,42,0.95) 100%)',
  'from-amber-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(120,53,15,0.85) 0%, rgba(15,23,42,0.95) 100%)',
  'from-indigo-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(49,46,129,0.85) 0%, rgba(15,23,42,0.95) 100%)',
  'from-teal-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(19,78,74,0.85) 0%, rgba(15,23,42,0.95) 100%)',
  'from-violet-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(76,29,149,0.85) 0%, rgba(15,23,42,0.95) 100%)',
  'from-orange-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(124,45,18,0.85) 0%, rgba(15,23,42,0.95) 100%)',
};

export default function ProjectCard({ project, onViewDetails, onViewRera }: ProjectCardProps) {
  const statusConfig = STATUS_CONFIG[project.status];
  const StatusIcon = statusConfig.icon;
  const gradient = GRADIENT_MAP[project.imageGradient] || GRADIENT_MAP['from-blue-900/80 to-slate-900/90'];

  return (
    <div className="group card-base overflow-hidden hover:border-[#4A6080] hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
      {/* Card Header — gradient banner */}
      <div
        className="h-28 relative flex-shrink-0 overflow-hidden"
        style={{ background: gradient }}
      >
        {/* Builder badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/10 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            <Building2 size={11} />
            {project.builder}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${statusConfig.bg} ${statusConfig.color} border border-current/20 backdrop-blur-sm`}>
            <StatusIcon size={11} />
            {project.status}
          </span>
        </div>

        {/* Price — bottom of banner */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <div className="text-white font-bold text-lg leading-none font-mono-data">{project.priceRange}</div>
            <div className="text-white/60 text-xs mt-0.5 font-mono-data">{project.pricePerSqft}</div>
          </div>
          {project.featured && (
            <span className="bg-amber-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide uppercase">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Name + Location */}
        <div>
          <h3 className="text-white font-semibold text-base leading-tight group-hover:text-amber-400 transition-colors duration-150">
            {project.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin size={12} className="text-amber-500 flex-shrink-0" />
            <span className="text-slate-400 text-xs">{project.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={`tag-${project.id}-${tag}`} className={`tag-chip ${TAG_STYLES[tag] || 'bg-slate-500/15 text-slate-400'}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Possession + Progress */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar size={11} />
              <span>Possession: <span className="text-slate-300 font-medium">{project.possessionDate}</span></span>
            </div>
            <span className="text-xs font-mono-data text-slate-400">{project.possessionProgress}%</span>
          </div>
          <div className="h-1.5 bg-[#243347] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                project.possessionProgress === 100
                  ? 'bg-emerald-500'
                  : project.possessionProgress >= 60
                  ? 'bg-amber-500'
                  : project.possessionProgress >= 30
                  ? 'bg-blue-500' :'bg-rose-500'
              }`}
              style={{ width: `${project.possessionProgress}%` }}
            />
          </div>
        </div>

        {/* RERA + On-time row */}
        <div className="flex items-center justify-between pt-1 border-t border-[#2D3F55]">
          <div className={project.reraRecord.registrationStatus === 'Registered' ? 'rera-badge-verified' : 'rera-badge-pending'}>
            <CheckCircle size={10} />
            MahaRERA {project.reraRecord.registrationStatus}
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <TrendingUp size={11} />
            <span>On-time: <span className={`font-medium ${
              project.onTimeDelivery === 'High' ? 'text-emerald-400' :
              project.onTimeDelivery === 'Medium' ? 'text-amber-400' : 'text-rose-400'
            }`}>{project.onTimeDelivery}</span></span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 btn-primary flex items-center justify-center gap-1.5 text-xs py-2"
          >
            View Details
            <ChevronRight size={13} />
          </button>
          <button
            onClick={() => onViewRera(project)}
            className="flex-1 btn-secondary flex items-center justify-center gap-1.5 text-xs py-2"
          >
            <ExternalLink size={12} />
            View RERA
          </button>
        </div>
      </div>
    </div>
  );
}
