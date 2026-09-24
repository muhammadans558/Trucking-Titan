import React from 'react';
import {
  User,
  Users,
  Box,
  Snowflake,
  ShieldAlert,
  Truck,
  Zap,
  RotateCw,
} from 'lucide-react';
import { EQUIPMENT_DETAILS } from '../data/truckingData';

export const WhoWeSupport: React.FC = () => {
  const operations = [
    {
      title: 'Owner-Operators',
      subtitle: 'Single Truck Operations',
      desc: 'Drivers with active MC authority who need reliable administrative back-office support so they can focus on safe driving and running profitable lanes.',
      icon: User,
    },
    {
      title: 'Small Fleets',
      subtitle: '2 to 10+ Units',
      desc: 'Growing fleet owners looking for consistent dispatch coordination across multiple trucks without the heavy payroll overhead of an in-house dispatch team.',
      icon: Users,
    },
  ];

  const equipmentCards = [
    {
      title: 'Dry Van',
      specs: '53ft Air-Ride Enclosed',
      desc: 'Standard 53ft trailers hauling palletized dry freight, consumer goods, retail merchandise, and general cargo across regional and long-haul lanes.',
      icon: Box,
    },
    {
      title: 'Reefer',
      specs: '53ft Temp-Controlled',
      desc: 'Refrigerated units moving fresh produce, frozen proteins, pharmaceuticals, and temperature-sensitive food shipments requiring steady temperature monitoring.',
      icon: Snowflake,
    },
    {
      title: 'Flat Bed',
      specs: '48ft / 53ft Open Deck',
      desc: 'Open deck flatbeds carrying building materials, lumber, steel coils, pipe, and industrial freight with required strapping, chains, and tarps.',
      icon: ShieldAlert,
    },
    {
      title: 'Step Deck',
      specs: 'Drop Deck & Ramps',
      desc: 'Single and double drop decks designed for over-height machinery, construction equipment, agricultural tractors, and specialized taller freight.',
      icon: Truck,
    },
    {
      title: 'Box Truck',
      specs: '26ft Straight Trucks',
      desc: 'Dock-height straight trucks equipped with liftgates and pallet jacks, serving regional corridors, expedited distribution, and metropolitan routes.',
      icon: Truck,
    },
    {
      title: 'Flat Bed Hot Shot',
      specs: 'Class 3-5 + 40ft Gooseneck',
      desc: 'Agile hot shot rigs hauling urgent commercial parts, oilfield freight, machinery, and time-critical deliveries with rapid turnaround.',
      icon: Zap,
    },
    {
      title: 'Power Only',
      specs: 'Tractor Only / Hook & Haul',
      desc: 'Semi tractors moving pre-loaded broker/shipper trailers, container chassis, intermodal relays, and regional drop-and-hook assignments.',
      icon: RotateCw,
    },
    {
      title: 'Specialized & More',
      specs: 'Expedited & Custom Lanes',
      desc: 'Expedited freight, partials, dedicated corridors, and specialized trailer configurations tailored to your motor carrier operating authority.',
      icon: Truck,
    },
  ];

  return (
    <section id="equipment" className="py-16 md:py-20 bg-[#0a0a0c] border-b border-neutral-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
            <span className="w-5 h-0.5 bg-red-600 inline-block" />
            <span>Equipment & Operation Profiles</span>
            <span className="w-5 h-0.5 bg-red-600 inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight">
            Equipment & Carriers We Support
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-300 font-normal">
            We deal with <strong className="text-white">Dry Van, Reefer, Flat Bed, Step Deck, Box Truck, Flat Bed Hot Shot, Power Only etc.</strong> tailored for carriers operating under their own active motor carrier authority.
          </p>
        </div>

        {/* Carrier Types (Owner-Operators & Fleets) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          {operations.map((op) => {
            const Icon = op.icon;
            return (
              <div
                key={op.title}
                className="bg-gradient-to-r from-[#121217] to-[#15151b] border-l-4 border-l-red-600 border-y border-r border-neutral-800 p-6 rounded-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-red-500 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide">
                    {op.title}
                  </h3>
                  <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                    {op.subtitle}
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {op.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Equipment Grid: Dry Van, Reefer, Flat Bed, Step Deck, Box Truck, Flat Bed Hot Shot, Power Only etc */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
          {equipmentCards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#121217] border border-neutral-800 hover:border-red-600/70 p-5 sm:p-6 rounded-sm transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-heading font-bold text-neutral-400 tracking-wider uppercase">
                      Active Dispatch
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                    {item.title}
                  </h3>
                  <div className="text-xs text-red-400 font-medium mb-2.5">
                    {item.specs}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] font-semibold uppercase text-neutral-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                  <span>Nationwide Freight Lanes</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
