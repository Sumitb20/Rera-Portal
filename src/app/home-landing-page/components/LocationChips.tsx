'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, TrendingUp } from 'lucide-react';

const LOCATIONS_DATA = [
  { name: 'Hinjewadi', projects: 2, avgPrice: '₹70L–1.45Cr', growth: '+9.4% YoY', highlight: true },
  { name: 'Kharadi', projects: 2, avgPrice: '₹72L–3.2Cr', growth: '+11.4% YoY', highlight: true },
  { name: 'Baner', projects: 1, avgPrice: '₹1.1–1.85Cr', growth: '+8.2% YoY', highlight: false },
  { name: 'Wakad', projects: 1, avgPrice: '₹68L–1.12Cr', growth: '+9.1% YoY', highlight: false },
  { name: 'Keshav Nagar', projects: 1, avgPrice: '₹55L–88L', growth: '+7.6% YoY', highlight: false },
  { name: 'Bavdhan', projects: 1, avgPrice: '₹78L–1.22Cr', growth: '+8.8% YoY', highlight: false },
  { name: 'Manjri', projects: 1, avgPrice: '₹62L–98L', growth: '+10.2% YoY', highlight: false },
  { name: 'Mahalunge', projects: 1, avgPrice: '₹88L–1.35Cr', growth: '+9.7% YoY', highlight: false },
];

export default function LocationChips() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="section-label mb-1">Browse by Location</div>
            <h2 className="text-white font-bold text-xl">Pune Micro-markets</h2>
          </div>
          <Link href="/project-listings" className="text-amber-400 hover:text-amber-300 text-sm font-medium flex items-center gap-1.5 transition-colors">
            View all
            <TrendingUp size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {LOCATIONS_DATA?.map((loc) => (
            <Link
              key={`loc-card-${loc?.name}`}
              href="/project-listings"
              className={`group p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card ${
                loc?.highlight
                  ? 'bg-amber-500/10 border-amber-500/25 hover:border-amber-500/50' :'bg-[#1E293B] border-[#2D3F55] hover:border-[#4A6080]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={14} className={loc?.highlight ? 'text-amber-400' : 'text-slate-500'} />
                <span className={`font-semibold text-sm ${loc?.highlight ? 'text-amber-300' : 'text-white'}`}>{loc?.name}</span>
              </div>
              <div className="text-slate-400 text-xs">{loc?.projects} project{loc?.projects > 1 ? 's' : ''}</div>
              <div className="text-slate-500 text-xs mt-0.5">{loc?.avgPrice}</div>
              <div className="text-emerald-400 text-xs font-medium mt-1.5 flex items-center gap-1">
                <TrendingUp size={10} />
                {loc?.growth}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
