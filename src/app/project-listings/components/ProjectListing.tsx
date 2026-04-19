'use client';
import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, MessageSquare, Building2, Filter } from 'lucide-react';
import { PUNE_PROJECTS, LOCATIONS, PRICE_RANGES, TAG_FILTERS, Project, ProjectTag } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import ReraModal from '@/components/ReraModal';
import AiChatSidebar from '@/components/AiChatSidebar';

export default function ProjectListingsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);
  const [detailProject, setDetailProject] = useState<Project | null>(null);
  const [reraProject, setReraProject] = useState<Project | null>(null);
  const [mobileChatOpen, setMobileChatOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const priceRange = PRICE_RANGES[selectedPriceRange];

  const filteredProjects = useMemo(() => {
    return PUNE_PROJECTS.filter((p) => {
      const matchesSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.builder.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.micromarket.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        selectedLocation === 'All Locations' || p.micromarket === selectedLocation;

      const matchesPrice =
        priceRange.min === 0 && priceRange.max === 999
          ? true
          : p.minPrice <= priceRange.max && p.maxPrice >= priceRange.min;

      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((tag) => p.tags.includes(tag));

      return matchesSearch && matchesLocation && matchesPrice && matchesTags;
    });
  }, [searchQuery, selectedLocation, priceRange, selectedTags]);

  function toggleTag(tag: ProjectTag) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function clearFilters() {
    setSearchQuery('');
    setSelectedLocation('All Locations');
    setSelectedPriceRange(0);
    setSelectedTags([]);
  }

  const hasActiveFilters =
    searchQuery || selectedLocation !== 'All Locations' || selectedPriceRange !== 0 || selectedTags.length > 0;

  return (
    <>
      <div className="flex pt-16 min-h-screen">
        {/* Main Content */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Page Header */}
          <div className="bg-[#0F1A2E] border-b border-[#2D3F55] px-4 sm:px-6 lg:px-8 py-5">
            <div className="max-w-screen-2xl mx-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="section-label mb-1">Pune Real Estate</div>
                  <h1 className="text-white font-bold text-2xl">Project Listings</h1>
                  <p className="text-slate-400 text-sm mt-1">
                    {filteredProjects.length} of {PUNE_PROJECTS.length} verified projects · All MahaRERA registered
                  </p>
                </div>
                <button
                  onClick={() => setMobileChatOpen(true)}
                  className="lg:hidden flex items-center gap-2 btn-primary text-sm flex-shrink-0"
                >
                  <MessageSquare size={15} />
                  AI Chat
                </button>
              </div>

              {/* Search + Filters */}
              <div className="mt-4 space-y-3">
                {/* Search Bar */}
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by project name, location, or builder..."
                      className="input-base w-full pl-9 py-2.5"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-150 ${
                      showFilters || hasActiveFilters
                        ? 'bg-amber-500/15 border-amber-500/30 text-amber-400' :'bg-[#243347] border-[#2D3F55] text-slate-400 hover:text-white hover:border-[#4A6080]'
                    }`}
                  >
                    <SlidersHorizontal size={15} />
                    Filters
                    {hasActiveFilters && (
                      <span className="w-4 h-4 rounded-full bg-amber-500 text-slate-900 text-[10px] font-bold flex items-center justify-center">
                        {(selectedLocation !== 'All Locations' ? 1 : 0) + (selectedPriceRange !== 0 ? 1 : 0) + selectedTags.length}
                      </span>
                    )}
                  </button>
                </div>

                {/* Expanded Filters */}
                {showFilters && (
                  <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl p-4 space-y-4 animate-slide-up">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Location Filter */}
                      <div>
                        <label className="text-xs font-medium text-slate-400 mb-2 block">Location / Micro-market</label>
                        <div className="flex flex-wrap gap-2">
                          {LOCATIONS.map((loc) => (
                            <button
                              key={`loc-${loc}`}
                              onClick={() => setSelectedLocation(loc)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                                selectedLocation === loc
                                  ? 'bg-amber-500/20 border border-amber-500/40 text-amber-400' :'bg-[#243347] border border-[#2D3F55] text-slate-400 hover:text-white hover:border-[#4A6080]'
                              }`}
                            >
                              {loc}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price Range Filter */}
                      <div>
                        <label className="text-xs font-medium text-slate-400 mb-2 block">Price Range</label>
                        <div className="flex flex-wrap gap-2">
                          {PRICE_RANGES.map((range, idx) => (
                            <button
                              key={`price-${idx}`}
                              onClick={() => setSelectedPriceRange(idx)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                                selectedPriceRange === idx
                                  ? 'bg-amber-500/20 border border-amber-500/40 text-amber-400' :'bg-[#243347] border border-[#2D3F55] text-slate-400 hover:text-white hover:border-[#4A6080]'
                              }`}
                            >
                              {range.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tag Filters */}
                    <div>
                      <label className="text-xs font-medium text-slate-400 mb-2 block">Tags</label>
                      <div className="flex flex-wrap gap-2">
                        {TAG_FILTERS.map((tag) => (
                          <button
                            key={`tag-filter-${tag}`}
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                              selectedTags.includes(tag)
                                ? 'bg-amber-500/20 border border-amber-500/40 text-amber-400' :'bg-[#243347] border border-[#2D3F55] text-slate-400 hover:text-white hover:border-[#4A6080]'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {hasActiveFilters && (
                      <div className="flex justify-end pt-2 border-t border-[#2D3F55]">
                        <button onClick={clearFilters} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-400 transition-colors">
                          <X size={12} />
                          Clear all filters
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Active filter chips */}
                {hasActiveFilters && !showFilters && (
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-slate-500">Active:</span>
                    {selectedLocation !== 'All Locations' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 border border-amber-500/25 rounded-full text-xs text-amber-400">
                        <MapPin size={10} />
                        {selectedLocation}
                        <button onClick={() => setSelectedLocation('All Locations')} className="ml-0.5 hover:text-white"><X size={10} /></button>
                      </span>
                    )}
                    {selectedPriceRange !== 0 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 border border-amber-500/25 rounded-full text-xs text-amber-400">
                        {PRICE_RANGES[selectedPriceRange].label}
                        <button onClick={() => setSelectedPriceRange(0)} className="ml-0.5 hover:text-white"><X size={10} /></button>
                      </span>
                    )}
                    {selectedTags.map((tag) => (
                      <span key={`active-tag-${tag}`} className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 border border-amber-500/25 rounded-full text-xs text-amber-400">
                        {tag}
                        <button onClick={() => toggleTag(tag)} className="ml-0.5 hover:text-white"><X size={10} /></button>
                      </span>
                    ))}
                    <button onClick={clearFilters} className="text-xs text-slate-500 hover:text-rose-400 transition-colors">Clear all</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-screen-2xl mx-auto">
              {filteredProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#1E293B] border border-[#2D3F55] flex items-center justify-center mb-4">
                    <Building2 size={28} className="text-slate-600" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">No projects match your filters</h3>
                  <p className="text-slate-400 text-sm max-w-sm mb-5">
                    Try adjusting your location, price range, or tag filters to discover more Pune projects.
                  </p>
                  <button onClick={clearFilters} className="btn-primary">Clear All Filters</button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onViewDetails={setDetailProject}
                      onViewRera={setReraProject}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AI Chat Sidebar — desktop */}
        <div className="hidden lg:block w-80 xl:w-96 flex-shrink-0">
          <AiChatSidebar />
        </div>
      </div>

      {/* Mobile AI Chat */}
      <AiChatSidebar mobileOpen={mobileChatOpen} onMobileClose={() => setMobileChatOpen(false)} />

      {/* Modals */}
      {detailProject && (
        <ProjectDetailModal project={detailProject} onClose={() => setDetailProject(null)} />
      )}
      {reraProject && (
        <ReraModal project={reraProject} onClose={() => setReraProject(null)} />
      )}
    </>
  );
}

// Helper — used in active chip display
function MapPin({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
