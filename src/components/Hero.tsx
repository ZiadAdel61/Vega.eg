import React from 'react';
import { ArrowLeft, ArrowUpLeft, Shield, Sparkles, Building, CheckCircle2 } from 'lucide-react';
import { heroStats, companyContact } from '../data/companyData';

interface HeroProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects, onScrollToContact }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-vega-purple">
      {/* Background Hero Image with Brand Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Assets/WhatsApp Image 2026-10-11 at 19.40.41.jpeg"
          alt="Vega Architectural Skyline and Engineering Blueprints"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-90 contrast-105"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.endsWith('hero-bg.jpg')) {
              target.src = '/Assets/hero-bg.jpg';
            }
          }}
        />
        {/* Architectural Brand Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-vega-purple via-vega-purple/85 to-[#2c1547]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-vega-purple via-vega-purple/80 to-transparent" />
        
        {/* Subtle Engineering Grid Line Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      </div>

      {/* Decorative Blueprint Glow Accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-vega-deep-blue/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-vega-lavender/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-4xl text-right">
          
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-vega-lavender/40 backdrop-blur-md mb-6 badge-glow">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vega-lavender opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-vega-lavender" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              الهندسة الذكية والجودة المستدامة | Engineering the Future
            </span>
            <Sparkles className="w-3.5 h-3.5 text-vega-lavender" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.25] sm:leading-[1.2] tracking-tight mb-6">
            نبني المستقبل برؤية{' '}
            <span className="text-vega-lavender">هندسية ذكية</span>{' '}
            وجودة إنشائية{' '}
            <span className="relative inline-block text-white">
              مستدامة
              <svg className="absolute -bottom-2 right-0 w-full h-3 text-vega-lavender/60 fill-current" viewBox="0 0 200 12">
                <path d="M0,8 Q100,0 200,8 L200,12 Q100,4 0,12 Z" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed max-w-3xl mb-10">
            حلول هندسية متكاملة تشمل المقاولات العامة، الأعمال الإنشائية التخصصية، والتشطيبات الفاخرة (<span className="text-vega-lavender font-bold">Turnkey Fit-Out</span>) وفق أعلى المعايير والمواصفات الدولية.
          </p>

          {/* Dual Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14">
            {/* Primary Button */}
            <button
              type="button"
              onClick={onScrollToProjects}
              className="px-7 py-4 rounded-xl text-base font-bold text-white bg-vega-deep-blue hover:bg-vega-electric-blue transition-all duration-300 shadow-xl shadow-vega-deep-blue/35 hover:shadow-vega-electric-blue/45 hover:-translate-y-1 flex items-center gap-3 cursor-pointer group"
            >
              <span>استعراض مشروعاتنا</span>
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>

            {/* Secondary Button: Frosted Glass */}
            <button
              type="button"
              onClick={onScrollToContact}
              className="px-7 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-vega-sand/40 hover:border-vega-lavender backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 cursor-pointer group"
            >
              <span>تواصل معنا مباشرة</span>
              <ArrowUpLeft className="w-5 h-5 text-vega-lavender transition-transform group-hover:-translate-x-1" />
            </button>
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl border-t border-vega-sand/20 pt-6">
            <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-vega-soft-blue flex-shrink-0" />
              <span>مطابقة الكود السعودي (SBC)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-semibold">
              <Shield className="w-4 h-4 text-vega-soft-blue flex-shrink-0" />
              <span>ضمان شامل وجودة معتمدة</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-semibold col-span-2 sm:col-span-1">
              <Building className="w-4 h-4 text-vega-soft-blue flex-shrink-0" />
              <span>تسليم مفتاح متكامل</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Floating Stats Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="bg-white/95 backdrop-blur-md border border-vega-sand rounded-2xl p-4 sm:p-6 shadow-2xl shadow-vega-purple/20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-vega-sand/50">
          {heroStats.map((stat, idx) => (
            <div key={idx} className={`pt-3 lg:pt-0 ${idx % 2 === 0 ? '' : 'sm:text-right'}`}>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-4xl font-black text-vega-purple font-mono tracking-tight">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm font-bold text-vega-dark mt-1">{stat.label}</p>
              <p className="text-xs text-vega-dark/70 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
