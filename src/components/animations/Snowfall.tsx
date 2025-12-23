'use client';

import { useEffect, useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
  blur: number;
}

interface SnowfallProps {
  density?: 'light' | 'normal' | 'heavy';
  className?: string;
}

const Snowfall = memo(function Snowfall({ density = 'normal', className = '' }: SnowfallProps) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [isClient, setIsClient] = useState(false);

  const getSnowflakeCount = useCallback(() => {
    const baseCounts = { light: 25, normal: 40, heavy: 60 };
    return baseCounts[density];
  }, [density]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const count = getSnowflakeCount();
    const flakes: Snowflake[] = [];

    for (let i = 0; i < count; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 6 + 2, // 2-8px arası boyut
        duration: Math.random() * 8 + 8, // 8-16 saniye arası düşme süresi
        delay: Math.random() * 10, // 0-10 saniye arası gecikme
        opacity: Math.random() * 0.6 + 0.3, // 0.3-0.9 arası opaklık
        drift: Math.random() * 40 - 20, // -20 ile 20 arası yatay hareket
        blur: Math.random() > 0.7 ? 1 : 0, // %30 ihtimalle blur efekti
      });
    }

    setSnowflakes(flakes);
  }, [isClient, getSnowflakeCount]);

  if (!isClient) return null;

  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 9999 }}
      aria-hidden="true"
    >
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${flake.x}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            filter: flake.blur ? 'blur(1px)' : 'none',
            boxShadow: flake.size > 5 
              ? '0 0 8px rgba(255, 255, 255, 0.8), 0 0 15px rgba(200, 220, 255, 0.4)' 
              : '0 0 4px rgba(255, 255, 255, 0.6)',
          }}
          initial={{ 
            y: -20, 
            x: 0,
            rotate: 0,
          }}
          animate={{ 
            y: '110vh',
            x: [0, flake.drift, -flake.drift / 2, flake.drift / 2, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: {
              duration: flake.duration,
              repeat: Infinity,
              delay: flake.delay,
              ease: 'linear',
            },
            x: {
              duration: flake.duration / 2,
              repeat: Infinity,
              delay: flake.delay,
              ease: 'easeInOut',
              repeatType: 'mirror',
            },
            rotate: {
              duration: flake.duration * 1.5,
              repeat: Infinity,
              delay: flake.delay,
              ease: 'linear',
            },
          }}
        />
      ))}
      
      {/* Büyük ve parlak kar taneleri - daha yavaş ve görkemli */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`special-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 11}%`,
          }}
          initial={{ y: -50 }}
          animate={{ 
            y: '115vh',
            x: [0, 30, -30, 15, 0],
          }}
          transition={{
            y: {
              duration: 18 + i * 2,
              repeat: Infinity,
              delay: i * 3,
              ease: 'linear',
            },
            x: {
              duration: 6,
              repeat: Infinity,
              delay: i * 3,
              ease: 'easeInOut',
              repeatType: 'mirror',
            },
          }}
        >
          {/* Kar tanesi yıldız şekli */}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none"
            style={{ 
              filter: 'drop-shadow(0 0 8px rgba(200, 220, 255, 0.8)) drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))',
              opacity: 0.7,
            }}
          >
            <path 
              d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="3" fill="white" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
});

export default Snowfall;
