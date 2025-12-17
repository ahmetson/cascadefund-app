import React from 'react';
import { usePageTransition } from '@/hooks/use-page-transition';
import PageTransitionOverlay from './PageTransitionOverlay';

interface PageTransitionProviderProps {
  direction?: 'ltr' | 'rtl' | 'ttb' | 'btt';
}

const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
  direction = 'ltr'
}) => {
  const { isTransitioning, targetUrl, showOverlay } = usePageTransition();

  // Determine direction based on current and target URL if not explicitly provided
  // For now, we'll use the provided direction or default to 'ltr'
  const transitionDirection = direction;

  return (
    <PageTransitionOverlay
      isVisible={showOverlay}
      targetUrl={targetUrl}
      direction={transitionDirection}
    />
  );
};

export default PageTransitionProvider;
