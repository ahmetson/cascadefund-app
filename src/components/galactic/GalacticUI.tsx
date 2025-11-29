import React, { useState } from 'react';
import GalacticBorderOrnament from './GalacticBorderOrnament';
import GalacticMeasurements from './GalacticMeasurements';
import GalaxyZoomControls from './GalaxyZoomControls';

const GalacticUI: React.FC = () => {
  const [zoom, setZoom] = useState(100);

  return (
    <>
      {/* Border Ornaments
      <GalacticBorderOrnament position="top" />
      <GalacticBorderOrnament position="bottom" />
      <GalacticBorderOrnament position="left" />
      <GalacticBorderOrnament position="right" /> */}

      {/* Coordinate Measurements */}
      <GalacticMeasurements zoom={zoom} />

      {/* Zoom Controls */}
      <GalaxyZoomControls
        initialZoom={zoom}
        onZoomChange={setZoom}
      />
    </>
  );
};

export default GalacticUI;

