'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const HERO_LOCATIONS = ['Hinjewadi', 'Baner', 'Kharadi', 'Wakad', 'Bavdhan', 'Keshav Nagar'];

export default function HeroSection() {
  const [searchVal, setSearchVal] = useState('');
  const router = useRouter();

  function handleSearch() {
    if (searchVal?.trim()) {
      router?.push(`/project-listings?q=${encodeURIComponent(searchVal?.trim())}`);
    } else {
      router?.push('/project-listings');
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F1A2E] to-[#0B1120]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="relative px-4 sm:px-6 lg:px-8 xl:px-10 py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto">
          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/25 rounded-full mb-6">
            <Shield size={13} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold">100% MahaRERA Verified Projects</span>
          </div>

          {/* Headline */}
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl">
            Find Your Perfect Home in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Pune
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-xl leading-relaxed">
            Discover RERA-verified residential projects across Pune's top micro-markets. Compare builders, check possession timelines, and get AI-powered investment guidance — all in one place.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e?.target?.value)}
                onKeyDown={(e) => e?.key === 'Enter' && handleSearch()}
                placeholder="Search by location, builder, or project..."
                className="input-base w-full pl-10 py-3 text-sm"
              />
            </div>
            <button
              onClick={handleSearch}
              className="btn-primary flex items-center justify-center gap-2 py-3 px-6 text-sm"
            >
              Search
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Quick location pills */}
          <div className="mt-5 flex flex-wrap gap-2 items-center">
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <MapPin size={11} />
              Popular:
            </span>
            {HERO_LOCATIONS?.map((loc) => (
              <Link
                key={`hero-loc-${loc}`}
                href={`/project-listings`}
                className="px-3 py-1 bg-[#1E293B] hover:bg-[#243347] border border-[#2D3F55] hover:border-amber-500/30 hover:text-amber-400 text-slate-400 text-xs rounded-full transition-all duration-150"
              >
                {loc}
              </Link>
            ))}
          </div>

          {/* Trust indicators row */}
          <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
            {[
              { icon: Shield, label: 'RERA Verified', sub: 'All 10 projects registered' },
              { icon: TrendingUp, label: 'High ROI Picks', sub: 'AI-curated for investors' },
              { icon: MapPin, label: '8 Micro-markets', sub: 'Across Pune & PCMC' },
            ]?.map((item) => (
              <div key={`trust-${item?.label}`} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={15} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{item?.label}</div>
                  <div className="text-slate-500 text-[10px]">{item?.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
