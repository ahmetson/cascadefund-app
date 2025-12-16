import React, { useState, useEffect } from 'react'
import { peekParent, popUrl, getStackSize } from '@/client-side/browse-tracker'
import Tooltip from './Tooltip'
import { getIcon } from '../icon'
import { cn } from '@/lib/utils'

const BackButton: React.FC = () => {
  const [backUrl, setBackUrl] = useState<string | null>(null)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const loadBackButton = () => {
    // Only run on client side
    if (typeof window === 'undefined') return

    try {
      // Check if there's a URL in the stack
      const url = peekParent()
      setBackUrl(url)
      setIsDisabled(url === null)
    } catch (error) {
      console.error('Error in updateBackButton:', error)
    }
  };

  // Mount only once, delay 100ms, then call loadBackButton
  useEffect(() => {
    // Mark as mounted (client-side only)
    if (typeof window === 'undefined') {
      return
    }

    setIsMounted(true)

    // Delay 100ms then call loadBackButton
    const timeoutId = setTimeout(() => {
      loadBackButton()
    }, 100)

    // Listen for stack changes
    const handleStackChange = () => {
      loadBackButton()
    }

    // Listen for custom event
    window.addEventListener('browse-stack-changed', handleStackChange)

    // Also listen for storage events (in case localStorage is modified elsewhere)
    window.addEventListener('storage', handleStackChange)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('browse-stack-changed', handleStackChange)
      window.removeEventListener('storage', handleStackChange)
    }
  }, [])

  // During SSR or before mount, show disabled state
  if (!isMounted) {
    return (
      <div
        className={cn(
          "no-underline! flex items-center justify-between px-3 py-1 rounded-sm transition-colors",
          "text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-50"
        )}
      >
        <div className="flex items-center space-x-3">
          {getIcon({ iconType: 'lock' })}
          <span className="text-sm font-medium">Back</span>
        </div>
      </div>
    )
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled || !backUrl) {
      e.preventDefault()
      e.stopPropagation()
      return
    }

    // Prevent default navigation
    e.preventDefault()

    // Pop the URL from stack and navigate
    const parentUrl = peekParent();
    popUrl()
    if (parentUrl) {
      window.location.href = parentUrl
    }
  }

  // If disabled, show lock icon with tooltip
  if (isDisabled || !backUrl) {
    return (
      <Tooltip content="Page was entered directly. Back Button is part of the semantic navigation only">
        <div
          className={cn(
            "no-underline! flex items-center justify-between px-3 py-1 rounded-sm transition-colors",
            "text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-50"
          )}
        >
          <div className="flex items-center space-x-3">
            {getIcon({ iconType: 'lock' })}
            <span className="text-sm font-medium">Back</span>
          </div>
        </div>
      </Tooltip>
    )
  }

  // Normal back button - create a custom link that pops the stack on click
  return (
    <a
      href={backUrl}
      onClick={handleClick}
      className={cn(
        "no-underline! flex items-center justify-between px-3 py-1 rounded-sm cursor-pointer transition-colors",
        "text-slate-600 dark:text-slate-400 hover:bg-slate-50/40 dark:hover:bg-slate-800/30 hover:text-slate-700 dark:hover:text-slate-300"
      )}
    >
      <div className="flex items-center space-x-3">
        {getIcon({ iconType: 'arrow-left' })}
        <span className="text-sm font-medium">Back</span>
      </div>
    </a>
  )
}

export default BackButton
