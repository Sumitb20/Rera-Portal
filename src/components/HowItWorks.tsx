import React from 'react';
import { Search, Shield, Sparkles } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Search,
    title: 'Discover Projects',
    description: 'Browse our curated database of Pune residential projects filtered by location, price range, possession status, and investment tags. Every listing is manually reviewed before going live.',
    detail: 'Use our smart search to filter by Hinjewadi, Kharadi, Baner, and 5 other Pune micro-markets. Compare price per sqft, configurations, and builder reputation side-by-side.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    step: '02',
    icon: Shield,
    title: 'Verify with RERA',
    description: 'Every project on PuneRealty displays its MahaRERA registration ID, legal status, completion certificate details, and unit inventory — directly sourced from the MahaRERA public portal.',
    detail: 'Click "View RERA" on any project card to see full registration details: RERA ID, registration date, completion timeline, sold vs. available units, and legal title status.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'Get AI Guidance',
    description: 'Ask our AI assistant anything about Pune real estate — ROI projections, risk comparisons, location analysis, home loan estimates, or ready-to-move availability.',
    detail: 'PuneRealty AI is trained on Pune market data, builder track records, and micro-market trends. It answers in plain language and cites the specific projects it\'s recommending.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 py-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <div className="section-label mb-2">Simple. Transparent. Trusted.</div>
          <h2 className="text-white font-bold text-2xl sm:text-3xl">How PuneRealty Works</h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            From discovery to decision — we've simplified the most complex purchase of your life into three clear steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS?.map((step, idx) => (
            <div key={`step-${step?.step}`} className="relative">
              {/* Connector line */}
              {idx < STEPS?.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-6 h-px bg-[#2D3F55] z-10 -translate-x-3" />
              )}

              <div className={`bg-[#1E293B] border ${step?.border} rounded-2xl p-6 hover:shadow-card transition-all duration-200 hover:-translate-y-0.5 h-full flex flex-col`}>
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${step?.bg} border ${step?.border} flex items-center justify-center flex-shrink-0`}>
                    <step.icon size={22} className={step?.color} />
                  </div>
                  <span className={`text-3xl font-bold font-mono-data ${step?.color} opacity-30`}>{step?.step}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{step?.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">{step?.description}</p>
                <p className="text-slate-500 text-xs leading-relaxed mt-auto">{step?.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
