import React, { useState } from 'react';
import { Briefcase, MapPin, Eye, ArrowLeft, Layers, Sparkles } from 'lucide-react';
import { portfolioProjects } from '../data/companyData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  onConsultProject: (projectTitle: string) => void;
}

type CategoryFilter = 'all' | 'construction' | 'fitout' | 'mep';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onConsultProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'كافة المشروعات (الكل)' },
    { id: 'fitout', label: 'التشطيبات والديكور' },
    { id: 'construction', label: 'المقاولات والإنشاءات' },
    { id: 'mep', label: 'الأعمال الكهروميكانيكية' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-vega-light relative overflow-hidden">
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-vega-sand text-vega-purple text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Briefcase className="w-4 h-4 text-vega-purple" />
            <span>معرض المشروعات السابقة | Selected Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-vega-dark tracking-tight mb-4">
            سجل حافل من الصروح الهندسية{' '}
            <span className="text-vega-purple">والمشاريع الكبرى</span>
          </h2>
          <p className="text-base sm:text-lg text-vega-dark/80 leading-relaxed">
            نعتز بمشاركتنا في تنفيذ نخبة من المشاريع التجارية، الإدارية، السكنية والصناعية التي تبرز التزامنا الصارم بالجودة والدقة.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-vega-deep-blue hover:bg-vega-electric-blue text-white shadow-md shadow-vega-deep-blue/25 -translate-y-0.5'
                    : 'bg-white text-vega-dark border border-vega-sand hover:bg-vega-light hover:border-vega-deep-blue/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl border border-vega-sand overflow-hidden shadow-sm hover:shadow-xl hover:border-vega-deep-blue/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* Image & Badges Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge Top-Right (RTL) - active tag style */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-vega-soft-blue text-vega-purple shadow-md">
                    {project.categoryLabel}
                  </span>

                  {/* Year Tag Top-Left */}
                  <span className="absolute top-4 left-4 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-vega-purple/90 text-white backdrop-blur-md border border-vega-sand/30">
                    {project.year}
                  </span>

                  {/* Location & Area Tag Bottom */}
                  <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1.5 drop-shadow">
                      <MapPin className="w-3.5 h-3.5 text-vega-soft-blue" />
                      <span>{project.location}</span>
                    </span>
                    <span className="font-mono text-white bg-black/50 px-2 py-0.5 rounded border border-white/20">
                      {project.area}
                    </span>
                  </div>

                  {/* Quick View Button Hover Overlay */}
                  <div className="absolute inset-0 bg-vega-purple/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-vega-purple font-bold text-xs shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-vega-purple" />
                      <span>عرض تفاصيل المشروع</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-vega-dark mb-2 group-hover:text-vega-purple transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-vega-dark/70 mb-3">
                    الجهة: <span className="text-vega-dark font-bold">{project.client}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-vega-dark/80 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Quick Scope Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-vega-sand/40">
                    {project.scope.slice(0, 2).map((s, idx) => (
                      <span key={idx} className="text-[11px] font-medium bg-vega-light text-vega-dark px-2.5 py-1 rounded-md border border-vega-sand/50">
                        {s}
                      </span>
                    ))}
                    {project.scope.length > 2 && (
                      <span className="text-[11px] font-semibold text-vega-purple bg-vega-soft-blue/20 px-2 py-1 rounded-md border border-vega-sand/40">
                        +{project.scope.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-vega-deep-blue group-hover:text-vega-electric-blue transition-colors">
                  <span>استعراض النطاق الكامل</span>
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-vega-purple via-[#422270] to-[#2D164D] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-vega-sand/30">
          <div className="flex items-center gap-4 text-right">
            <div className="p-3.5 rounded-2xl bg-white/10 text-vega-lavender border border-vega-sand/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white">هل لديك مشروع قيد التخطيط أو الطرح؟</h4>
              <p className="text-xs sm:text-sm text-slate-100">نقدم دراسة فنية وععرض سعر تفصيلي لمتطلبات مشروعك وفق أعلى المعايير.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onConsultProject("مشروع جديد عام")}
            className="px-6 py-3 rounded-xl bg-vega-deep-blue hover:bg-vega-electric-blue text-white font-bold text-sm shadow-lg shadow-vega-deep-blue/30 transition-all whitespace-nowrap cursor-pointer"
          >
            طلب دراسة فنية وتسعير
          </button>
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultProject={onConsultProject}
      />
    </section>
  );
};
