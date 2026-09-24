import React from 'react';
import { ShieldCheck, Target, ArrowUpRight } from 'lucide-react';
import { COMPANY_EMAIL } from '../data/truckingData';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0a0a0c] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
              <span className="w-5 h-0.5 bg-red-600 inline-block" />
              <span>Our Purpose & Operational Focus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
              Built to Support the <br />
              <span className="text-red-500">People Behind the Truck.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              At Trucking Titan, we understand the real demands of the road. Truck drivers and fleet owners are the backbone of American commerce, yet too much of their day is spent wrestling with load boards, waiting on hold with brokers, filling out endless packets, and managing administrative delays.
            </p>

            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Trucking Titan provides dedicated truck dispatching support for motor carriers and owner-operators across the USA. We handle the time-consuming administrative work—searching for suitable loads, negotiating with freight brokers, verifying rate confirmations, and coordinating schedule logistics—so that you can stay focused on driving safely and operating your truck.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#121217] border border-neutral-800 rounded-sm">
                <div className="font-heading text-base font-bold uppercase text-white mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-500" />
                  <span>Carrier Representation</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400">
                  We work directly for you, representing your motor carrier authority with utmost professionalism.
                </p>
              </div>

              <div className="p-4 bg-[#121217] border border-neutral-800 rounded-sm">
                <div className="font-heading text-base font-bold uppercase text-white mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span>Complete Transparency</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Every rate confirmation is delivered straight to you. You review the exact broker agreement with zero hidden markups.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Principles Card with Phone */}
          <div className="lg:col-span-5 bg-[#121217] border border-neutral-800 p-6 sm:p-8 rounded-sm relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

            <span className="text-xs font-heading font-bold uppercase tracking-wider text-red-500">
              Truck Dispatch Services Across USA
            </span>

            <h3 className="text-xl font-heading font-bold uppercase text-white tracking-wide mt-2 mb-3">
              Professional Dispatch Support You Can Count On
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              Trucking Titan operates as an authorized administrative dispatch agent working strictly on behalf of licensed motor carriers.
            </p>

            <div className="space-y-2.5 border-t border-neutral-800 pt-4 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" />
                <span>We do not broker freight or take custody of cargo.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" />
                <span>You retain full final booking authority on every single load.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" />
                <span>Direct broker payment sent straight to your factoring company or bank account.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" />
                <span>We deal with Dry Van, Reefer, Flat Bed, Step Deck, Box Truck, Flat Bed Hot Shot, Power Only etc.</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="font-heading font-bold uppercase text-white text-sm">
                  Trucking Titan LLC
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Direct Carrier Dispatch Coordination
                </div>
              </div>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-xs text-neutral-300 hover:text-red-400 font-semibold uppercase flex items-center gap-1 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-sm transition-colors"
              >
                <span>Email Team</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
