import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { FAQ_DATA } from '../data/truckingData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('what-dispatcher-does');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#0d0d11] border-b border-neutral-800 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
            <span className="w-5 h-0.5 bg-red-600 inline-block" />
            <span>Common Carrier Questions</span>
            <span className="w-5 h-0.5 bg-red-600 inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base text-neutral-300">
            Straightforward answers regarding our dispatching services, carrier paperwork, and broker communications.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#121217] border border-neutral-800 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-red-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading font-bold uppercase text-white tracking-wide">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-sm bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-red-500 border-red-500/50' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Card */}
        <div className="mt-12 p-6 bg-neutral-950 border border-neutral-800 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-heading font-bold uppercase text-white">
              Still have a specific question about your operation?
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Reach out directly to our dispatch desk. We’re happy to clarify any operational details.
            </p>
          </div>
          <a
            href="mailto:contact.truckingtitan@gmail.com"
            className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm transition-colors duration-200 shrink-0"
          >
            <Mail className="w-3.5 h-3.5 text-red-400" />
            <span>Email Dispatcher</span>
          </a>
        </div>
      </div>
    </section>
  );
};
