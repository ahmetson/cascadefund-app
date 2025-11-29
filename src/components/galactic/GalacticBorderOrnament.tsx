import React from 'react';

interface GalacticBorderOrnamentProps {
    position: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
}

const GalacticBorderOrnament: React.FC<GalacticBorderOrnamentProps> = ({
    position,
    className = '',
}) => {
    // Enhanced Turkmen carpet-inspired geometric patterns with glassy effects
    const renderPattern = () => {
        const patternId = `turkmen-pattern-${position}`;
        const glowId = `glow-${position}`;
        const gradientId = `glass-gradient-${position}`;

        return (
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Glow filter for futuristic effect */}
                    <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Gradient for glass effect */}
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" stopOpacity="1" />
                        <stop offset="50%" stopColor="rgba(139, 92, 246, 0.1)" stopOpacity="1" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.15)" stopOpacity="1" />
                    </linearGradient>

                    <pattern
                        id={patternId}
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Enhanced geometric shapes inspired by Turkmen carpet designs */}
                        {/* Outer diamond/octagon shapes (gul patterns) with glow */}
                        <polygon
                            points="15,2 20,7 20,12 15,17 10,12 10,7"
                            fill="none"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="0.6"
                            opacity="0.8"
                            filter={`url(#${glowId})`}
                        />
                        {/* Inner diamond */}
                        <polygon
                            points="15,5 18,8 18,11 15,14 12,11 12,8"
                            fill="none"
                            stroke="rgba(139, 92, 246, 0.6)"
                            strokeWidth="0.4"
                            opacity="0.6"
                        />
                        {/* Cross pattern with gradient */}
                        <line
                            x1="15" y1="0" x2="15" y2="30"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="0.4"
                            opacity="0.7"
                            filter={`url(#${glowId})`}
                        />
                        <line
                            x1="0" y1="15" x2="30" y2="15"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="0.4"
                            opacity="0.7"
                            filter={`url(#${glowId})`}
                        />
                        {/* Enhanced decorative elements with glow */}
                        <circle
                            cx="15" cy="15" r="1.8"
                            fill="rgba(59, 130, 246, 0.4)"
                            opacity="0.5"
                            filter={`url(#${glowId})`}
                        />
                        <circle cx="7.5" cy="7.5" r="1.2" fill="rgba(139, 92, 246, 0.3)" opacity="0.4" />
                        <circle cx="22.5" cy="7.5" r="1.2" fill="rgba(139, 92, 246, 0.3)" opacity="0.4" />
                        <circle cx="7.5" cy="22.5" r="1.2" fill="rgba(139, 92, 246, 0.3)" opacity="0.4" />
                        <circle cx="22.5" cy="22.5" r="1.2" fill="rgba(139, 92, 246, 0.3)" opacity="0.4" />
                        {/* Additional small accent dots */}
                        <circle cx="15" cy="7.5" r="0.6" fill="rgba(59, 130, 246, 0.5)" opacity="0.3" />
                        <circle cx="15" cy="22.5" r="0.6" fill="rgba(59, 130, 246, 0.5)" opacity="0.3" />
                        <circle cx="7.5" cy="15" r="0.6" fill="rgba(59, 130, 246, 0.5)" opacity="0.3" />
                        <circle cx="22.5" cy="15" r="0.6" fill="rgba(59, 130, 246, 0.5)" opacity="0.3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
        );
    };

    const getPositionClasses = () => {
        switch (position) {
            case 'top':
                return 'absolute top-10 left-0 right-0 h-[30px]';
            case 'bottom':
                return 'absolute bottom-10 left-0 right-0 h-[30px]';
            case 'left':
                return 'absolute top-10 bottom-10 left-0 w-[30px]';
            case 'right':
                return 'absolute top-10 bottom-10 right-0 w-[30px]';
        }
    };

    const getBorderClasses = () => {
        switch (position) {
            case 'top':
                return 'border-b border-blue-500/30 dark:border-purple-500/30';
            case 'bottom':
                return 'border-t border-blue-500/30 dark:border-purple-500/30';
            case 'left':
                return 'border-r border-blue-500/30 dark:border-purple-500/30';
            case 'right':
                return 'border-l border-blue-500/30 dark:border-purple-500/30';
        }
    };

    return (
        <div
            className={`${getPositionClasses()} ${getBorderClasses()} backdrop-blur-xl bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-purple-900/20 dark:from-slate-100/30 dark:via-blue-100/15 dark:to-purple-100/15 text-slate-300 dark:text-slate-400 pointer-events-none z-50 overflow-hidden ${className}`}
            style={{
                boxShadow: position === 'top'
                    ? '0 2px 8px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(139, 92, 246, 0.1)'
                    : position === 'bottom'
                        ? '0 -2px 8px rgba(59, 130, 246, 0.2), inset 0 -1px 0 rgba(139, 92, 246, 0.1)'
                        : position === 'left'
                            ? '2px 0 8px rgba(59, 130, 246, 0.2), inset 1px 0 0 rgba(139, 92, 246, 0.1)'
                            : '-2px 0 8px rgba(59, 130, 246, 0.2), inset -1px 0 0 rgba(139, 92, 246, 0.1)',
            }}
        >
            {/* Glass overlay effect */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
                }}
            />
            {/* Pattern layer */}
            <div className="relative z-10">
                {renderPattern()}
            </div>
            {/* Subtle shimmer effect */}
            <div
                className="absolute inset-0 opacity-20 shimmer-effect"
                style={{
                    background: position === 'top' || position === 'bottom'
                        ? 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)'
                        : 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
                }}
            />
            <style jsx>{`
        @keyframes shimmer {
          0% { 
            transform: ${position === 'top' || position === 'bottom' ? 'translateX(-100%)' : 'translateY(-100%)'}; 
            opacity: 0;
          }
          50% { 
            transform: ${position === 'top' || position === 'bottom' ? 'translateX(100%)' : 'translateY(100%)'}; 
            opacity: 0.3;
          }
          100% { 
            transform: ${position === 'top' || position === 'bottom' ? 'translateX(200%)' : 'translateY(200%)'}; 
            opacity: 0;
          }
        }
        .shimmer-effect {
          animation: shimmer 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default GalacticBorderOrnament;

