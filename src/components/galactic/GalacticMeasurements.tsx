import React, { useState, useEffect } from 'react';

interface GalacticMeasurementsProps {
  zoom: number;
  className?: string;
}

const GalacticMeasurements: React.FC<GalacticMeasurementsProps> = ({
  zoom,
  className = '',
}) => {
  const [measurements, setMeasurements] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateMeasurements = () => {
      setMeasurements({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);
    return () => window.removeEventListener('resize', updateMeasurements);
  }, []);

  // Calculate scaled measurements based on zoom
  const scaledWidth = Math.round((measurements.width * zoom) / 100);
  const scaledHeight = Math.round((measurements.height * zoom) / 100);

  // Generate measurement marks (every 100px scaled)
  const getMarks = (size: number, isVertical: boolean) => {
    const marks = [];
    const step = 100;
    const scaledStep = Math.round((step * zoom) / 100);
    const count = Math.floor(size / scaledStep);

    for (let i = 0; i <= count; i++) {
      const position = i * scaledStep;
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
          {i * scaledStep}
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
        {getMarks(measurements.width, false)}
        <div className="absolute right-4 top-2 text-[10px] font-mono text-slate-400 dark:text-slate-500">
          W: {scaledWidth}px
        </div>
      </div>

      {/* Bottom measurements */}
      <div
        className={`fixed bottom-8 left-0 right-0 h-6 backdrop-blur-lg pointer-events-none z-40 ${className}`}
      >
        {getMarks(measurements.width, false)}
      </div>

      {/* Left measurements */}
      <div
        className={`fixed top-10 bottom-8 left-1 w-6 backdrop-blur-lg pointer-events-none z-40 ${className}`}
      >
        {getMarks(measurements.height, true)}
        <div
          className="absolute bottom-4 left-0 text-[10px] font-mono text-slate-400 dark:text-slate-500"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          H: {scaledHeight}px
        </div>
      </div>

      {/* Right measurements */}
      <div
        className={`fixed top-10 bottom-8 right-0 w-6 backdrop-blur-lg pointer-events-none z-40 ${className}`}
      >
        {getMarks(measurements.height, true)}
      </div>
    </>
  );
};

export default GalacticMeasurements;

