'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe, Layout, Zap, Shield, ChevronRight, Search as SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { GoogleGenAI } from "@google/genai";

// NOTE: In production, move this API call to a server-side route
// to protect your API key from being exposed in client-side code.

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[90%] max-w-5xl rounded-full border border-purple-deep/5 ${isScrolled ? 'bg-white/40 backdrop-blur-2xl py-3 shadow-2xl' : 'bg-beige/20 backdrop-blur-md py-5'}`}>
      <div className="px-8 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <a href="#" className="text-xl font-display font-black text-purple-deep tracking-tighter">
            QUANTITATIVE<span className="text-purple-light">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-purple-deep/40">
            <a href="#services" className="hover:text-purple-deep transition-colors">Services</a>
            <a href="#work" className="hover:text-purple-deep transition-colors">Work</a>
            <a href="#about" className="hover:text-purple-deep transition-colors">About</a>
            <a href="#contact" className="hover:text-purple-deep transition-colors">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-7 py-2.5 rounded-full bg-purple-deep text-beige text-[10px] font-black uppercase tracking-widest hover:bg-purple-light transition-all shadow-2xl shadow-purple-deep/20">
            Get Started
          </button>
          <button 
            className="md:hidden p-2 text-purple-deep"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white/90 backdrop-blur-2xl rounded-3xl border border-purple-deep/5 p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-purple-deep/60">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-deep">Services</a>
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-deep">Work</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-deep">About</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-deep">Contact</a>
              <button className="w-full py-4 rounded-2xl bg-purple-deep text-beige font-bold text-xs uppercase tracking-widest">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-purple-light/10 text-purple-light text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-light animate-pulse" />
            Bespoke Digital Agency
          </div>
          <h1 className="text-7xl md:text-9xl font-display font-bold text-purple-deep leading-[0.85] mb-10 tracking-tighter">
            Crafting <br />
            <span className="text-purple-light italic font-light">Digital</span> <br />
            Legacy.
          </h1>
          <p className="text-lg text-ink/60 max-w-md mb-12 leading-relaxed font-medium">
            We specialize in building high-end digital products for brands that demand perfection. From aesthetic precision to technical mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 rounded-full bg-purple-deep text-beige font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-purple-light transition-all group shadow-2xl shadow-purple-deep/20">
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full border border-purple-deep/10 text-purple-deep font-bold text-sm uppercase tracking-widest hover:bg-purple-deep/5 transition-all">
              Our Portfolio
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-purple-accent/20 rounded-[3rem] rotate-3 scale-105 blur-3xl opacity-50" />
          <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(74,59,107,0.3)] border border-white/20">
            <Image 
              src="https://picsum.photos/seed/agency-hero/1200/1500"
              alt="Quantative Inc Premium Design"
              fill
              className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Premium Floating Badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-2xl p-6 rounded-[2rem] shadow-2xl border border-purple-deep/5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-deep text-beige flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-black">Global Impact</div>
                <div className="text-lg font-display font-bold text-purple-deep">50+ Countries</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-purple-deep/[0.02] -skew-x-12 translate-x-1/3 -z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-accent/[0.03] blur-[120px] -z-0" />
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Bespoke, scalable web applications built with the latest technologies for maximum speed and security."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Immersive user interfaces that guide users through seamless journeys while reflecting your brand&apos;s soul."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Defining your digital identity through deep market research and creative storytelling."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Digital Security",
      description: "Enterprise-grade protection for your digital assets, ensuring peace of mind for you and your users."
    }
  ];

  return (
    <section id="services" className="py-32 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-purple-light mb-4">Our Expertise</h2>
          <p className="text-4xl md:text-6xl font-display font-bold text-purple-deep leading-tight">
            We build the future of the <span className="italic">digital landscape</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-sm border border-purple-deep/5 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-deep text-beige flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-deep mb-4">{service.title}</h3>
              <p className="text-ink/60 leading-relaxed mb-8">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-purple-light font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    { title: "Luxe Estate", category: "Real Estate", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
    { title: "Aura Wellness", category: "Health & Tech", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" },
    { title: "Nexus AI", category: "SaaS Platform", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <section id="work" className="py-32 bg-beige border-t border-purple-deep/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-light mb-6">Selected Work</h2>
            <p className="text-5xl md:text-7xl font-display font-bold text-purple-deep leading-tight tracking-tighter">
              Crafting <span className="italic font-light">extraordinary</span> digital products.
            </p>
          </div>
          <button className="px-10 py-5 rounded-full border border-purple-deep/10 text-purple-deep font-bold text-xs uppercase tracking-widest hover:bg-purple-deep hover:text-beige transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 relative shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-purple-deep/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-20 h-20 rounded-full bg-white text-purple-deep flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-light mb-3">{project.category}</div>
              <h3 className="text-3xl font-display font-bold text-purple-deep group-hover:text-purple-light transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-purple-deep text-beige overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
              alt="Our Studio"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-accent rounded-full blur-[100px] opacity-20" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-accent mb-8">Our Philosophy</h2>
          <p className="text-5xl md:text-7xl font-display font-bold mb-10 leading-[0.9] tracking-tighter">
            We are <span className="italic font-light text-purple-accent">architects</span> of the digital realm.
          </p>
          <p className="text-xl text-beige/60 mb-12 leading-relaxed font-medium">
            Founded in 2024, Quantative Inc was born from a simple belief: that digital experiences should be as beautiful as they are functional. We combine data-driven strategy with world-class design to help brands stand out in a crowded digital world.
          </p>
          <div className="grid grid-cols-2 gap-12 mb-12">
            <div>
              <div className="text-5xl font-display font-bold text-purple-accent mb-3 tracking-tighter">150+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-beige/30">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-purple-accent mb-3 tracking-tighter">12</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-beige/30">Global Awards</div>
            </div>
          </div>
          <button className="px-10 py-5 rounded-full bg-purple-accent text-purple-deep font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-purple-accent/20">
            Meet The Visionaries
          </button>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>
    </section>
  );
};

const SearchSection = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      // Security note: This API key is exposed to the client.
      // For production, move this to a server API route.
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        setResult("Configuration error: API key not set.");
        setLoading(false);
        return;
      }
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Research the latest web design trends for 2026 related to: ${query}. Provide a concise, professional summary for a web design agency.`,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });
      setResult(response.text || "No insights found.");
    } catch (error) {
      console.error("Search error:", error);
      setResult("Unable to fetch latest trends at the moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-purple-deep text-beige">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Stay Ahead of the Curve</h2>
        <p className="text-beige/70 mb-12 max-w-xl mx-auto">
          Use our AI-powered trend engine to discover what&apos;s next in digital design.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Minimalist typography, 3D interactions..."
            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:bg-white/20 transition-all text-beige placeholder:text-beige/40"
          />
          <button 
            onClick={handleSearch}
            disabled={loading}
            className="px-8 py-4 rounded-full bg-purple-accent text-purple-deep font-bold hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : <><SearchIcon className="w-5 h-5" /> Analyze Trends</>}
          </button>
        </div>
        
        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-purple-accent mb-4">AI Insights</div>
              <div className="prose prose-invert max-w-none text-beige/80 leading-relaxed">
                {result}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-purple-light mb-4">Get in Touch</h2>
          <p className="text-5xl md:text-6xl font-display font-bold text-purple-deep mb-8 leading-tight">
            Let&apos;s build something <span className="italic">extraordinary</span>.
          </p>
          <p className="text-xl text-ink/60 mb-12 leading-relaxed">
            Ready to elevate your digital presence? Fill out the form and our strategy team will reach out within 24 hours.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-deep/5 flex items-center justify-center text-purple-deep">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-purple-deep">Global Studio</div>
                <div className="text-ink/60">London • New York • Tokyo</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-deep/5 flex items-center justify-center text-purple-deep">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-purple-deep">Secure Inquiry</div>
                <div className="text-ink/60">hello@quantative.inc</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-purple-deep/5">
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-purple-deep mb-2">Message Received</h3>
              <p className="text-ink/60">Our team is already reviewing your inquiry. Talk soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Full Name</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-beige/50 border border-purple-deep/5 focus:outline-none focus:border-purple-light focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Email Address</label>
                  <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-beige/50 border border-purple-deep/5 focus:outline-none focus:border-purple-light focus:bg-white transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Service Required</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-beige/50 border border-purple-deep/5 focus:outline-none focus:border-purple-light focus:bg-white transition-all appearance-none">
                  <option>Web Design & Development</option>
                  <option>Brand Identity</option>
                  <option>UI/UX Audit</option>
                  <option>Custom Application</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Project Brief</label>
                <textarea required rows={4} className="w-full px-6 py-4 rounded-2xl bg-beige/50 border border-purple-deep/5 focus:outline-none focus:border-purple-light focus:bg-white transition-all resize-none" placeholder="Tell us about your vision..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-5 rounded-2xl bg-purple-deep text-beige font-bold text-lg hover:bg-purple-light transition-all shadow-xl shadow-purple-deep/20 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-beige border-t border-purple-deep/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-display font-bold text-purple-deep tracking-tight">
          QUANTITATIVE<span className="text-purple-light">.</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-ink/40">
          <a href="#" className="hover:text-purple-deep transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-deep transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-purple-deep transition-colors">Cookies</a>
        </div>
        <div className="text-sm text-ink/40">
          © 2026 Quantitative Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function LandingPage() {
  return (
    <div className="relative bg-beige">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <SearchSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
