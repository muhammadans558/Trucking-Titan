import React from 'react';
import { Logo } from './Logo';
import { Mail, ArrowUp } from 'lucide-react';
import { COMPANY_EMAIL } from '../data/truckingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Trucking Titan', href: '#why-trucking-titan' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070709] border-t border-neutral-800 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />

            <div className="text-xs font-bold font-heading uppercase text-red-500 tracking-wider">
              Truck Dispatch Services Across USA
            </div>

            <p className="text-sm text-neutral-300 font-heading tracking-wide uppercase italic">
              “We Find the Loads. You Haul the Miles.”
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Professional truck dispatching for carriers and owner-operators across the USA. We deal with Dry Van, Reefer, Flat Bed, Step Deck, Box Truck, Flat Bed Hot Shot, Power Only etc.
            </p>

            <div className="pt-2 flex items-center">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-red-400 transition-colors bg-neutral-900 border border-neutral-800 px-3.5 py-2 rounded-sm"
              >
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>{COMPANY_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-red-400 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Operational Notice */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white">
              Operational Disclosure
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Trucking Titan provides dispatch support services acting strictly on behalf of authorized motor carriers. Trucking Titan is not a property broker, freight forwarder, motor carrier, or 3PL. All freight bookings are subject to final review and binding confirmation by the carrier.
            </p>
            <div className="text-xs text-neutral-400 pt-1">
              Coverage: Nationwide 48 States · Direct Dispatch Desk
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div>
            © 2026 Trucking Titan LLC. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">
              Truck Dispatch Services Across USA
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
