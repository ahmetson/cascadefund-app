import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Galaxy from '@/components/Galaxy';
import AnimatedRocket from './AnimatedRocket';

interface PageTransitionOverlayProps {
  isVisible: boolean;
  targetUrl: string;
  direction?: 'ltr' | 'rtl' | 'ttb' | 'btt';
}

const PageTransitionOverlay: React.FC<PageTransitionOverlayProps> = ({
  isVisible,
  targetUrl,
  direction = 'ltr'
}) => {
  // Get clip-path based on direction
  const getClipPath = (progress: number) => {
    switch (direction) {
      case 'ltr':
        return `inset(0 ${100 - progress * 100}% 0 0)`;
      case 'rtl':
        return `inset(0 0 0 ${100 - progress * 100}%)`;
      case 'ttb':
        return `inset(${100 - progress * 100}% 0 0 0)`;
      case 'btt':
        return `inset(0 0 ${100 - progress * 100}% 0)`;
      default:
        return `inset(0 ${100 - progress * 100}% 0 0)`;
    }
  };

  const veilVariants = {
    hidden: {
      clipPath: getClipPath(0),
      opacity: 0
    },
    visible: {
      clipPath: getClipPath(1),
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    exit: {
      clipPath: getClipPath(0),
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut" as const
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Veil layer with background transition - semi-transparent */}
          <motion.div
            className="absolute inset-0 bg-transparent dark:bg-transparent backdrop-blur-sm"
            variants={veilVariants}
          />

          {/* Galaxy background with maximum speed */}
          <div className="absolute inset-0 opacity-80">
            <Galaxy
              speed={10}
              starSpeed={2}
              rotationSpeed={0.5}
              autoCenterRepulsion={2}
              glowIntensity={0.8}
              twinkleIntensity={0.5}
              density={1.5}
              mouseInteraction={false}
              transparent={false}
            />
          </div>

          {/* Loading content */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={contentVariants}
          >
            <div className="text-center px-8">
              <motion.div
                className="text-4xl md:text-5xl font-bold text-white/90 dark:text-white/95 mb-4"
                style={{
                  filter: 'blur(0.5px)',
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)'
                }}
              >
                <span className="inline-flex items-center gap-3">
                  Travelling to
                  <span className="text-blue-400 dark:text-blue-300 font-mono">
                    {targetUrl}
                  </span>
                  <AnimatedRocket size={32} />
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransitionOverlay;
