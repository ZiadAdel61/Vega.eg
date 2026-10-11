import React, { useState } from 'react';
import { 
  Building2, 
  Zap, 
  Compass, 
  Layers, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  X,
  PhoneCall,
  Wrench
} from 'lucide-react';
import { integratedServices, companyContact } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8 text-vega-lavender" />,
  Zap: <Zap className="w-8 h-8 text-vega-lavender" />,
  Compass: <Compass className="w-8 h-8 text-vega-lavender" />,
  Layers: <Layers className="w-8 h-8 text-vega-lavender" />,
  Sparkles: <Sparkles className="w-8 h-8 text-vega-lavender" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-vega-purple text-white relative overflow-hidden">
      {/* Background Decorative Tech Lines and Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-vega-deep-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-vega-lavender/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-vega-sand/30 text-vega-lavender text-xs sm:text-sm font-bold mb-4">
            <Wrench className="w-4 h-4" />
            <span>خدماتنا الهندسية المتكاملة | Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            منظومة خدمات متكاملة تضمن{' '}
            <span className="text-vega-lavender">جاهزية مطلقة</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
            نقدم باقة هندسية شاملة من الألف إلى الياء، تغطي كافة متطلبات المشاريع الحيوية من الإنشاءات الكبرى إلى أدق تفاصيل التشطيبات.
          </p>
        </div>

        {/* 3-Column / 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {integratedServices.map((service, index) => {
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-7 bg-white/10 hover:bg-white/15 border border-vega-sand/30 hover:border-vega-lavender/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-vega-purple/40 backdrop-blur-sm ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Glow accent top border */}
                <div className="absolute top-0 right-8 left-8 h-[2px] bg-gradient-to-r from-transparent via-vega-lavender/0 to-transparent group-hover:via-vega-lavender transition-all duration-500" />

                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-white/10 border border-vega-sand/30 group-hover:bg-vega-lavender group-hover:text-vega-purple text-vega-lavender transition-colors">
                      {serviceIconMap[service.iconName] || <Building2 className="w-8 h-8 text-vega-lavender" />}
                    </div>
                    {/* Active tag style: bg-vega-soft-blue */}
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-vega-soft-blue text-vega-purple shadow-sm">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white mb-1 group-hover:text-vega-lavender transition-colors">
                    {service.title}
                  </h3>
                  <span className="block text-xs font-mono font-medium text-vega-lavender/70 mb-4">
                    {service.titleEn}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-slate-100 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities Bullet points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-vega-soft-blue flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-xs text-vega-lavender/80 pt-1 font-medium">
                        + {service.features.length - 3} قدرات ومواصفات إضافية
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-vega-lavender hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>عرض التفاصيل والنطاق</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-vega-deep-blue hover:bg-vega-electric-blue text-white shadow-sm transition-all cursor-pointer"
                  >
                    طلب تسعير
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-vega-purple border border-vega-sand/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-right overflow-hidden text-white">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 left-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-vega-sand/30 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-white/10 border border-vega-sand/30 text-vega-lavender">
                {serviceIconMap[activeModalService.iconName]}
              </div>
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-vega-soft-blue text-vega-purple uppercase tracking-wider inline-block mb-1">
                  {activeModalService.badge}
                </span>
                <h3 className="text-2xl font-black text-white">{activeModalService.title}</h3>
                <span className="text-xs text-vega-lavender font-mono">{activeModalService.titleEn}</span>
              </div>
            </div>

            <p className="text-slate-100 text-sm leading-relaxed mb-6">
              {activeModalService.description}
            </p>

            <h4 className="text-sm font-bold text-white mb-3">نطاق العمل والمواصفات الفنية المشمولة:</h4>
            <div className="space-y-2.5 mb-8 bg-white/5 p-4 rounded-xl border border-white/10">
              {activeModalService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-vega-soft-blue flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <a
                href={`tel:${companyContact.phoneClean}`}
                className="flex items-center gap-2 text-xs text-slate-200 hover:text-vega-lavender"
              >
                <PhoneCall className="w-4 h-4 text-vega-lavender" />
                <span>استفسار مباشر: {companyContact.phone}</span>
              </a>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/10 rounded-xl border border-vega-sand/30"
                >
                  إغلاق
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForQuote(title);
                  }}
                  className="px-5 py-2.5 text-sm font-bold text-white bg-vega-deep-blue hover:bg-vega-electric-blue rounded-xl shadow-lg shadow-vega-deep-blue/30 transition-all"
                >
                  طلب تسعير هذه الخدمة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
