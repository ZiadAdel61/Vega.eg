import React from 'react';
import { Layers, Award, ShieldCheck, Leaf, CheckCircle2, TrendingUp, ThumbsUp } from 'lucide-react';
import { whyChooseVega } from '../data/companyData';

const diffIconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-7 h-7 text-vega-lavender" />,
  Award: <Award className="w-7 h-7 text-vega-lavender" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-vega-lavender" />,
  Leaf: <Leaf className="w-7 h-7 text-vega-lavender" />,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-vega-purple text-white relative overflow-hidden">
      {/* Tech grid & glow accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-vega-deep-blue/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-vega-sand/30 text-vega-lavender text-xs sm:text-sm font-bold mb-4">
            <ThumbsUp className="w-4 h-4" />
            <span>ميزتنا التنافسية | Corporate Differentiators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            لماذا تختار <span className="text-vega-lavender">فيجا</span> للإشراف والتنفيذ؟
          </h2>
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
            نضع ثقتكم في صميم أولوياتنا، ونوظف أعلى الكفاءات والمنهجيات الهندسية المعتمدة لنكون شركاء نجاحكم الحقيقيين في كل خطوة.
          </p>
        </div>

        {/* 4 Differentiator Counter Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseVega.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 rounded-2xl p-7 border border-vega-sand/30 hover:border-vega-lavender/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl hover:shadow-vega-purple/40 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-vega-sand/30 group-hover:bg-vega-lavender group-hover:text-vega-purple text-vega-lavender transition-colors">
                    {diffIconMap[item.iconName] || <CheckCircle2 className="w-7 h-7 text-vega-lavender" />}
                  </div>
                  <span className="text-3xl font-black font-mono text-vega-lavender/40 group-hover:text-vega-lavender transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white mb-3 group-hover:text-vega-lavender transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-2 text-xs font-semibold text-vega-sand">
                <CheckCircle2 className="w-3.5 h-3.5 text-vega-soft-blue" />
                <span>ضمان الالتزام والجودة</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/10 border border-vega-sand/30 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-2xl sm:text-3xl font-black text-vega-lavender font-mono">0%</span>
            <span className="text-xs sm:text-sm text-slate-100 font-semibold mt-1 block">تسامح في معايير السلامة المهنية</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-black text-vega-lavender font-mono">100%</span>
            <span className="text-xs sm:text-sm text-slate-100 font-semibold mt-1 block">اعتماد المخططات وفق الكود السعودي</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-black text-vega-lavender font-mono">24/7</span>
            <span className="text-xs sm:text-sm text-slate-100 font-semibold mt-1 block">متابعة هندسية دورية وإشراف ميداني</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-black text-vega-lavender font-mono">+10</span>
            <span className="text-xs sm:text-sm text-slate-100 font-semibold mt-1 block">سنوات ضمان إنشائي معتمد للمباني</span>
          </div>
        </div>

      </div>
    </section>
  );
};
