/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import CardList from './components/CardList';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white" id="app-root">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with stats counters */}
        <Hero />

        {/* CSCS Card Categories Showcase */}
        <CardList />

        {/* Why Choose Us Feature Bento */}
        <WhyChooseUs />

        {/* Interactive Application Process Timeline */}
        <Process />

        {/* Accordion FAQ Block */}
        <FAQ />

        {/* Final Interactive Call To Action Section */}
        <FinalCTA />
      </main>

      {/* Structured Footer Block */}
      <Footer />

      {/* Mobile-First Floating Action Buttons */}
      <FloatingCTA />
    </div>
  );
}

