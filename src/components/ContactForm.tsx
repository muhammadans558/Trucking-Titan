import React from 'react';
import { Phone, Mail, Clock, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_TEL, COMPANY_EMAIL } from '../data/truckingData';

interface ContactFormProps {
  onNavigateToOnboarding?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onNavigateToOnboarding }) => {
  return (
    <section id="contact" className="py-20 bg-[#0c0c10] border-b border-neutral-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-500/25 rounded-sm mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-red-500">
              Direct Dispatch Communications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-white tracking-tight">
            CONNECT WITH <span className="text-red-600">TRUCKING TITAN</span>
          </h2>
          <p className="mt-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
            Have questions about our dispatch services or need immediate carrier assistance? Reach our dispatch office directly.
          </p>
        </div>

        {/* Dispatch Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Direct Phone */}
          <div className="bg-neutral-900/90 border border-neutral-800 hover:border-red-500/50 p-6 rounded-2xl transition-all">
            <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-xl flex items-center justify-center mb-4 text-red-500">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
              Direct Dispatch Desk
            </span>
            <a
              href={COMPANY_PHONE_TEL}
              className="text-xl font-bold text-white hover:text-red-500 transition-colors block mb-2"
            >
              {COMPANY_PHONE}
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Direct line for active drivers, owner-operators, and carrier partners across the USA.
            </p>
          </div>

          {/* Card 2: Email Support */}
          <div className="bg-neutral-900/90 border border-neutral-800 hover:border-red-500/50 p-6 rounded-2xl transition-all">
            <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-xl flex items-center justify-center mb-4 text-red-500">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
              Official Carrier Email
            </span>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="text-base font-bold text-white hover:text-red-500 transition-colors block mb-2 break-all"
            >
              {COMPANY_EMAIL}
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Send rate confirmations, carrier packets, and dispatch inquiries.
            </p>
          </div>

          {/* Card 3: Operating Scope */}
          <div className="bg-neutral-900/90 border border-neutral-800 hover:border-red-500/50 p-6 rounded-2xl transition-all">
            <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-xl flex items-center justify-center mb-4 text-red-500">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
              Coverage & Availability
            </span>
            <div className="text-base font-bold text-white mb-2">
              48 Continental US States
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Full nationwide dispatch coordination and load matching support.
            </p>
          </div>
        </div>

        {/* Onboarding Callout Panel navigating to the ONE Carrier Onboarding Form */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Official Carrier Setup</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Haul with Trucking Titan?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Complete our quick Carrier Onboarding form to submit your fleet information, MC/DOT numbers, equipment, and preferred lanes.
            </p>
          </div>

          {onNavigateToOnboarding && (
            <button
              type="button"
              onClick={onNavigateToOnboarding}
              className="shrink-0 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3.5 px-7 rounded-xl transition-all flex items-center gap-2.5 uppercase tracking-wider text-xs shadow-lg shadow-red-950/40 cursor-pointer"
            >
              <span>Go to Carrier Onboarding Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
