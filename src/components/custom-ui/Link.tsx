import React from 'react'
import { LinkProps, type ComponentProps } from '@/types/eventTypes'
import ElectricBorder from '../ElectricBorder'

export type LinkComponentProps = Omit<LinkProps, 'children'> & ComponentProps & {
  asNewTab?: boolean
  focus?: boolean
}

const Component: React.FC<LinkComponentProps> = ({ ref, asNewTab = false, className, uri, children, focus = false }) => {
  const fullClassName = `hyperlink text-blue-500 dark:text-blue-200 hover:text-teal-300 dark:hover:text-teal-200 ${focus && 'py-2'} transition-colors ${className}`

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's not a new tab and Astro transitions are available, let Astro handle it
    // The transition overlay will be triggered by Astro's navigation events
    if (!asNewTab && typeof document !== 'undefined') {
      // Astro's ClientRouter will handle the transition automatically
      // We just need to ensure the link uses the same origin
      const link = e.currentTarget;
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('#')) {
        // Internal link - Astro will handle the transition
        // No need to prevent default, let Astro handle it
      }
    }
  }

  return (
    <a
      key={uri}
      ref={ref}
      target={asNewTab ? '_blank' : '_self'}
      href={uri}
      className={fullClassName}
      onClick={handleClick}
      data-astro-transition-scope
    >
      <ElectricBorder
        color="#0ea5e950"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 2 }}
        className="py-2 px-2 w-full"
        disabled={!focus}
      >
        {children}
      </ElectricBorder>
    </a>
  )
}

export default Component
