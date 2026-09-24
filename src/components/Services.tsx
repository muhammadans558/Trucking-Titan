import React from 'react';
import {
  Search,
  MessageSquare,
  CheckSquare,
  FileCheck2,
  Route,
  Headphones,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '../data/truckingData';

interface ServicesProps {
  onSelectServiceCta?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceCta }) => {
  const services = [
    {
      title: 'Load Finding',
      description:
        "Search for freight that matches the carrier's equipment, lanes, preferences, and availability.",
      icon: Search,
      deliverables: ['Custom lane matching', 'Deadhead minimization checks', 'Market board monitoring'],
    },
    {
      title: 'Broker Communication & Negotiation',
      description:
        'Communicate with brokers, review load details, and negotiate rates when appropriate.',
      icon: MessageSquare,
      deliverables: ['Direct phone inquiries', 'Detention & layover clause checks', 'Rate discussions'],
    },
    {
      title: 'Load Booking',
      description:
        'Assist with broker communication and booking suitable loads.',
      icon: CheckSquare,
      deliverables: ['Carrier approval verification', 'Hold confirmation', 'Locking in commitments'],
    },
    {
      title: 'Carrier Paperwork',
      description:
        'Help organize rate confirmations, broker setup paperwork, BOLs, and other dispatch-related documents.',
      icon: FileCheck2,
      deliverables: ['Broker packet completion', 'Certificate of Insurance (COI) requests', 'Rate con reviews'],
    },
    {
      title: 'Load & Route Coordination',
      description:
        'Keep pickup, delivery, timing, and load information organized.',
      icon: Route,
      deliverables: ['Appointment window confirmations', 'Facility address & contact details', 'Transit schedule notes'],
    },
    {
      title: 'Ongoing Dispatch Support',
      description:
        'Provide continued administrative and communication support while the carrier focuses on driving.',
      icon: Headphones,
      deliverables: ['Driver check-in assistance', 'Shipper/receiver updates', 'Problem resolution support'],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-[#0a0a0c] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
              <span className="w-5 h-0.5 bg-red-600 inline-block" />
              <span>Full-Scope Carrier Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight">
              Dispatch Support <br />
              <span className="text-red-500">Built Around Your Truck.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-neutral-300">
            Professional dispatch services tailored to your specific equipment and schedule. We work for you as your back-office partner, ensuring clear communication with freight brokers on every lane.
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#111115] border border-neutral-800/90 hover:border-red-600/70 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-heading font-bold text-neutral-400 tracking-wider">
                      SERVICE / 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold uppercase text-white tracking-wide mb-2.5 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                    Scope of Support:
                  </div>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((deliv) => (
                      <li key={deliv} className="text-xs sm:text-sm text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Action */}
        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-neutral-900/90 to-[#121217] border border-neutral-800 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-heading font-bold uppercase text-white tracking-wide">
              We Deal With Dry Van, Reefer, Flat Bed, Step Deck, Box Truck, Flat Bed Hot Shot, Power Only etc.
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              Have questions about your trailer specs or regional running preferences? Speak directly to our dispatch desk.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_PHONE_TEL}
              className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-700 text-white text-xs sm:text-sm font-bold uppercase px-4 py-2.5 rounded-sm hover:border-red-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{COMPANY_PHONE}</span>
            </a>
            <button
              onClick={onSelectServiceCta}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors duration-200 cursor-pointer"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
