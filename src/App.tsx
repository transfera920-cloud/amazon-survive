import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TableOfContents } from './components/TableOfContents.tsx';
import { Section01to03 } from './components/Section01to03.tsx';
import { Section04to06 } from './components/Section04to06.tsx';
import { Section07to10 } from './components/Section07to10.tsx';
import { CurriculumRelations } from './components/CurriculumRelations.tsx';
import { KeyTakeaways } from './components/KeyTakeaways.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('s1');

  useEffect(() => {
    const sectionIds = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#121619] text-[#e2e8f0] flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Top sticky navigation with progress bar */}
      <Navbar activeId={activeSection} />

      {/* Hero Section with H1, Subtitle, and Alpine Vector Visual */}
      <Hero />

      {/* Main Educational Article Container */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Table of Contents Section */}
        <TableOfContents activeId={activeSection} />

        {/* Sections 01 to 03 */}
        <Section01to03 />

        {/* Sections 04 to 06 */}
        <Section04to06 />

        {/* Sections 07 to 10 */}
        <Section07to10 />

        {/* Relationship with Other Chapters (Ch 9, 10, 11) */}
        <CurriculumRelations />

        {/* Key Takeaways & Comprehensive Response System Diagram (SVG 11) */}
        <KeyTakeaways />
      </main>

      {/* Compliant Educational Footer */}
      <Footer />
    </div>
  );
}
