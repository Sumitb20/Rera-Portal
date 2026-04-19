'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import { Menu, X, Building2, Home, Info } from 'lucide-react';

const NAV_LINKS = [
  { href: '/home-landing-page', label: 'Home', icon: Home },
  { href: '/project-listings', label: 'Projects', icon: Building2 },
  { href: '/about', label: 'About', icon: Info },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B1120]/95 backdrop-blur-md border-b border-[#2D3F55]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-[#0B1120]/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/home-landing-page" className="flex items-center gap-2.5 group">
              <AppLogo size={36} className="transition-transform duration-200 group-hover:scale-105" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-tight">PuneRealty</span>
                <span className="text-amber-500/70 text-[10px] font-medium tracking-widest uppercase">Verified Projects</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS?.map((link) => {
                const isActive = pathname === link?.href || (pathname === '/' && link?.href === '/home-landing-page');
                return (
                  <Link
                    key={`nav-${link?.href}`}
                    href={link?.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/25' :'text-slate-400 hover:text-white hover:bg-[#1E293B]'
                    }`}
                  >
                    <link.icon size={15} />
                    {link?.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/project-listings"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <Building2 size={14} />
                Explore Projects
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1E293B] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0F1A2E] border-l border-[#2D3F55] transform transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#2D3F55]">
          <div className="flex items-center gap-2">
            <AppLogo size={32} />
            <span className="text-white font-bold">PuneRealty</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1E293B] transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="p-4 flex flex-col gap-2">
          {NAV_LINKS?.map((link) => {
            const isActive = pathname === link?.href;
            return (
              <Link
                key={`mobile-nav-${link?.href}`}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/25' :'text-slate-300 hover:text-white hover:bg-[#1E293B]'
                }`}
              >
                <link.icon size={18} />
                {link?.label}
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-[#2D3F55]">
            <Link
              href="/project-listings"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <Building2 size={15} />
              Explore Projects
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
