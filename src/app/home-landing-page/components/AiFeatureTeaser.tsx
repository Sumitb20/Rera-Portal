import React from 'react';
import Link from 'next/link';
import { Sparkles, MessageSquare, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const AI_CAPABILITIES = [
  { icon: TrendingUp, title: 'ROI Analysis', desc: 'Ask which projects offer the best return on investment in your target micro-market.' },
  { icon: Shield, title: 'Risk Assessment', desc: 'Identify low-risk projects based on RERA status, builder track record, and construction progress.' },
  { icon: MessageSquare, title: 'Natural Language Search', desc: 'Ask in plain English — "Show me ready-to-move flats under ₹80L in Hinjewadi."' },
];

export default function AiFeatureTeaser() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 py-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1A2540] to-[#0F1A2E] border border-amber-500/20 rounded-2xl p-6 sm:p-10">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full mb-5">
                <Sparkles size={13} className="text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold">AI-Powered Guidance</span>
              </div>
              <h2 className="text-white font-bold text-2xl sm:text-3xl leading-tight">
                Your Personal{' '}
                <span className="text-amber-400">Pune Property</span>{' '}
                Advisor
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                PuneRealty AI analyzes all listed projects in real-time and answers your property questions — from ROI projections to RERA verification — in seconds.
              </p>
              <Link
                href="/project-listings"
                className="mt-6 btn-primary inline-flex items-center gap-2 text-sm"
              >
                <Sparkles size={14} />
                Try AI Chat
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right — capability cards */}
            <div className="space-y-3">
              {AI_CAPABILITIES?.map((cap) => (
                <div
                  key={`ai-cap-${cap?.title}`}
                  className="flex items-start gap-3 p-4 bg-[#0B1120]/60 border border-[#2D3F55] rounded-xl hover:border-amber-500/25 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <cap.icon size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{cap?.title}</div>
                    <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">{cap?.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
