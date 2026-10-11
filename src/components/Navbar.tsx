import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpLeft } from 'lucide-react';
import { navLinks, companyContact } from '../data/companyData';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['hero', 'about', 'services', 'methodology', 'projects', 'why-us', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-vega-purple/95 backdrop-blur-md shadow-xl border-b border-vega-sand/20 py-3'
          : 'bg-gradient-to-b from-vega-purple/95 via-vega-purple/75 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on the Right (Natural in RTL) */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
            title="شركة فيجا للمقاولات والهندسة والتشطيبات"
          >
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-white/10 border border-vega-sand/30 group-hover:border-vega-lavender transition-colors">
              <img
                src="/Assets/Picsart_26-10-12_01-21-15-762.png"
                alt="Vega Structure Company Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('logo.png')) {
                    target.src = '/Assets/logo.png';
                  }
                }}
              />
            </div>
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-lg font-black text-white tracking-wide leading-none group-hover:text-vega-lavender transition-colors">
                VEGA STRUCTURE
              </span>
              <span className="text-xs font-medium text-vega-sand tracking-wider mt-1">
                شركة فيجا للمقاولات والهندسة
              </span>
            </div>
          </a>

          {/* Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-vega-deep-blue/60 shadow-sm'
                      : 'text-slate-100 hover:text-vega-lavender hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 right-3 left-3 h-0.5 bg-vega-lavender rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Left Action Buttons: Phone & Consultation CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${companyContact.phoneClean}`}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white/90 hover:text-vega-lavender bg-white/10 hover:bg-white/20 rounded-lg border border-vega-sand/30 transition-colors"
              title="اتصال هاتفي مباشر"
            >
              <Phone className="w-3.5 h-3.5 text-vega-lavender" />
              <span className="dir-ltr text-xs font-mono font-bold">{companyContact.phone}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                scrollToSection(e, '#contact');
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-vega-deep-blue hover:bg-vega-electric-blue transition-all duration-300 shadow-lg shadow-vega-deep-blue/30 hover:-translate-y-0.5 group"
            >
              <span>طلب استشارة هندسية</span>
              <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${companyContact.phoneClean}`}
              className="p-2 text-slate-100 bg-white/10 rounded-lg border border-vega-sand/30 hover:text-vega-lavender"
              aria-label="اتصال"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-100 bg-white/10 border border-vega-sand/30 hover:text-vega-lavender hover:bg-white/20 focus:outline-none"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-vega-lavender" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-vega-purple/98 backdrop-blur-xl border-b border-vega-sand/20 shadow-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="py-2.5 px-4 text-base font-bold text-slate-100 hover:text-vega-lavender hover:bg-white/10 rounded-lg transition-colors border-r-2 border-transparent hover:border-vega-lavender"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-vega-sand/20 flex flex-col gap-3 mt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  scrollToSection(e, '#contact');
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold text-white bg-vega-deep-blue hover:bg-vega-electric-blue shadow-md shadow-vega-deep-blue/20 flex items-center justify-center gap-2"
              >
                <span>طلب استشارة هندسية</span>
                <ArrowUpLeft className="w-4 h-4" />
              </a>

              <a
                href={companyContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-bold text-emerald-200 bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center gap-2 hover:bg-emerald-900/60"
              >
                <span>محادثة واتساب مباشرة</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
