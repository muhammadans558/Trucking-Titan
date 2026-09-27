import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'none';
  duration?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 650,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If reduced motion is preferred, reveal immediately without animation
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    // If already in the viewport on mount, reveal immediately so user isn't delayed
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const isMobile = window.innerWidth < 640;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.05,
        rootMargin: isMobile ? '0px 0px -10px 0px' : '0px 0px -40px 0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible && delay ? `${delay}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      className={`${className} transition-[opacity,transform] will-change-[opacity,transform] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : direction === 'up'
          ? 'opacity-0 translate-y-4 sm:translate-y-6'
          : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

