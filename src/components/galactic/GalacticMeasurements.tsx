import React from 'react';

interface GalacticMeasurementsProps {
  virtualScreenSize: { width: number; height: number };
  className?: string;
}

const GalacticMeasurements: React.FC<GalacticMeasurementsProps> = ({
  virtualScreenSize,
  className = '',
}) => {
  const virtualWidth = virtualScreenSize.width;
  const virtualHeight = virtualScreenSize.height;

  // Generate measurement marks (every 100px)
  const getMarks = (size: number, isVertical: boolean) => {
    const marks = [];
    const step = 100;
    const count = Math.floor(size / step);

    for (let i = 0; i <= count; i++) {
      const position = i * step;
      marks.push(
        <div
          key={i}
          className={`absolute text-[10px] font-mono text-slate-400 dark:text-slate-500 ${isVertical ? 'top-10' : 'left-0'}`}
          style={
            isVertical
              ? {
                top: `${position}px`,
                transform: 'translateY(-50%)',
              }
              : {
                left: `${position}px`,
                transform: 'translateX(-50%)',
              }
          }
        >
          {i * step}
        </div>
      );
    }
    return marks;
  };

  return (
    <>
      {/* Top measurements */}
      <div
        className={`fixed top-10 left-0 right-0 h-6 backdrop-blur-lg pointer-events-none z-40 ${className}`}
      >
        {getMarks(virtualWidth, false)}
        <div className="absolute right-4 top-2 text-[10px] font-mono text-slate-400 dark:text-slate-500">
          W: {virtualWidth}px
        </div>
      </div>

      {/* Bottom measurements */}
      <div
        className={`fixed bottom-8 left-0 right-0 h-6 backdrop-blur-lg pointer-events-none z-40 ${className}`}
      >
        {getMarks(virtualWidth, false)}
      </div>

      {/* Left measurements */}
      <div
        className={`fixed top-10 bottom-8 left-1 w-6 backdrop-blur-lg pointer-events-none z-40 ${className}`}
      >
        {getMarks(virtualHeight, true)}
        <div
          className="absolute bottom-4 left-0 text-[10px] font-mono text-slate-400 dark:text-slate-500"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          H: {virtualHeight}px
        </div>
      </div>

      {/* Right measurements */}
      <div
        className={`fixed top-10 bottom-8 right-0 w-6 backdrop-blur-lg pointer-events-none z-40 ${className}`}
      >
        {getMarks(virtualHeight, true)}
      </div>
    </>
  );
};

export default GalacticMeasurements;

