import React from 'react';
import { Clock, Search, PhoneForwarded, FileText } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const valueItems = [
    {
      icon: Search,
      title: 'Finding Matching Freight',
      desc: 'Filtering load boards and direct industry networks to match your equipment specs, weight limits, and preferred lanes.',
    },
    {
      icon: PhoneForwarded,
      title: 'Broker Communication',
      desc: 'Handling inbound and outbound broker inquiries, load availability checks, and carrier check calls.',
    },
    {
      icon: Clock,
      title: 'Rate Negotiation',
      desc: 'Discussing rates based on current market dynamics, deadhead miles, and timing constraints.',
    },
    {
      icon: FileText,
      title: 'Paperwork & Packets',
      desc: 'Filling out broker setup packets, COI certificates, and reviewing rate confirmation terms.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#0d0d11] border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section Kicker */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2.5">
            <span className="w-5 h-0.5 bg-red-600 inline-block" />
            <span>Operational Efficiency</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
            Less Time Searching. <br />
            <span className="text-red-500">More Time Hauling.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            For owner-operators and small fleet owners, running a trucking business shouldn’t mean spending your off-hours trapped in phone calls and rate confirmations. Trucking Titan takes on the administrative load—finding suitable freight, communicating with brokers, evaluating loads, negotiating rates, organizing paperwork, and coordinating dispatches—so your wheels keep turning and your focus stays on the road.
          </p>
        </div>

        {/* 4 Distinct Efficiency Blocks */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#121217] border border-neutral-800 p-6 rounded-sm relative group hover:border-red-600/60 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-red-500 group-hover:text-red-400 group-hover:border-red-500/50 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-heading text-xs font-bold text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold uppercase text-white tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Bar */}
        <div className="mt-10 p-4 sm:p-5 bg-neutral-950/80 border-l-2 border-red-600 border-y border-r border-neutral-800/80 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-sm text-neutral-300">
            <span className="font-semibold text-white uppercase tracking-wider mr-2">Carrier Autonomy:</span>
            You always maintain 100% control over your truck. We never force loads or sign agreements without your prior approval.
          </div>
          <span className="text-xs font-medium text-red-400 uppercase tracking-wider shrink-0">
            Carrier-Driven Decisions
          </span>
        </div>
      </div>
    </section>
  );
};
