import React from 'react';
import Link from 'next/link';
import { Shield, ArrowRight, Target, Eye } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F1A2E] to-[#0B1120] border-b border-[#2D3F55]">
      <div className="absolute top-0 left-1/3 w-96 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="px-4 sm:px-6 lg:px-8 xl:px-10 py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <div className="section-label mb-3">Our Story</div>
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
              Bringing Transparency to{' '}
              <span className="text-amber-400">Pune Real Estate</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              PuneRealty was built by a team of Pune-based real estate professionals and technologists who were frustrated by opaque listings, unverified RERA claims, and misleading builder promises. We set out to create a platform where every project is verified, every claim is backed by data, and every buyer gets honest guidance.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Since 2024, we've helped over 4,200 Pune families discover their ideal homes — from first-time buyers navigating Hinjewadi's IT corridor to seasoned investors evaluating waterfront luxury in Kharadi.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/project-listings" className="btn-primary flex items-center gap-2">
                Browse Projects
                <ArrowRight size={15} />
              </Link>
              <Link href="/project-listings" className="btn-secondary flex items-center gap-2">
                <Shield size={15} />
                RERA Verified Listings
              </Link>
            </div>
          </div>

          {/* Mission + Vision cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Target size={17} className="text-amber-400" />
                </div>
                <span className="text-white font-semibold">Our Mission</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empower every Pune home buyer with verified data, transparent pricing, and AI-driven insights — so no one makes a ₹1 crore decision on incomplete information.
              </p>
            </div>
            <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Eye size={17} className="text-blue-400" />
                </div>
                <span className="text-white font-semibold">Our Vision</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                To become Pune's most trusted real estate intelligence platform — where RERA compliance, builder accountability, and AI guidance are standard, not premium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
