import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_EMAIL } from '../data/truckingData';

interface HeaderProps {
  onGetStartedClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGetStartedClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Trucking Titan', href: '#why-trucking-titan' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/98 backdrop-blur-md border-b border-neutral-800 shadow-xl shadow-black/50 py-3'
          : 'bg-[#0a0a0c]/95 backdrop-blur-md border-b border-neutral-800/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with transparent background */}
          <a
            href="#home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded py-0.5"
            aria-label="Trucking Titan Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-150 relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-red-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Navigation Control: Get Started Button (No Phone Number) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onGetStartedClick}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold font-heading uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 shadow-md shadow-red-950/50 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Header: Hamburger Menu Icon Only (No Phone Number or Box) */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-neutral-800 bg-[#0e0e12] px-4 pt-3 pb-6 mt-2.5 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <div className="pb-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
              Truck Dispatch Services Across USA
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-medium text-neutral-200 hover:text-red-400 py-1.5 border-b border-neutral-800/60"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center justify-center gap-2 text-xs text-neutral-300 py-1"
              >
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>{COMPANY_EMAIL}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStartedClick();
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white text-center font-bold uppercase tracking-wider py-3 rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 cursor-pointer"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
