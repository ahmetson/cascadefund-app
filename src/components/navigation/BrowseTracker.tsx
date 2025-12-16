import React, { useEffect } from 'react';
import { pushUrl } from '@/client-side/browse-tracker';

/**
 * BrowseTracker - Tracks page visits and maintains navigation stack
 * This component runs on every page and pushes the current URL to the stack
 */
const BrowseTracker: React.FC = () => {
  useEffect(() => {
    // Get current URL (pathname + search params)
    const currentUrl = window.location.pathname + window.location.search;
    
    // Push to stack (pushUrl handles duplicate prevention)
    pushUrl(currentUrl);
  }, []);

  // This component has no visual output
  return null;
};

export default BrowseTracker;

