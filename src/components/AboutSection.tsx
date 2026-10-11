import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Lightbulb, 
  FileCheck2, 
  Users, 
  HardHat, 
  Target, 
  Compass, 
  Award,
  CheckCircle,
  Building2
} from 'lucide-react';
import { coreValues } from '../data/companyData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-vega-purple" />,
  ClockCheck: <Clock className="w-6 h-6 text-vega-purple" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-vega-purple" />,
  FileCheck2: <FileCheck2 className="w-6 h-6 text-vega-purple" />,
  Users: <Users className="w-6 h-6 text-vega-purple" />,
  HardHat: <HardHat className="w-6 h-6 text-vega-purple" />,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-vega-light relative overflow-hidden">
      {/* Subtle blueprint grid for technical engineering atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-vega-sand text-vega-purple text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Building2 className="w-4 h-4 text-vega-purple" />
            <span>عن شركة فيجا للمقاولات والهندسة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-vega-dark tracking-tight mb-4">
            هندسة متقدمة.. <span className="text-vega-purple">وإتقان لا يساوم</span>
          </h2>
          <p className="text-base sm:text-lg text-vega-dark/80 leading-relaxed">
            نجمع بين عمق الخبرة الهندسية الإنشائية والتقنيات الحديثة لتقديم صروح عمرانية تدوم لأجيال وتجسد أرقى معايير التطوير في المنطقة.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Corporate Overview, Vision & Mission (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Overview Card */}
            <div className="bg-white rounded-2xl p-7 border border-vega-sand shadow-sm hover:shadow-md hover:border-vega-purple/40 transition-all">
              <h3 className="text-xl font-black text-vega-dark mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-vega-purple rounded-full inline-block" />
                من نحن
              </h3>
              <p className="text-vega-dark/85 text-sm sm:text-base leading-relaxed mb-4">
                تأسست <strong className="text-vega-purple">شركة فيجا للمقاولات والهندسة والتشطيبات</strong> ككيان هندسي رائد يهدف إلى إعادة صياغة معايير البناء والتشييد. نعمل كشريك استراتيجي للمستثمرين والجهات الحكومية والخاصة لتنفيذ المشروعات الحيوية بدءاً من الدراسات الإنشائية وحتى التسليم النهائي بأعلى جاهزية تشغيلية.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-vega-sand/40 text-xs font-bold text-vega-dark">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>حلول تسليم مفتاح (Turnkey)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>إشراف فني وهندسي صارم</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-vega-purple to-[#351a59] text-white rounded-2xl p-7 shadow-lg border border-vega-sand/30 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-vega-lavender/20 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white/10 border border-vega-sand/30 text-vega-lavender">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-vega-lavender uppercase tracking-wider">Our Vision</span>
                  <h4 className="text-lg font-black text-white">رؤيتنا الاستراتيجية</h4>
                </div>
              </div>
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                الريادة الإقليمية في تطوير بيئة عمرانية مستدامة تجمع بين متانة الهيكل والجمال المعماري، لنكون الخيار الأول للعملاء الباحثين عن التميز الهندسي والموثوقية المطلقة.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-7 border border-vega-sand shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-vega-purple/10 border border-vega-sand/50 text-vega-purple">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-vega-deep-blue uppercase tracking-wider">Our Mission</span>
                  <h4 className="text-lg font-black text-vega-dark">رسالتنا المؤسسية</h4>
                </div>
              </div>
              <p className="text-vega-dark/80 text-sm sm:text-base leading-relaxed">
                تقديم حلول بناء وهندسة متكاملة تواكب متطلبات السوق بالابتكار والانضباط والشفافية، وتسخير أحدث ما توصلت إليه التقنيات الإنشائية لتحقيق قيمة استثمارية مضافة ومستدامة لعملائنا.
              </p>
            </div>

          </div>

          {/* Column 2: 6 Core Values Grid (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-vega-purple tracking-wider uppercase">Our Principles</span>
                <h3 className="text-2xl font-black text-vega-dark">قيمنا الجوهرية الست</h3>
              </div>
              <span className="text-xs font-semibold text-vega-dark bg-vega-soft-blue/30 px-3 py-1 rounded-full border border-vega-sand/50">
                ركائز العمل والالتزام
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((val, idx) => (
                <div
                  key={val.id}
                  className="bg-white rounded-2xl p-6 border border-vega-sand hover:border-vega-deep-blue hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-vega-light border border-vega-sand/70 group-hover:bg-vega-purple/10 group-hover:border-vega-purple/30 transition-colors">
                      {iconMap[val.iconName] || <Award className="w-6 h-6 text-vega-purple" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-vega-dark/40 group-hover:text-vega-purple transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-vega-dark mb-1 group-hover:text-vega-purple transition-colors">
                    {val.title}
                  </h4>
                  <span className="block text-xs font-medium text-vega-dark/60 mb-2 font-mono">
                    {val.titleEn}
                  </span>

                  <p className="text-xs sm:text-sm text-vega-dark/80 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications & Quality Banner */}
            <div className="mt-6 p-5 rounded-2xl bg-white border border-vega-sand shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-vega-purple flex-shrink-0" />
                <div>
                  <h5 className="text-sm font-bold text-vega-dark">شهادات الاعتماد ومطابقة المواصفات</h5>
                  <p className="text-xs text-vega-dark/70">نلتزم بنظام إدارة الجودة ISO 9001 ومعايير السلامة المهنية ISO 45001</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-vega-light rounded-lg border border-vega-sand text-xs font-bold text-vega-dark">ISO 9001</span>
                <span className="px-3 py-1 bg-vega-light rounded-lg border border-vega-sand text-xs font-bold text-vega-dark">SBC Code</span>
                <span className="px-3 py-1 bg-vega-light rounded-lg border border-vega-sand text-xs font-bold text-vega-dark">ISO 45001</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
