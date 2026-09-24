import React from 'react';
import { ArrowRight, CheckCircle2, Lock, Phone } from 'lucide-react';
import { COMPANY_PHONE_TEL } from '../data/truckingData';

interface CarrierOnboardingProps {
  onStartCarrierSetup: () => void;
}

export const CarrierOnboarding: React.FC<CarrierOnboardingProps> = ({ onStartCarrierSetup }) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#0a0a0c] to-[#0e0e13] border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141419] border border-neutral-800 p-6 sm:p-10 lg:p-12 rounded-sm relative overflow-hidden">
          {/* Subtle Red Brand Accent Line on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-neutral-800" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2.5">
                <span className="w-5 h-0.5 bg-red-600 inline-block" />
                <span>Streamlined Carrier Onboarding</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
                Ready to Put Your <br />
                <span className="text-red-500">Next Load in Motion?</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                Carriers can provide their basic operational details—such as equipment type (Dry Van, Reefer, Flat Bed, Step Deck, Box Truck, Flat Bed Hot Shot, Power Only etc.), number of trucks, preferred running lanes, and scheduling requirements—so Trucking Titan can quickly review your profile and understand your dispatch needs.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="flex items-start gap-2.5 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>No complicated upfront paperwork or setup fees to begin carrier evaluation.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>You retain complete veto power on every load rate confirmation and lane.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Direct dispatcher communication by phone or email.</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onStartCarrierSetup}
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-heading text-base sm:text-lg font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm shadow-xl shadow-red-950/60 transition-all cursor-pointer"
                >
                  <span>Start Carrier Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-red-500 font-heading text-base font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Talk to a Dispatcher</span>
                </a>
              </div>
            </div>

            {/* Right Card: Secure Compliance Flow */}
            <div className="lg:col-span-5 bg-[#0d0d10] border border-neutral-800 p-5 sm:p-6 rounded-sm">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-neutral-200 pb-3 border-b border-neutral-800">
                <Lock className="w-4 h-4 text-red-500" />
                <span>Secure Carrier Verification Protocol</span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                For carrier data security and identity protection, we never request sensitive identity or banking documents through unverified forms.
              </p>

              <div className="mt-4 space-y-2.5">
                <div className="p-3 bg-neutral-900/80 border border-neutral-800/80 rounded-sm">
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">
                    Stage 1: Basic Information
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Equipment type, truck count, preferred lanes submitted via inquiry form.
                  </div>
                </div>

                <div className="p-3 bg-neutral-900/80 border border-neutral-800/80 rounded-sm">
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">
                    Stage 2: Operational Consultation
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Direct conversation with your dedicated dispatcher to clarify operational requirements.
                  </div>
                </div>

                <div className="p-3 bg-neutral-900/80 border border-neutral-800/80 rounded-sm">
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">
                    Stage 3: Formal Agreement & Packets
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Authority (MC/DOT), Certificate of Insurance (COI), and W-9 exchanged through direct verified channels.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
