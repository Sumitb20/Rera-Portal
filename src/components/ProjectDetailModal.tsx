'use client';
import React from 'react';
import { X, MapPin, Building2, Calendar, CheckCircle, Clock, Shield, Users, Star, Award, Home, Layers } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
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

const TRUST_INDICATORS = [
  { label: 'Builder Reputation', key: 'builderReputation' as const, icon: Star },
  { label: 'On-time Delivery', key: 'onTimeDelivery' as const, icon: Clock },
];

const GRADIENT_MAP: Record<string, string> = {
  'from-emerald-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(6,78,59,0.9) 0%, rgba(15,23,42,0.98) 100%)',
  'from-blue-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(30,58,138,0.9) 0%, rgba(15,23,42,0.98) 100%)',
  'from-purple-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(88,28,135,0.9) 0%, rgba(15,23,42,0.98) 100%)',
  'from-cyan-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(22,78,99,0.9) 0%, rgba(15,23,42,0.98) 100%)',
  'from-rose-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(136,19,55,0.9) 0%, rgba(15,23,42,0.98) 100%)',
  'from-amber-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(120,53,15,0.9) 0%, rgba(15,23,42,0.98) 100%)',
  'from-indigo-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(49,46,129,0.9) 0%, rgba(15,23,42,0.98) 100%)',
  'from-teal-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(19,78,74,0.9) 0%, rgba(15,23,42,0.98) 100%)',
  'from-violet-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(76,29,149,0.9) 0%, rgba(15,23,42,0.98) 100%)',
  'from-orange-900/80 to-slate-900/90': 'linear-gradient(135deg, rgba(124,45,18,0.9) 0%, rgba(15,23,42,0.98) 100%)',
};

function TrustBadge({ label, value }: { label: string; value: string }) {
  const colorMap: Record<string, string> = {
    'High': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    'Excellent': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    'Medium': 'text-amber-400 bg-amber-500/10 border-amber-500/25',
    'Good': 'text-blue-400 bg-blue-500/10 border-blue-500/25',
    'Low': 'text-rose-400 bg-rose-500/10 border-rose-500/25',
    'Average': 'text-amber-400 bg-amber-500/10 border-amber-500/25',
  };
  return (
    <div className="flex items-center justify-between p-3 bg-[#0F1A2E] rounded-lg border border-[#2D3F55]">
      <span className="text-xs text-slate-400">{label}</span>
      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colorMap[value] || 'text-slate-400 bg-slate-500/10 border-slate-500/25'}`}>
        {value}
      </span>
    </div>
  );
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const gradient = GRADIENT_MAP[project.imageGradient] || GRADIENT_MAP['from-blue-900/80 to-slate-900/90'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-4 pb-4 px-4 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#0F1A2E] border border-[#2D3F55] rounded-2xl shadow-modal animate-scale-in overflow-hidden my-auto">
        {/* Header Banner */}
        <div className="h-40 relative" style={{ background: gradient }}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/30 hover:bg-black/50 text-white/70 hover:text-white transition-all backdrop-blur-sm"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="absolute bottom-4 left-5 right-16">
            <div className="flex items-center gap-2 mb-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={`modal-tag-${tag}`} className={`tag-chip ${TAG_STYLES[tag] || ''}`}>
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-white font-bold text-xl leading-tight">{project.name}</h2>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin size={12} className="text-amber-400" />
              <span className="text-white/70 text-sm">{project.location}</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5 max-h-[70vh] overflow-y-auto scrollbar-thin">
          {/* Price + Stats row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-3 text-center">
              <div className="text-amber-400 font-bold text-base font-mono-data leading-tight">{project.priceRange}</div>
              <div className="text-slate-500 text-xs mt-0.5">Price Range</div>
            </div>
            <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-3 text-center">
              <div className="text-white font-bold text-base font-mono-data leading-tight">{project.pricePerSqft}</div>
              <div className="text-slate-500 text-xs mt-0.5">Rate / sqft</div>
            </div>
            <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-3 text-center">
              <div className="text-white font-bold text-base leading-tight">{project.possessionDate}</div>
              <div className="text-slate-500 text-xs mt-0.5">Possession</div>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-amber-500/80 mb-2">About the Project</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Configurations */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-amber-500/80 mb-2">Configurations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.configurations.map((config) => (
                <div key={`config-${project.id}-${config.slice(0,10)}`} className="flex items-center gap-2 bg-[#1E293B] border border-[#2D3F55] rounded-lg px-3 py-2">
                  <Home size={13} className="text-amber-500 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{config}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details Grid */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-amber-500/80 mb-2">Project Details</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { label: 'Total Units', value: project.totalUnits.toLocaleString(), icon: Users },
                { label: 'Total Floors', value: `${project.totalFloors} Floors`, icon: Layers },
                { label: 'Land Area', value: project.landArea, icon: MapPin },
                { label: 'Builder Projects', value: `${project.builderProjects}+ Projects`, icon: Building2 },
                { label: 'Status', value: project.status, icon: Calendar },
                { label: 'City', value: project.city, icon: MapPin },
              ].map((item) => (
                <div key={`detail-${item.label}`} className="bg-[#1E293B] border border-[#2D3F55] rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <item.icon size={11} className="text-slate-500" />
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">{item.label}</span>
                  </div>
                  <div className="text-sm font-medium text-slate-200">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-amber-500/80 mb-2">Amenities ({project.amenities.length})</h3>
            <div className="flex flex-wrap gap-2">
              {project.amenities.map((amenity) => (
                <span
                  key={`amenity-${project.id}-${amenity.name}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] border border-[#2D3F55] rounded-lg text-xs text-slate-300 hover:border-amber-500/30 hover:text-amber-300 transition-colors"
                >
                  <CheckCircle size={10} className="text-emerald-500" />
                  {amenity.name}
                </span>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-amber-500/80 mb-2">Trust Indicators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <TrustBadge label="Builder Reputation" value={project.builderReputation} />
              <TrustBadge label="On-time Delivery Track Record" value={project.onTimeDelivery} />
              <TrustBadge label="RERA Registration" value={project.reraRecord.registrationStatus} />
              <TrustBadge label="Legal Status" value={project.reraRecord.legalStatus.split(' — ')[0]} />
            </div>
          </div>

          {/* Builder Info */}
          <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
                <Award size={18} className="text-amber-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{project.builder}</div>
                <div className="text-slate-400 text-xs mt-0.5">{project.builderProjects}+ completed projects · {project.builderReputation} reputation</div>
              </div>
            </div>
          </div>

          {/* Possession Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-amber-500/80">Construction Progress</h3>
              <span className="text-sm font-bold font-mono-data text-white">{project.possessionProgress}%</span>
            </div>
            <div className="h-2.5 bg-[#243347] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  project.possessionProgress === 100 ? 'bg-emerald-500' :
                  project.possessionProgress >= 60 ? 'bg-amber-500' :
                  project.possessionProgress >= 30 ? 'bg-blue-500' : 'bg-rose-500'
                }`}
                style={{ width: `${project.possessionProgress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5 text-[10px] text-slate-600">
              <span>Foundation</span>
              <span>Structure</span>
              <span>Finishing</span>
              <span>Possession</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#2D3F55] flex items-center justify-between bg-[#0B1120]">
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-emerald-400" />
            <span className="text-xs text-slate-400">MahaRERA ID: <span className="font-mono-data text-slate-300">{project.reraRecord.reraId}</span></span>
          </div>
          <button
            onClick={onClose}
            className="btn-ghost text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
