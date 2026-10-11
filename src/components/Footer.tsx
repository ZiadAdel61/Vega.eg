import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowUp, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { navLinks, integratedServices, companyContact } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-vega-purple text-white border-t border-vega-sand/20 relative overflow-hidden">
      {/* Decorative Blueprint Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-vega-deep-blue/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-vega-sand/20">
          
          {/* Brand Info & Logo (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-right">
            <div className="flex items-center gap-3 p-1.5 rounded-xl bg-white/10 border border-vega-sand/30 mb-4">
              <img
                src="/Assets/Picsart_26-10-12_01-21-15-762.png"
                alt="Vega Structure Company Logo"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('logo.png')) {
                    target.src = '/Assets/logo.png';
                  }
                }}
              />
            </div>
            
            <h4 className="text-xl font-black text-white tracking-wide mb-1">
              {companyContact.nameAr}
            </h4>
            <span className="text-xs font-mono text-vega-lavender mb-3">
              {companyContact.nameEn}
            </span>

            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed max-w-sm mb-6">
              حلول هندسية وإنشائية متكاملة تشمل المقاولات العامة، الأعمال الإنشائية التخصصية، الأنظمة الكهروميكانيكية، والتشطيبات الفاخرة وفق الكود السعودي والمواصفات العالمية.
            </p>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-vega-sand/30 text-[11px] text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-vega-lavender" />
                <span>مرخصة ومعتمدة رسمياً</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 text-right">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-r-2 border-vega-lavender pr-2.5">
              روابط سريعة
            </h5>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-xs sm:text-sm text-slate-200 hover:text-vega-lavender transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrated Services Links (3 cols) */}
          <div className="lg:col-span-3 text-right">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-r-2 border-vega-lavender pr-2.5">
              خدماتنا الرئيسية
            </h5>
            <ul className="space-y-2.5">
              {integratedServices.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, '#services')}
                    className="text-xs sm:text-sm text-slate-200 hover:text-vega-lavender transition-colors block line-clamp-1"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Info (3 cols) */}
          <div className="lg:col-span-3 text-right">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-r-2 border-vega-lavender pr-2.5">
              المقر والتواصل
            </h5>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-vega-lavender flex-shrink-0 mt-0.5" />
                <span>{companyContact.locationDetailed}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-vega-lavender flex-shrink-0" />
                <a href={`tel:${companyContact.phoneClean}`} className="font-mono text-white hover:text-vega-lavender" dir="ltr">
                  {companyContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-vega-lavender flex-shrink-0" />
                <a href={`mailto:${companyContact.emailGeneral}`} className="font-mono hover:text-vega-lavender">
                  {companyContact.emailGeneral}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-vega-lavender flex-shrink-0" />
                <a href={companyContact.websiteUrl} target="_blank" rel="noopener noreferrer" className="font-mono hover:text-vega-lavender">
                  {companyContact.website}
                </a>
              </li>
            </ul>

            <div className="pt-4 mt-4 border-t border-vega-sand/20 flex items-center gap-2">
              <a
                href={companyContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
                title="واتساب"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 border border-vega-sand/30 text-slate-200 hover:text-vega-lavender transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 border border-vega-sand/30 text-slate-200 hover:text-vega-lavender transition-colors"
                title="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 border border-vega-sand/30 text-slate-200 hover:text-vega-lavender transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Return to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} {companyContact.nameEn} (شركة فيجا للمقاولات والهندسة والتشطيبات) - جميع الحقوق محفوظة.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-vega-sand/30 transition-colors cursor-pointer"
            aria-label="الرجوع إلى أعلى الصفحة"
          >
            <span>العودة إلى الأعلى</span>
            <ArrowUp className="w-3.5 h-3.5 text-vega-lavender" />
          </button>
        </div>

      </div>
    </footer>
  );
};
