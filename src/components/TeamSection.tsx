import React from 'react';
import { Link2, AtSign } from 'lucide-react';

const TEAM = [
  {
    id: 'team-001',
    name: 'Priya Kulkarni',
    role: 'Co-founder & CEO',
    bio: '12 years in Pune real estate brokerage. Former senior analyst at JLL India. Passionate about bringing MLS-level transparency to Indian property markets.',
    initials: 'PK',
    color: 'from-amber-600 to-amber-800',
    expertise: ['Market Analysis', 'RERA Compliance', 'Investor Relations'],
  },
  {
    id: 'team-002',
    name: 'Rohan Deshmukh',
    role: 'Co-founder & CTO',
    bio: 'Former engineering lead at Flipkart. Built PuneRealty\'s AI recommendation engine from scratch. IIT Bombay alumnus with a decade in PropTech.',
    initials: 'RD',
    color: 'from-blue-600 to-blue-800',
    expertise: ['AI/ML', 'Platform Architecture', 'Data Engineering'],
  },
  {
    id: 'team-003',
    name: 'Ananya Joshi',
    role: 'Head of RERA Compliance',
    bio: 'Certified MahaRERA consultant with 8 years of experience. Personally verifies every project listing on PuneRealty before it goes live.',
    initials: 'AJ',
    color: 'from-emerald-600 to-emerald-800',
    expertise: ['MahaRERA', 'Legal Due Diligence', 'Builder Verification'],
  },
  {
    id: 'team-004',
    name: 'Vikram Patil',
    role: 'Head of Partnerships',
    bio: 'Manages relationships with 15+ Pune builders. Previously at CREDAI Pune Metro. Ensures PuneRealty maintains the highest standards of listing quality.',
    initials: 'VP',
    color: 'from-purple-600 to-purple-800',
    expertise: ['Builder Relations', 'Market Intelligence', 'CREDAI Network'],
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#0F1A2E] border-y border-[#2D3F55] px-4 sm:px-6 lg:px-8 xl:px-10 py-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <div className="section-label mb-2">The People Behind PuneRealty</div>
          <h2 className="text-white font-bold text-2xl sm:text-3xl">Meet the Team</h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            A team of Pune real estate professionals and technologists united by one goal: making property buying honest and data-driven.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM?.map((member) => (
            <div
              key={member?.id}
              className="bg-[#1E293B] border border-[#2D3F55] rounded-2xl p-5 hover:border-[#4A6080] hover:shadow-card transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Avatar */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member?.color} flex items-center justify-center mb-4 flex-shrink-0`}>
                <span className="text-white font-bold text-lg">{member?.initials}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold text-base">{member?.name}</h3>
                <p className="text-amber-400/80 text-xs font-medium mt-0.5 mb-3">{member?.role}</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{member?.bio}</p>
              </div>

              {/* Expertise tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {member?.expertise?.map((exp) => (
                  <span
                    key={`exp-${member?.id}-${exp?.slice(0, 8)}`}
                    className="px-2 py-0.5 bg-[#243347] border border-[#2D3F55] rounded-full text-[10px] text-slate-400"
                  >
                    {exp}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-2 pt-3 border-t border-[#2D3F55]">
                <button className="p-1.5 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all" aria-label={`${member?.name} LinkedIn`}>
                  <Link2 size={14} />
                </button>
                <button className="p-1.5 rounded-lg text-slate-500 hover:text-sky-400 hover:bg-sky-500/10 transition-all" aria-label={`${member?.name} Twitter`}>
                  <AtSign size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
