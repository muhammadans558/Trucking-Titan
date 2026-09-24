import React from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import heroTruckImage from '../assets/images/hero_semi_truck_1790249655219.jpg';
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '../data/truckingData';

interface HeroProps {
  onGetStarted: () => void;
  onTalkToDispatcher: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onTalkToDispatcher }) => {
  const equipmentList = [
    'Dry Van',
    'Reefer',
    'Flatbed',
    'Step Deck',
    'Box Truck',
    'Flatbed Hotshot',
    'Power Only',
  ];

  const trustPoints = [
    'Load Finding',
    'Broker Negotiation',
    'Carrier Paperwork',
    'Dispatch Support',
  ];

  return (
    <section
      id="home"
      className="relative min-h-[86vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-neutral-800"
    >
      {/* Background Cinematic Class 8 Truck Image on American Highway */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTruckImage}
          alt="American heavy-duty Class 8 semi-truck on interstate highway"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtleZoom"
        />
        {/* High-contrast gradient overlays for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/90 to-[#0a0a0c]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/70" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-3xl">
          {/* Small Label (Eyebrow) */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-red-600/10 border border-red-500/25 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-red-500">
              Truck Dispatch Services Across USA
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading uppercase text-white leading-[1.08] tracking-tight">
            “We Find the Loads. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400">
              You Haul the Miles.”
            </span>
          </h1>

          {/* Short Description */}
          <p className="mt-5 text-base sm:text-lg text-neutral-200 font-normal leading-relaxed max-w-2xl">
            Professional truck dispatching for carriers and owner-operators across the USA. We help with load finding, broker communication, rate negotiation, paperwork, and dispatch support—so you can spend more time moving freight and less time managing it.
          </p>

          {/* Equipment Types: Clean, compact strip without bulky dark box */}
          <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm">
            <span className="font-heading font-bold text-red-500 uppercase tracking-wider shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              WE DISPATCH:
            </span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-neutral-200">
              {equipmentList.map((eq, idx) => (
                <React.Fragment key={eq}>
                  <span className="font-medium text-white hover:text-red-400 transition-colors">
                    {eq}
                  </span>
                  {idx < equipmentList.length - 1 && (
                    <span className="text-neutral-600 select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-heading text-base font-bold uppercase tracking-wider px-8 py-3.5 rounded-sm shadow-xl shadow-red-950/60 transition-all duration-200 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>

            {/* TALK TO A DISPATCHER BOX: Heading with secondary phone number directly underneath */}
            <a
              href={COMPANY_PHONE_TEL}
              className="group flex flex-col items-center sm:items-start justify-center px-6 py-2.5 bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-red-500 rounded-sm transition-all duration-200 shadow-md backdrop-blur-sm cursor-pointer"
              title="Call Trucking Titan Dispatch"
            >
              <div className="flex items-center gap-2 text-[18px] sm:text-[20px] font-heading font-bold uppercase tracking-wide text-white group-hover:text-red-400 transition-colors leading-tight">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>Talk to a Dispatcher</span>
              </div>
              <span className="text-[13px] sm:text-[14px] text-neutral-300 group-hover:text-white font-medium tracking-wider mt-0.5 whitespace-nowrap leading-normal">
                {COMPANY_PHONE}
              </span>
            </a>
          </div>

          {/* Four Compact Trust Points */}
          <div className="mt-10 pt-6 border-t border-neutral-800/80">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-neutral-300">
              {trustPoints.map((point, idx) => (
                <React.Fragment key={point}>
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{point}</span>
                  </span>
                  {idx < trustPoints.length - 1 && (
                    <span className="text-neutral-600 font-bold" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
