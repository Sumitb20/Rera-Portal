import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutFooter() {
  return (
    <footer className="bg-[#0B1120] border-t border-[#2D3F55] px-4 sm:px-6 lg:px-8 xl:px-10 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <AppLogo size={34} />
              <span className="text-white font-bold text-base">PuneRealty</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Pune's most trusted real estate discovery platform. All projects are MahaRERA verified.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Shield size={11} className="text-emerald-400" />
              <span>100% MahaRERA Verified Listings</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">Navigation</div>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/home-landing-page' },
                { label: 'Projects', href: '/project-listings' },
                { label: 'About', href: '/about' },
              ]?.map((link) => (
                <li key={`about-footer-${link?.href}`}>
                  <Link href={link?.href} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">Locations</div>
            <ul className="space-y-2">
              {['Hinjewadi', 'Kharadi', 'Baner', 'Wakad', 'Bavdhan']?.map((loc) => (
                <li key={`about-footer-loc-${loc}`}>
                  <Link href="/project-listings" className="text-slate-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-1.5">
                    <MapPin size={10} className="text-slate-600" />
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">Contact</div>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail size={13} className="text-amber-500/60 flex-shrink-0" />
                hello@punerealty.in
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone size={13} className="text-amber-500/60 flex-shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={13} className="text-amber-500/60 flex-shrink-0" />
                Baner, Pune – 411045
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#2D3F55] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © 2026 PuneRealty. All rights reserved. RERA data sourced from MahaRERA public portal.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Use</Link>
            <Link href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
