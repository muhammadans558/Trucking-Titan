import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
}) => {
  const iconDimensions = {
    sm: 'h-10 w-auto',
    md: 'h-13 w-auto',
    lg: 'h-18 w-auto',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.18em]',
    md: 'text-xl tracking-[0.2em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.22em]',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.3em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-Fidelity Transparent Red Semi Truck & Trailer Vector matching uploaded logo */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconDimensions[size]}`}>
        <svg
          viewBox="0 0 240 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto drop-shadow-[0_4px_12px_rgba(220,38,38,0.25)]"
        >
          {/* Speed Streaks behind trailer (Left side) */}
          <g opacity="0.85" stroke="#ef4444" strokeWidth="3" strokeLinecap="round">
            <line x1="12" y1="52" x2="48" y2="52" />
            <line x1="4" y1="64" x2="38" y2="64" stroke="#dc2626" strokeWidth="3.5" />
            <line x1="18" y1="76" x2="52" y2="76" stroke="#991b1b" strokeWidth="2.5" />
          </g>

          {/* Road / Ground Shadow */}
          <ellipse cx="120" cy="118" rx="100" ry="5.5" fill="#000000" fillOpacity="0.75" />

          {/* Trailer Body (White/Silver 3D perspective with ribbed panels) */}
          <path
            d="M50 36L126 31V96L52 92Z"
            fill="#e2e8f0"
            stroke="#0f172a"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Trailer corrugated ribs */}
          <path
            d="M50 42L126 37 M50 49L126 44 M50 56L126 51 M50 63L126 58 M50 70L126 65 M50 77L126 72 M50 84L126 79"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          {/* Trailer roof rim & bottom rail */}
          <path d="M50 36L126 31" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <path d="M52 92L126 96" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />

          {/* Trailer Undercarriage & Landing gear */}
          <rect x="74" y="92" width="6" height="12" fill="#09090b" rx="1" />
          <rect x="88" y="93" width="5" height="10" fill="#18181b" rx="1" />

          {/* Trailer Tandem Wheels */}
          <g>
            {/* Wheel 1 */}
            <circle cx="68" cy="98" r="10" fill="#09090b" stroke="#27272a" strokeWidth="2" />
            <circle cx="68" cy="98" r="5" fill="#e2e8f0" />
            <circle cx="68" cy="98" r="2" fill="#dc2626" />
            {/* Wheel 2 */}
            <circle cx="86" cy="98" r="10" fill="#09090b" stroke="#27272a" strokeWidth="2" />
            <circle cx="86" cy="98" r="5" fill="#e2e8f0" />
            <circle cx="86" cy="98" r="2" fill="#dc2626" />
            {/* Wheel 3 */}
            <circle cx="106" cy="99" r="10" fill="#09090b" stroke="#27272a" strokeWidth="2" />
            <circle cx="106" cy="99" r="5" fill="#e2e8f0" />
            <circle cx="106" cy="99" r="2" fill="#dc2626" />
          </g>

          {/* Semi Cab (Vibrant Red Heavy-Duty Sleeper) */}
          {/* Main Cab Silhouette */}
          <path
            d="M124 33C124 33 135 24 148 24C162 24 175 28 178 35L184 45C186 48 195 50 200 52C204 53 214 58 217 64C219 67 220 73 220 78V96C220 98 218 100 215 100H202C200 93 194 88 186 88C178 88 172 93 170 100H132C130 94 124 89 116 89C112 89 108 91 106 94V78L124 76V33Z"
            fill="#dc2626"
            stroke="#09090b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Roof Aero Fairing Highlight */}
          <path
            d="M136 28C145 27 165 29 174 34L170 41C160 37 145 35 133 36Z"
            fill="#ef4444"
          />

          {/* Windshield & Windows (Dark tint with glossy reflection) */}
          <path
            d="M148 44L173 45L180 57H146L148 44Z"
            fill="#0f172a"
            stroke="#020617"
            strokeWidth="1.5"
          />
          <path
            d="M182 46L201 55L198 62L182 58V46Z"
            fill="#1e293b"
            stroke="#020617"
            strokeWidth="1.5"
          />
          <path d="M152 47L170 48L166 54L150 53Z" fill="#38bdf8" fillOpacity="0.35" />

          {/* Chrome Front Grille (Iconic heavy-duty vertical bars) */}
          <path
            d="M205 60C205 60 215 62 216 68V86C216 88 214 89 211 89H203C200 89 198 87 198 85V64C198 61 202 60 205 60Z"
            fill="#09090b"
            stroke="#f8fafc"
            strokeWidth="2"
          />
          {/* Vertical Grille Louvers */}
          <line x1="202" y1="66" x2="202" y2="85" stroke="#f1f5f9" strokeWidth="1.5" />
          <line x1="206" y1="65" x2="206" y2="86" stroke="#f1f5f9" strokeWidth="1.5" />
          <line x1="210" y1="66" x2="210" y2="85" stroke="#f1f5f9" strokeWidth="1.5" />

          {/* Modern Headlight with Crisp White Beam Accent */}
          <path
            d="M203 76L214 78C216 78 217 80 217 82L204 82Z"
            fill="#ffffff"
            stroke="#09090b"
            strokeWidth="1"
          />

          {/* Aerodynamic Side Skirts & Fuel Tank Steps */}
          <path
            d="M136 86H166V98H136Z"
            fill="#b91c1c"
            stroke="#09090b"
            strokeWidth="1.5"
          />
          <line x1="140" y1="92" x2="162" y2="92" stroke="#fca5a5" strokeWidth="1.2" />

          {/* Front Steer Wheel */}
          <g>
            <circle cx="186" cy="101" r="12" fill="#09090b" stroke="#27272a" strokeWidth="2.5" />
            <circle cx="186" cy="101" r="6.5" fill="#e2e8f0" stroke="#09090b" strokeWidth="1" />
            <circle cx="186" cy="101" r="3" fill="#dc2626" />
          </g>

          {/* Rear Drive Tandems */}
          <g>
            <circle cx="148" cy="100" r="11" fill="#09090b" stroke="#27272a" strokeWidth="2.5" />
            <circle cx="148" cy="100" r="6" fill="#e2e8f0" />
            <circle cx="148" cy="100" r="2.5" fill="#dc2626" />
          </g>

          {/* Front Bumper with Chrome Accent */}
          <path
            d="M211 96H222C223.5 96 224.5 98 224 99.5L222 104H209L211 96Z"
            fill="#18181b"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Typography: TRUCKING / - TITAN LLC - exactly matching the logo design */}
      <div className="flex flex-col justify-center leading-none">
        {/* TRUCKING */}
        <span
          className={`font-heading font-extrabold uppercase text-white ${textSizes[size]}`}
          style={{ letterSpacing: '0.16em' }}
        >
          Trucking
        </span>

        {/* Horizontal Orange/Red Rules flanking TITAN LLC */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="h-[1.5px] w-3 sm:w-5 bg-gradient-to-r from-transparent to-red-500 rounded-full inline-block" />
          <span
            className={`font-heading font-bold uppercase text-red-500 tracking-[0.24em] ${subSizes[size]}`}
          >
            Titan LLC
          </span>
          <span className="h-[1.5px] w-3 sm:w-5 bg-gradient-to-l from-transparent to-red-500 rounded-full inline-block" />
        </div>

        {showTagline && (
          <span className="text-[11px] text-neutral-300 font-medium tracking-wide mt-1.5 uppercase">
            Truck Dispatch Services Across USA
          </span>
        )}
      </div>
    </div>
  );
};
