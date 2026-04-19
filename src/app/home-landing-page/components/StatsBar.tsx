import React from 'react';
import { Building2, Users, Shield, MapPin } from 'lucide-react';

const STATS = [
  { icon: Building2, value: '10+', label: 'Verified Projects', sub: 'Across Pune & PCMC' },
  { icon: Users, value: '15+', label: 'Trusted Builders', sub: 'Godrej, Kolte-Patil & more' },
  { icon: Shield, value: '100%', label: 'RERA Registered', sub: 'MahaRERA certified' },
  { icon: MapPin, value: '8', label: 'Micro-markets', sub: 'Hinjewadi to Kharadi' },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0F1A2E] border-y border-[#2D3F55]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS?.map((stat, i) => (
            <div key={`stat-${i}`} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <stat.icon size={18} className="text-amber-400" />
              </div>
              <div>
                <div className="text-white font-bold text-xl font-mono-data leading-none">{stat?.value}</div>
                <div className="text-slate-300 text-xs font-medium mt-0.5">{stat?.label}</div>
                <div className="text-slate-500 text-[10px]">{stat?.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
