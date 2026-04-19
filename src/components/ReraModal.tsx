'use client';
import React from 'react';
import { X, Shield, CheckCircle, Clock, FileText, Users, MapPin, Calendar, Building2, AlertTriangle, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

interface ReraModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ReraModal({ project, onClose }: ReraModalProps) {
  if (!project) return null;

  const rera = project.reraRecord;
  const isRegistered = rera.registrationStatus === 'Registered';
  const isApplied = rera.registrationStatus === 'Applied';

  const soldPercent = Math.round((rera.soldUnits / rera.totalUnits) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-4 pb-4 px-4 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#0F1A2E] border border-[#2D3F55] rounded-2xl shadow-modal animate-scale-in overflow-hidden my-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1E293B] to-[#0F1A2E] border-b border-[#2D3F55] p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                isRegistered ? 'bg-emerald-500/15 border border-emerald-500/30' : isApplied ?'bg-amber-500/15 border border-amber-500/30': 'bg-rose-500/15 border border-rose-500/30'
              }`}>
                <Shield size={22} className={isRegistered ? 'text-emerald-400' : isApplied ? 'text-amber-400' : 'text-rose-400'} />
              </div>
              <div>
                <h2 className="text-white font-bold text-base">RERA Information</h2>
                <p className="text-slate-400 text-sm mt-0.5">{project.name}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-white hover:bg-[#2D3F55] transition-all"
              aria-label="Close RERA modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* RERA ID + Status */}
          <div className="mt-4 flex items-center gap-3 p-3 bg-[#0B1120] rounded-xl border border-[#2D3F55]">
            <div className="flex-1">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">MahaRERA Registration ID</div>
              <div className="font-mono-data text-amber-400 font-semibold text-base tracking-wider">{rera.reraId}</div>
            </div>
            <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
              isRegistered ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25' : isApplied ?'bg-amber-500/15 text-amber-400 border border-amber-500/25': 'bg-rose-500/15 text-rose-400 border border-rose-500/25'
            }`}>
              {isRegistered ? <CheckCircle size={12} /> : <Clock size={12} />}
              {rera.registrationStatus}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto scrollbar-thin">
          {/* Authority Notice */}
          {isApplied && (
            <div className="flex items-start gap-2.5 p-3 bg-amber-500/10 border border-amber-500/25 rounded-xl">
              <AlertTriangle size={15} className="text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-amber-300 text-xs leading-relaxed">
                This project's RERA registration is currently under review by MahaRERA. Token amounts should not be paid until registration is confirmed. Verify directly at maharera.mahaonline.gov.in before proceeding.
              </p>
            </div>
          )}

          {/* Key Dates */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-widest uppercase text-amber-500/80 mb-2">Registration & Completion</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Registration Date', value: rera.registrationDate, icon: Calendar },
                { label: 'Completion Date', value: rera.completionDate, icon: Calendar },
                { label: 'Authority', value: rera.authority, icon: Shield },
                { label: 'Last Updated', value: rera.lastUpdated, icon: Clock },
              ].map((item) => (
                <div key={`rera-date-${item.label}`} className="bg-[#1E293B] border border-[#2D3F55] rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <item.icon size={10} className="text-slate-500" />
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">{item.label}</span>
                  </div>
                  <div className="text-sm font-medium text-slate-200 font-mono-data">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-widest uppercase text-amber-500/80 mb-2">Project Information</h3>
            <div className="space-y-2">
              {[
                { label: 'Promoter / Developer', value: rera.promoterName, icon: Building2 },
                { label: 'Project Type', value: rera.projectType, icon: FileText },
                { label: 'Land Area', value: rera.landArea, icon: MapPin },
                { label: 'Carpet Area Range', value: rera.carpetAreaRange, icon: MapPin },
              ].map((item) => (
                <div key={`rera-info-${item.label}`} className="flex items-center justify-between p-3 bg-[#1E293B] border border-[#2D3F55] rounded-lg">
                  <div className="flex items-center gap-2">
                    <item.icon size={13} className="text-slate-500 flex-shrink-0" />
                    <span className="text-xs text-slate-400">{item.label}</span>
                  </div>
                  <span className="text-sm text-slate-200 font-medium text-right max-w-[55%]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Units Progress */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-widest uppercase text-amber-500/80 mb-2">Inventory Status</h3>
            <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-slate-400" />
                  <span className="text-sm text-slate-300 font-medium">Units Sold</span>
                </div>
                <span className="text-sm font-bold font-mono-data text-white">
                  {rera.soldUnits.toLocaleString()} / {rera.totalUnits.toLocaleString()}
                  <span className="text-slate-500 font-normal text-xs ml-1">({soldPercent}%)</span>
                </span>
              </div>
              <div className="h-2 bg-[#0B1120] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    soldPercent >= 90 ? 'bg-rose-500' :
                    soldPercent >= 70 ? 'bg-amber-500' :
                    soldPercent >= 40 ? 'bg-blue-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${soldPercent}%` }}
                />
              </div>
              <div className="flex justify-between mt-1.5 text-[10px] text-slate-600">
                <span>{rera.totalUnits - rera.soldUnits} units available</span>
                <span>{soldPercent}% sold</span>
              </div>
            </div>
          </div>

          {/* Legal Status */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-widest uppercase text-amber-500/80 mb-2">Legal Status</h3>
            <div className={`flex items-start gap-3 p-3 rounded-xl border ${
              isRegistered
                ? 'bg-emerald-500/10 border-emerald-500/25' :'bg-amber-500/10 border-amber-500/25'
            }`}>
              {isRegistered ? (
                <CheckCircle size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
              ) : (
                <Clock size={15} className="text-amber-400 mt-0.5 flex-shrink-0" />
              )}
              <p className={`text-sm font-medium ${isRegistered ? 'text-emerald-300' : 'text-amber-300'}`}>
                {rera.legalStatus}
              </p>
            </div>
          </div>

          {/* Verify CTA */}
          <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-4">
            <div className="flex items-start gap-3">
              <ExternalLink size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Verify on MahaRERA Portal</p>
                <p className="text-xs text-slate-400 mt-1">
                  Visit <span className="text-amber-400 font-mono-data">maharera.mahaonline.gov.in</span> and search for RERA ID{' '}
                  <span className="text-amber-400 font-mono-data">{rera.reraId}</span> to independently verify all information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#2D3F55] flex items-center justify-between bg-[#0B1120]">
          <p className="text-[10px] text-slate-600">Data sourced from MahaRERA public records</p>
          <button onClick={onClose} className="btn-ghost text-xs">Close</button>
        </div>
      </div>
    </div>
  );
}
