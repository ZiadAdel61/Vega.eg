import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MethodologySection } from './components/MethodologySection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledProject, setPrefilledProject] = useState<string>('');

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const headerOffset = 70;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      const headerOffset = 70;
      const elementPosition = projectsElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToContact();
  };

  const handleConsultProject = (projectTitle: string) => {
    setPrefilledProject(projectTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-vega-light text-vega-dark flex flex-col font-sans selection:bg-vega-soft-blue selection:text-vega-purple">
      {/* Fixed Header Navbar */}
      <Navbar onOpenConsultation={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onScrollToProjects={scrollToProjects}
          onScrollToContact={scrollToContact}
        />

        {/* 2. About Company Section */}
        <AboutSection />

        {/* 3. Integrated Services Section */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 4. Project Delivery Methodology */}
        <MethodologySection />

        {/* 5. Projects Portfolio Section */}
        <ProjectsSection onConsultProject={handleConsultProject} />

        {/* 6. Why Choose Vega Section */}
        <WhyChooseUsSection />

        {/* 7. Contact & RFQ Section */}
        <ContactSection
          prefilledService={prefilledService}
          prefilledProject={prefilledProject}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
