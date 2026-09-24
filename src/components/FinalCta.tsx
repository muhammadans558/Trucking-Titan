import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { COMPANY_PHONE_TEL, COMPANY_EMAIL } from '../data/truckingData';

interface FinalCtaProps {
  onGetStarted: () => void;
  onContactUs: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onGetStarted, onContactUs }) => {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0c] relative overflow-hidden border-b border-neutral-800">
      {/* Red Ambient Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-3">
          <span className="w-6 h-0.5 bg-red-600 inline-block" />
          <span>Truck Dispatch Services Across USA</span>
          <span className="w-6 h-0.5 bg-red-600 inline-block" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
          “Spend Less Time Searching. <br />
          <span className="text-red-500">Spend More Time Hauling.”</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Let Trucking Titan handle the dispatch-side workload while you focus on moving freight across the USA.
        </p>

        {/* Action Buttons: Get Started + Talk to a Dispatcher */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-heading text-base sm:text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded-sm shadow-xl shadow-red-950/60 transition-all cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={COMPANY_PHONE_TEL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-red-500 font-heading text-base font-semibold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all"
          >
            <Phone className="w-4 h-4 text-red-500" />
            <span>Talk to a Dispatcher</span>
          </a>
        </div>

        {/* Contact Strip */}
        <div className="mt-10 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-400">
          <div>
            Email: <a href={`mailto:${COMPANY_EMAIL}`} className="text-white hover:text-red-400 transition-colors">{COMPANY_EMAIL}</a>
          </div>
          <span className="text-neutral-700 hidden sm:inline">·</span>
          <div>
            Coverage: <span className="text-neutral-300">All 48 Continental States</span>
          </div>
        </div>
      </div>
    </section>
  );
};
