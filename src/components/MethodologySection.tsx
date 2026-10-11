import React, { useState } from 'react';
import { 
  GitCommit, 
  Search, 
  FileText, 
  CalendarRange, 
  Hammer, 
  CheckCircle, 
  Award,
  ArrowLeft,
  ChevronLeft
} from 'lucide-react';
import { methodologySteps } from '../data/companyData';

const stepIconMap: Record<string, React.ReactNode> = {
  SearchCheck: <Search className="w-5 h-5 text-vega-purple" />,
  FileSpreadsheet: <FileText className="w-5 h-5 text-vega-purple" />,
  Kanban: <CalendarRange className="w-5 h-5 text-vega-purple" />,
  Hammer: <Hammer className="w-5 h-5 text-vega-purple" />,
  CheckCircle2: <CheckCircle className="w-5 h-5 text-vega-purple" />,
  Award: <Award className="w-5 h-5 text-vega-purple" />,
};

export const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="methodology" className="py-24 bg-vega-light relative overflow-hidden">
      {/* Engineering blueprint grid */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-vega-sand text-vega-purple text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <GitCommit className="w-4 h-4 text-vega-purple" />
            <span>منهجية إدارة وتنفيذ المشروعات | Project Delivery Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-vega-dark tracking-tight mb-4">
            مسار هندسي منظم من الفكرة حتى{' '}
            <span className="text-vega-purple">التسليم النهائي</span>
          </h2>
          <p className="text-base sm:text-lg text-vega-dark/80 leading-relaxed">
            نعتمد بروتوكولاً هندسياً وإدارياً صارماً في 6 مراحل تضمن السيطرة الكاملة على التكلفة والجدول الزمني وجودة التنفيذ الميداني.
          </p>
        </div>

        {/* Step Selector Horizontal Bar (Desktop) */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-10 p-2 bg-white rounded-2xl border border-vega-sand shadow-sm">
          {methodologySteps.map((item, index) => {
            const isSelected = activeStep === index;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`py-3 px-3 rounded-xl text-right transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-vega-purple text-white shadow-md'
                    : 'bg-transparent text-vega-dark hover:bg-vega-light'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-vega-lavender' : 'bg-vega-light text-vega-dark border border-vega-sand/50'
                  }`}>
                    {item.step}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-vega-lavender animate-pulse" />}
                </div>
                <span className="text-xs font-bold truncate block">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card (Interactive Highlight) */}
        <div className="hidden lg:block mb-12 bg-gradient-to-br from-vega-purple via-[#422270] to-[#2D164D] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-vega-sand/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-vega-lavender/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8 text-right">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-black font-mono text-vega-lavender">
                  {methodologySteps[activeStep].step}
                </span>
                <span className="text-xs uppercase font-semibold text-vega-lavender/80 tracking-wider font-mono">
                  Phase / المرحلة الهندسية
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {methodologySteps[activeStep].title}
              </h3>
              <p className="text-sm font-mono text-vega-lavender/90 mb-4">
                {methodologySteps[activeStep].titleEn}
              </p>
              <p className="text-base text-slate-100 leading-relaxed max-w-3xl mb-6">
                {methodologySteps[activeStep].description}
              </p>
            </div>

            <div className="col-span-4 bg-white/10 border border-vega-sand/20 rounded-2xl p-6 backdrop-blur-md">
              <h4 className="text-xs font-bold text-vega-lavender uppercase tracking-wider mb-4 flex items-center gap-2">
                <span>المخرجات والوثائق المعتمدة (Deliverables)</span>
              </h4>
              <ul className="space-y-3">
                {methodologySteps[activeStep].deliverables.map((deliv, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100">
                    <ChevronLeft className="w-4 h-4 text-vega-soft-blue flex-shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 6-Step Grid Layout (Responsive Cards on Mobile & Tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodologySteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-vega-deep-blue shadow-md ring-2 ring-vega-deep-blue/20'
                    : 'bg-white border-vega-sand hover:border-vega-deep-blue/40 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-vega-purple">
                      {step.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-vega-light border border-vega-sand/70 text-vega-purple">
                      {stepIconMap[step.iconName] || <CheckCircle className="w-5 h-5 text-vega-purple" />}
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-vega-dark mb-1">
                    {step.title}
                  </h3>
                  <span className="block text-xs font-mono text-vega-dark/60 mb-3">
                    {step.titleEn}
                  </span>

                  <p className="text-xs sm:text-sm text-vega-dark/80 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-vega-sand/40">
                  <span className="text-[11px] font-bold text-vega-dark/70 block mb-2">أبرز مخرجات المرحلة:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.slice(0, 2).map((d, di) => (
                      <span key={di} className="text-[11px] font-semibold bg-vega-soft-blue/20 text-vega-purple px-2 py-0.5 rounded border border-vega-sand/40">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
