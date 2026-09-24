import React from 'react';
import { ArrowRight, Truck, Search, PhoneCall, CheckCircle } from 'lucide-react';

interface HowItWorksProps {
  onStartProcess: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartProcess }) => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us About Your Truck',
      description: 'Share your equipment, preferred lanes, and dispatch requirements.',
      detail: 'Give us your trailer specs, max payload capacity, preferred home-time schedule, and lanes you like to run.',
      icon: Truck,
    },
    {
      num: '02',
      title: 'We Search for Loads',
      description: 'We look for freight matching your operation.',
      detail: 'Our dispatchers continuously monitor market opportunities, filtering out unprofitable deadhead and bad docks.',
      icon: Search,
    },
    {
      num: '03',
      title: 'We Communicate & Negotiate',
      description: 'We handle broker communication and negotiation support.',
      detail: 'We contact the listing broker, verify pickup/delivery specifics, negotiate competitive rates, and present options for your green light.',
      icon: PhoneCall,
    },
    {
      num: '04',
      title: 'You Haul. We Support.',
      description: 'We help keep the dispatch process organized while you focus on the road.',
      detail: 'We handle broker setup packets, rate confirmation review, and appointment tracking so you can focus strictly on safe driving.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-[#0d0d11] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
            <span className="w-5 h-0.5 bg-red-600 inline-block" />
            <span>Clear & Transparent Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight">
            How It Works
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            A straightforward four-step dispatch process designed to eliminate headaches and keep your truck moving efficiently.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#121217] border border-neutral-800 p-6 rounded-sm relative flex flex-col justify-between group hover:border-red-600/70 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-heading text-3xl font-bold text-red-600">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-neutral-300 group-hover:text-red-400 group-hover:border-red-500/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium text-neutral-200 mb-3">
                    {step.description}
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center text-xs text-red-500 font-semibold uppercase tracking-wider">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartProcess}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-heading text-base font-bold uppercase tracking-wider px-8 py-3.5 rounded-sm shadow-lg shadow-red-950/40 cursor-pointer transition-colors"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
