import React from 'react';
import GalaxyZoomWrapper from '@/components/galactic/GalaxyZoomWrapper';

interface GalaxyLayoutBodyProps {
  projectName?: string;
  initialZoom?: number;
  minZoom?: number;
  maxZoom?: number;
  maxGalaxyContent?: number;
}

const GalaxyLayoutBody: React.FC<GalaxyLayoutBodyProps> = ({
  projectName,
  initialZoom,
  minZoom,
  maxZoom,
  maxGalaxyContent = 100,
}) => {
  return (
    <GalaxyZoomWrapper
      projectName={projectName}
      initialZoom={initialZoom}
      minZoom={minZoom}
      maxZoom={maxZoom}
      maxGalaxyContent={maxGalaxyContent}
    />
  );
};

export default GalaxyLayoutBody;

