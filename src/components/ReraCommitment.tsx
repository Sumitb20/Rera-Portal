import React from 'react';
import { Shield, CheckCircle, ExternalLink, AlertTriangle, FileText } from 'lucide-react';

const RERA_POINTS = [
  {
    icon: CheckCircle,
    title: 'Manual RERA Verification',
    desc: 'Every project is manually verified against the MahaRERA portal before listing. We cross-check RERA ID, registration date, legal title status, and completion certificate.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Shield,
    title: 'Zero Unregistered Listings',
    desc: 'PuneRealty maintains a strict policy of listing only MahaRERA-registered projects. Pre-launch projects are clearly marked as "Applied" with appropriate buyer cautions.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: AlertTriangle,
    title: 'Transparent Risk Flags',
    desc: 'We proactively flag projects with delayed possession history, pending RERA approvals, or legal disputes — even if the builder is a premium brand.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: FileText,
    title: 'Live Data Sync',
    desc: 'Our RERA data is refreshed monthly from the MahaRERA public portal. "Last updated" timestamps on every RERA record ensure you always see current information.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
];

export default function ReraCommitment() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 py-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <div className="section-label mb-2">Our RERA Promise</div>
            <h2 className="text-white font-bold text-2xl sm:text-3xl mb-4">
              MahaRERA Compliance is{' '}
              <span className="text-amber-400">Non-Negotiable</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
              India's RERA Act (2016) was a watershed moment for home buyers. Yet most property portals still list unregistered projects, outdated RERA data, and builders with compliance violations. PuneRealty was built to be different.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Our dedicated RERA compliance team, led by certified MahaRERA consultant Ananya Joshi, reviews every listing before it goes live and audits all existing listings monthly. We have zero tolerance for unregistered or non-compliant listings.
            </p>

            {/* MahaRERA badge */}
            <div className="inline-flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-xl">
              <Shield size={24} className="text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-emerald-300 font-semibold text-sm">MahaRERA Partner Platform</div>
                <div className="text-emerald-500/70 text-xs mt-0.5">Authorized to display MahaRERA registration data</div>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://maharera.mahaonline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                <ExternalLink size={14} />
                Verify any RERA ID on maharera.mahaonline.gov.in
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RERA_POINTS?.map((point) => (
              <div
                key={`rera-point-${point?.title?.slice(0, 10)}`}
                className={`bg-[#1E293B] border ${point?.border} rounded-xl p-4 hover:shadow-card transition-all duration-200`}
              >
                <div className={`w-9 h-9 rounded-lg ${point?.bg} border ${point?.border} flex items-center justify-center mb-3`}>
                  <point.icon size={17} className={point?.color} />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{point?.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{point?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
