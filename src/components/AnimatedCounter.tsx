import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isVisible?: boolean;
}

function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  isVisible = true,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const startValue = 0;
    const increment = value / (duration / 16);
    let currentValue = startValue;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(currentValue));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value, duration, isVisible]);

  return (
    <div ref={counterRef} className="stat-counter text-gradient-gold text-5xl md:text-6xl font-bold">
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </div>
  );
}

export default AnimatedCounter;
