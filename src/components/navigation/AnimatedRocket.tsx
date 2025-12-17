import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnimatedRocketProps {
  className?: string;
  size?: number;
}

const AnimatedRocket: React.FC<AnimatedRocketProps> = ({
  className = '',
  size = 24
}) => {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      initial={{ x: -20, opacity: 0 }}
      animate={{
        x: [0, 10, 0],
        opacity: 1,
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        x: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.3
        }
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Rocket size={size} className="text-blue-400 dark:text-blue-300" />
      </motion.div>
      {/* Trail effect */}
      <motion.div
        className="absolute w-8 h-1 bg-gradient-to-r from-blue-400/50 to-transparent blur-sm"
        style={{ left: -32 }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scaleX: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default AnimatedRocket;
