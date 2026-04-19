import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Zap, Brain, MessageSquare } from 'lucide-react';

const AI_FEATURES = [
  {
    icon: Brain,
    title: 'Trained on Pune Market Data',
    desc: 'PuneRealty AI has been trained on Pune micro-market trends, builder track records, historical price data, and RERA compliance history — not generic real estate knowledge.',
  },
  {
    icon: Zap,
    title: 'Instant Answers, No Waiting',
    desc: 'No need to call a broker or wait for a callback. Ask your question and get a detailed, data-backed answer in seconds — any time of day.',
  },
  {
    icon: MessageSquare,
    title: 'Conversational & Context-Aware',
    desc: 'Follow up naturally. If you ask "Which project is best for ROI?" and then "What about under ₹80L?", the AI understands the context and refines its answer.',
  },
];

export default function AiFeatureAbout() {
  return (
    <section className="bg-[#0F1A2E] border-y border-[#2D3F55] px-4 sm:px-6 lg:px-8 xl:px-10 py-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <div className="section-label mb-2">Built-in Intelligence</div>
          <h2 className="text-white font-bold text-2xl sm:text-3xl">PuneRealty AI Assistant</h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            The AI chat panel isn't a gimmick — it's a genuine property advisor trained specifically for the Pune real estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {AI_FEATURES?.map((feat) => (
            <div
              key={`ai-feat-${feat?.title?.slice(0, 10)}`}
              className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-5 hover:border-amber-500/25 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <feat.icon size={19} className="text-amber-400" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">{feat?.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{feat?.desc}</p>
            </div>
          ))}
        </div>

        {/* Sample queries showcase */}
        <div className="bg-[#1E293B] border border-[#2D3F55] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-white font-semibold text-sm">Sample Questions You Can Ask</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Which is the best project in Pune for ROI?',
              'Show low-risk projects in Hinjewadi',
              'Which projects are ready to move?',
              'Best project under ₹80L in Pune?',
              'Compare Baner vs Kharadi for investment',
              'Is Godrej Woodsville RERA verified?',
            ]?.map((q) => (
              <div
                key={`sample-q-${q?.slice(0, 20)}`}
                className="flex items-start gap-2 p-3 bg-[#0B1120] border border-[#2D3F55] rounded-lg"
              >
                <MessageSquare size={12} className="text-amber-500/60 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-xs leading-relaxed">{q}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-center">
            <Link href="/project-listings" className="btn-primary flex items-center gap-2 text-sm">
              <Sparkles size={14} />
              Try AI Chat Now
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
