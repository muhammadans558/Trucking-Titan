import React from 'react';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import { COMPARISON_POINTS } from '../data/truckingData';

export const PainPointsComparison: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0d0d11] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
            <span className="w-5 h-0.5 bg-red-600 inline-block" />
            <span>Direct Operational Contrast</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading uppercase text-white tracking-tight">
            Managing It Alone vs. <span className="text-red-500">Dispatch Support</span>
          </h2>

          <p className="mt-2 text-sm sm:text-base text-neutral-400">
            A direct comparison of daily carrier friction points versus structured dispatch coordination.
          </p>
        </div>

        {/* Compact Comparison Grid */}
        <div className="border border-neutral-800 bg-[#121217] rounded-sm overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#17171d] border-b border-neutral-800 text-xs font-heading font-bold uppercase tracking-wider">
            <div className="p-4 text-neutral-400 flex items-center gap-2 border-b md:border-b-0 md:border-r border-neutral-800">
              <XCircle className="w-4 h-4 text-neutral-400" />
              <span>Without Dedicated Dispatch Support</span>
            </div>
            <div className="p-4 text-red-400 flex items-center gap-2 bg-red-950/20">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              <span>With Trucking Titan Support</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-neutral-800/80">
            {COMPARISON_POINTS.map((row, index) => (
              <div
                key={row.tag}
                className="grid grid-cols-1 md:grid-cols-2 hover:bg-neutral-900/40 transition-colors"
              >
                {/* Traditional / Pain point */}
                <div className="p-4 sm:p-5 flex items-start gap-3 border-b md:border-b-0 md:border-r border-neutral-800/80">
                  <span className="text-neutral-400 font-mono text-xs mt-0.5">✕</span>
                  <div className="text-xs sm:text-sm text-neutral-400 font-normal">
                    {row.before}
                  </div>
                </div>

                {/* Trucking Titan Solution */}
                <div className="p-4 sm:p-5 flex items-start gap-3 bg-red-950/10">
                  <span className="text-red-500 font-bold text-xs mt-0.5">✓</span>
                  <div>
                    <div className="text-xs sm:text-sm text-white font-medium">
                      {row.after}
                    </div>
                    <div className="text-[11px] font-heading uppercase text-red-400 mt-1 font-semibold tracking-wider">
                      {row.tag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
