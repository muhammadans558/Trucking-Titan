import React, { useState } from 'react';
import {
  DollarSign,
  Compass,
  MapPin,
  Clock,
  Truck,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Info,
} from 'lucide-react';

export const LoadSelection: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'scenarioA' | 'scenarioB'>('scenarioA');

  const factors = [
    {
      name: 'Rate / RPM (Rate Per Mile)',
      desc: 'Gross pay evaluated against loaded miles and market density.',
      icon: DollarSign,
    },
    {
      name: 'Total Miles & Route Geometry',
      desc: 'Tolls, bridges, terrain, and verified highway routing.',
      icon: Compass,
    },
    {
      name: 'Deadhead Proximity',
      desc: 'Empty driving distance to shipper pickup location.',
      icon: MapPin,
    },
    {
      name: 'Pickup & Delivery Locations',
      desc: 'Facility appointment reputation, detention history, and dock efficiency.',
      icon: Clock,
    },
    {
      name: 'Equipment Match',
      desc: 'Trailer type, weight rating, securement gear, and temperature profiles.',
      icon: Truck,
    },
    {
      name: 'Timing & HOS Feasibility',
      desc: 'Realistic transit windows that protect driver legal hours of service.',
      icon: Clock,
    },
    {
      name: 'Destination Lane Suitability',
      desc: 'Outbound reload availability to prevent getting stranded in dead zones.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#0d0d11] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
            <span className="w-5 h-0.5 bg-red-600 inline-block" />
            <span>Thorough Load Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
            We Look Beyond <br />
            <span className="text-red-500">The Posted Rate.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            A high posted rate on a load board does not always represent the best operational choice for your truck. A freight run that sends you into a low-volume dead zone, requires excessive deadhead, or involves slow shipper docks can tie up your equipment and waste valuable hours of service. We evaluate every factor carefully as dispatch support—so you make informed hauling decisions.
          </p>
          <p className="mt-2 text-xs text-neutral-400 italic">
            * Note: Load evaluation is delivered as professional dispatch assistance; market rates fluctuate and outcomes depend on carrier equipment, seasonal factors, and carrier approval.
          </p>
        </div>

        {/* 2-Column: Factors Overview & Realistic Dispatch Inspection Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
          {/* Left Column: Factors List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              <span>Core Evaluation Criteria</span>
            </h3>

            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.name}
                  className="p-4 bg-[#121217] border border-neutral-800/90 rounded-sm flex items-start gap-3.5 hover:border-neutral-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-sm bg-neutral-900 border border-neutral-700 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold uppercase text-neutral-100 tracking-wide">
                      {f.name}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Realistic Dashboard Simulation (7 Cols) */}
          <div className="lg:col-span-7 bg-[#121216] border border-neutral-800 rounded-sm overflow-hidden shadow-2xl">
            {/* Dashboard Header Bar */}
            <div className="bg-[#17171d] px-5 py-3.5 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-200">
                  Dispatcher Load Assessment Console
                </span>
              </div>

              {/* Sample Indicator Banner - Required Anti-Deception Tag */}
              <span className="text-[11px] font-mono text-neutral-400 bg-neutral-900 px-2.5 py-0.5 border border-neutral-700/80">
                [ ILLUSTRATIVE EXAMPLE ONLY ]
              </span>
            </div>

            {/* Scenario Selector Tab Bar (Interactive Filter buttons allowed) */}
            <div className="p-4 bg-[#14141a] border-b border-neutral-800/80 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                Compare Evaluation Examples:
              </span>
              <div className="inline-flex rounded-sm bg-neutral-900 p-1 border border-neutral-800">
                <button
                  type="button"
                  onClick={() => setActiveScenario('scenarioA')}
                  className={`px-3 py-1 text-xs font-heading uppercase font-bold tracking-wider rounded-sm transition-colors cursor-pointer ${
                    activeScenario === 'scenarioA'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Example 1: High Rate vs Heavy Deadhead
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScenario('scenarioB')}
                  className={`px-3 py-1 text-xs font-heading uppercase font-bold tracking-wider rounded-sm transition-colors cursor-pointer ${
                    activeScenario === 'scenarioB'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Example 2: Balanced Lane with Strong Reload
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-5 sm:p-6 space-y-6">
              {activeScenario === 'scenarioA' ? (
                <>
                  {/* Load Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded-sm">
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400">Sample Gross</div>
                      <div className="text-lg font-bold font-heading text-white mt-1">$2,850</div>
                      <div className="text-[10px] text-neutral-400">Advertised gross rate</div>
                    </div>
                    <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded-sm">
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400">Loaded Miles</div>
                      <div className="text-lg font-bold font-heading text-white mt-1">940 mi</div>
                      <div className="text-[10px] text-neutral-400">$3.03 / loaded mi</div>
                    </div>
                    <div className="p-3 bg-neutral-900/90 border border-amber-900/40 rounded-sm bg-amber-950/10">
                      <div className="text-[10px] uppercase tracking-wider text-amber-400">Deadhead Distance</div>
                      <div className="text-lg font-bold font-heading text-amber-300 mt-1">165 mi</div>
                      <div className="text-[10px] text-amber-400">High empty transit</div>
                    </div>
                    <div className="p-3 bg-neutral-900/90 border border-red-900/40 rounded-sm bg-red-950/10">
                      <div className="text-[10px] uppercase tracking-wider text-red-400">True All-In RPM</div>
                      <div className="text-lg font-bold font-heading text-red-400 mt-1">$2.58</div>
                      <div className="text-[10px] text-neutral-400">Total 1,105 mi</div>
                    </div>
                  </div>

                  {/* Route & Lane Diagnostic */}
                  <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-sm space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-300 border-b border-neutral-800 pb-2">
                      <span className="font-semibold uppercase text-neutral-200">Lane Profile (Illustrative)</span>
                      <span className="text-neutral-400">Equipment: 53ft Dry Van · 42,000 lbs</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-neutral-400">Origin / Pickup</div>
                        <div className="text-white font-medium">Shipper Facility (Metro Hub)</div>
                        <div className="text-[11px] text-neutral-400">Appointment: Strict 08:00 AM window</div>
                      </div>
                      <div>
                        <div className="text-neutral-400">Destination / Delivery</div>
                        <div className="text-white font-medium">Receiving Warehouse (Remote Area)</div>
                        <div className="text-[11px] text-amber-400">Warning: Limited outbound reloads nearby</div>
                      </div>
                    </div>
                  </div>

                  {/* Dispatcher Assessment Note */}
                  <div className="p-4 bg-neutral-950 border-l-2 border-amber-500 rounded-sm text-xs text-neutral-300 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold uppercase text-amber-400 tracking-wider">
                      <AlertCircle className="w-4 h-4" />
                      <span>Dispatcher Analysis Insight:</span>
                    </div>
                    <p className="leading-relaxed">
                      While the initial $3.03 loaded rate appears attractive at first glance, the 165-mile empty deadhead drives the true rate down to $2.58 per all-in mile. Furthermore, the remote destination offers thin outbound freight, risking subsequent deadhead. Our recommendation: we check alternative reloads or request rate compensation before locking commitment.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Scenario B Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded-sm">
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400">Sample Gross</div>
                      <div className="text-lg font-bold font-heading text-white mt-1">$2,150</div>
                      <div className="text-[10px] text-neutral-400">Advertised gross rate</div>
                    </div>
                    <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded-sm">
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400">Loaded Miles</div>
                      <div className="text-lg font-bold font-heading text-white mt-1">710 mi</div>
                      <div className="text-[10px] text-neutral-400">$3.02 / loaded mi</div>
                    </div>
                    <div className="p-3 bg-neutral-900/90 border border-emerald-900/40 rounded-sm bg-emerald-950/10">
                      <div className="text-[10px] uppercase tracking-wider text-emerald-400">Deadhead Distance</div>
                      <div className="text-lg font-bold font-heading text-emerald-300 mt-1">22 mi</div>
                      <div className="text-[10px] text-emerald-400">Shipper right nearby</div>
                    </div>
                    <div className="p-3 bg-neutral-900/90 border border-emerald-900/40 rounded-sm bg-emerald-950/10">
                      <div className="text-[10px] uppercase tracking-wider text-emerald-400">True All-In RPM</div>
                      <div className="text-lg font-bold font-heading text-emerald-300 mt-1">$2.93</div>
                      <div className="text-[10px] text-neutral-400">Total 732 mi</div>
                    </div>
                  </div>

                  {/* Route & Lane Diagnostic */}
                  <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-sm space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-300 border-b border-neutral-800 pb-2">
                      <span className="font-semibold uppercase text-neutral-200">Lane Profile (Illustrative)</span>
                      <span className="text-neutral-400">Equipment: 53ft Reefer · 38,000 lbs (34°F)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-neutral-400">Origin / Pickup</div>
                        <div className="text-white font-medium">Food Cold Storage Facility</div>
                        <div className="text-[11px] text-emerald-400">Pre-cooled load, 24-hr open window</div>
                      </div>
                      <div>
                        <div className="text-neutral-400">Destination / Delivery</div>
                        <div className="text-white font-medium">Major Freight Hub Distribution</div>
                        <div className="text-[11px] text-emerald-400">High freight density market for next load</div>
                      </div>
                    </div>
                  </div>

                  {/* Dispatcher Assessment Note */}
                  <div className="p-4 bg-neutral-950 border-l-2 border-emerald-500 rounded-sm text-xs text-neutral-300 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold uppercase text-emerald-400 tracking-wider">
                      <CheckCircle className="w-4 h-4" />
                      <span>Dispatcher Analysis Insight:</span>
                    </div>
                    <p className="leading-relaxed">
                      Minimal deadhead preserves driver clock time, all-in RPM remains strong at $2.93, and the delivery terminal sits in a high-demand market with abundant outbound loads. This operational profile keeps the truck rolling with minimal uncompensated downtime.
                    </p>
                  </div>
                </>
              )}

              {/* Legal / Informational Disclaimer */}
              <div className="pt-2 text-[11px] text-neutral-400 flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>
                  The rates, mileages, and scenarios displayed above are simulated for illustrative demonstration of dispatch decision-making factors. Trucking Titan does not guarantee freight rates or load volume, as freight rates vary dynamically based on market availability, geography, carrier equipment, and broker spot markets.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
