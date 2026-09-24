import React from 'react';
import { MapPin, Navigation, Shield, Compass } from 'lucide-react';
import highwayImage from '../assets/images/interstate_highway_1790249674664.jpg';

export const UsaCoverage: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0d0d11] border-b border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
              <span className="w-5 h-0.5 bg-red-600 inline-block" />
              <span>Nationwide Logistics Scope</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
              Dispatch Support <br />
              <span className="text-red-500">Across the USA.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Trucking Titan supports carriers and owner-operators operating throughout the United States. Whether you prefer running dedicated regional corridors, cross-country coast-to-coast long hauls, or triangular routes designed to bring you home on the weekends, we adapt our freight searching to match your preferred geographic lanes.
            </p>

            <div className="mt-8 space-y-4">
              <div className="p-4 bg-[#121217] border border-neutral-800 rounded-sm flex items-start gap-3.5">
                <Navigation className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-heading font-bold uppercase text-white">
                    Carrier-Selected Lane Preferences
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    You dictate where your truck runs. We search within your approved regions and avoid areas you prefer not to enter.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#121217] border border-neutral-800 rounded-sm flex items-start gap-3.5">
                <Compass className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-heading font-bold uppercase text-white">
                    Major Freight Corridors & Regional Routes
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Continuous monitoring across major interstate arteries and industrial shipping hubs to coordinate reliable reloads.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#121217] border border-neutral-800 rounded-sm flex items-start gap-3.5">
                <Shield className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-heading font-bold uppercase text-white">
                    48-State Continental Scope
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Supporting interstate and intrastate commerce in compliance with Federal Motor Carrier Safety Administration (FMCSA) operational guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column: Subtle USA Map & Freight Arteries */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#121217] border border-neutral-800 rounded-sm overflow-hidden p-6 sm:p-8">
              {/* Highway photo backdrop with dark gradient */}
              <div className="relative h-64 sm:h-80 w-full rounded-sm overflow-hidden border border-neutral-800/80 mb-6">
                <img
                  src={highwayImage}
                  alt="American Interstate Highway junction for freight transport"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/40 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-200">
                  <span className="font-heading uppercase font-bold tracking-wider bg-black/80 px-2.5 py-1 border border-neutral-700">
                    US Highway Freight Network
                  </span>
                  <span className="text-[11px] text-red-400 font-semibold tracking-wider uppercase">
                    All 48 States Covered
                  </span>
                </div>
              </div>

              {/* Graphical Freight Vector Schematic */}
              <div className="bg-neutral-950/90 border border-neutral-800/80 p-5 rounded-sm">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 border-b border-neutral-800 pb-2">
                  <span className="font-bold text-neutral-200 uppercase tracking-wider">
                    Dispatch Route Flexibility
                  </span>
                  <span className="text-red-500 font-mono text-[10px]">US FREIGHT GRID</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 bg-neutral-900/80 border border-neutral-800 rounded-sm">
                    <div className="text-[10px] text-neutral-400 uppercase">Long-Haul OTR</div>
                    <div className="text-white font-medium mt-0.5">Coast-to-Coast</div>
                  </div>
                  <div className="p-2.5 bg-neutral-900/80 border border-neutral-800 rounded-sm">
                    <div className="text-[10px] text-neutral-400 uppercase">Regional Circuits</div>
                    <div className="text-white font-medium mt-0.5">Midwest / South / East</div>
                  </div>
                  <div className="p-2.5 bg-neutral-900/80 border border-neutral-800 rounded-sm col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-neutral-400 uppercase">Custom Lanes</div>
                    <div className="text-white font-medium mt-0.5">Home-Daily / Weekly</div>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-neutral-400 leading-normal">
                  You tell us your turnaround requirements, and our dispatchers search according to your parameters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
