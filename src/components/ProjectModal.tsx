import React from 'react';
import { X, MapPin, Calendar, Maximize2, CheckCircle2, Building, PhoneCall } from 'lucide-react';
import { ProjectItem } from '../types';
import { companyContact } from '../data/companyData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onConsultProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onConsultProject }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-vega-purple border border-vega-sand/40 rounded-3xl shadow-2xl overflow-y-auto text-right text-white">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 left-5 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-vega-sand/30 transition-all hover:scale-105"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vega-purple via-transparent to-black/30" />
          
          {/* Badge & Category */}
          <div className="absolute bottom-4 right-6 left-6 flex flex-wrap items-center justify-between gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-vega-soft-blue text-vega-purple text-xs font-black shadow-lg">
              {project.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-vega-sand/30 text-xs font-medium text-slate-200">
              سنة الإنجاز: {project.year}
            </span>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Client */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-vega-sand">
              العميل / الجهة: <span className="text-white font-bold">{project.client}</span>
            </p>
          </div>

          {/* Quick Specs Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-white/10 border border-vega-sand/30 rounded-xl p-3.5 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-vega-lavender flex-shrink-0" />
              <div>
                <span className="block text-[11px] text-vega-sand">الموقع</span>
                <span className="text-xs sm:text-sm font-bold text-white">{project.location}</span>
              </div>
            </div>

            <div className="bg-white/10 border border-vega-sand/30 rounded-xl p-3.5 flex items-center gap-3">
              <Maximize2 className="w-5 h-5 text-vega-lavender flex-shrink-0" />
              <div>
                <span className="block text-[11px] text-vega-sand">المساحة الإجمالية</span>
                <span className="text-xs sm:text-sm font-bold text-white font-mono">{project.area}</span>
              </div>
            </div>

            <div className="bg-white/10 border border-vega-sand/30 rounded-xl p-3.5 flex items-center gap-3 col-span-2 sm:col-span-1">
              <Calendar className="w-5 h-5 text-vega-lavender flex-shrink-0" />
              <div>
                <span className="block text-[11px] text-vega-sand">تاريخ الإنجاز</span>
                <span className="text-xs sm:text-sm font-bold text-white font-mono">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Building className="w-4 h-4 text-vega-lavender" />
              <span>نبذة عن المشروع والتحديات الهندسية:</span>
            </h4>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed bg-white/5 p-4 rounded-xl border border-vega-sand/20">
              {project.description}
            </p>
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-base font-bold text-white mb-3">نطاق الأعمال المنفذة (Scope of Work):</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 bg-white/5 p-3 rounded-lg border border-vega-sand/20">
                  <CheckCircle2 className="w-4 h-4 text-vega-soft-blue flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-vega-sand/20 flex flex-wrap items-center justify-between gap-4">
            <a
              href={`tel:${companyContact.phoneClean}`}
              className="flex items-center gap-2 text-xs text-slate-200 hover:text-vega-lavender transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-vega-lavender" />
              <span>للاستفسار عن مشاريع مماثلة: {companyContact.phone}</span>
            </a>

            <div className="flex items-center gap-3 mr-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-sm font-semibold border border-vega-sand/30 transition-colors cursor-pointer"
              >
                إغلاق
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = project.title;
                  onClose();
                  onConsultProject(title);
                }}
                className="px-5 py-2.5 rounded-xl bg-vega-deep-blue hover:bg-vega-electric-blue text-white text-sm font-bold shadow-lg shadow-vega-deep-blue/30 transition-all cursor-pointer"
              >
                طلب استشارة لمشروع مماثل
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
