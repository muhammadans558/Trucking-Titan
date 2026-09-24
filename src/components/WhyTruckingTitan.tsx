import React from 'react';
import {
  Shield,
  MessageSquare,
  Search,
  TrendingUp,
  FileCheck,
  Headset,
} from 'lucide-react';

export const WhyTruckingTitan: React.FC = () => {
  const benefits = [
    {
      title: 'Carrier-Focused Service',
      description:
        'We represent you, the carrier. We work strictly in your operational interest—prioritizing your schedule, lane requirements, and equipment care.',
      icon: Shield,
    },
    {
      title: 'Professional Broker Communication',
      description:
        'Clear, articulate, and timely dialogue with freight brokers. We represent your authority with high industry standards on every phone call.',
      icon: MessageSquare,
    },
    {
      title: 'Load Search Support',
      description:
        'Continuous market scanning across multiple boards and sources to identify freight that minimizes unproductive deadhead and idle dwell time.',
      icon: Search,
    },
    {
      title: 'Rate Negotiation Support',
      description:
        'Firm, courteous discussions with brokers backed by current lane market conditions, fuel realities, and special cargo requirements.',
      icon: TrendingUp,
    },
    {
      title: 'Organized Paperwork',
      description:
        'Accurate handling of broker setup packets, COI requests, rate confirmations, and delivery documentation kept structured and accessible.',
      icon: FileCheck,
    },
    {
      title: 'Responsive Dispatch Support',
      description:
        'Direct line of communication with your dispatcher. When you have questions on the road or encounter facility issues, we answer promptly.',
      icon: Headset,
    },
  ];

  return (
    <section id="why-trucking-titan" className="py-16 md:py-20 bg-[#0a0a0c] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
            <span className="w-5 h-0.5 bg-red-600 inline-block" />
            <span>Built On Integrity & Practical Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight">
            Why Trucking Titan
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-300">
            A dedicated truck dispatching team focused on practical operational fundamentals, transparent communication, and genuine carrier respect.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-6 sm:p-7 bg-[#121217] border border-neutral-800 rounded-sm hover:border-red-600/70 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-wide mb-2.5">
                  {benefit.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="mt-10 p-5 sm:p-6 bg-neutral-950 border border-neutral-800 rounded-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs sm:text-sm text-neutral-300">
            <div>
              <span className="text-white font-bold uppercase tracking-wider block sm:inline mr-2">
                Our Transparent Standard:
              </span>
              No hidden fees, no forced loads, and no false promises. We operate strictly as an administrative extension of your trucking authority.
            </div>
            <div className="text-red-400 font-semibold uppercase tracking-wider shrink-0">
              Carrier Authority Protected
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
