'use client'
import React from 'react'

const PanelFooter: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <div className={`flex items-center justify-between mb-2 border-t-2 border-gray-200/20 dark:border-gray-600/20 pt-1 ${className}`}>
      {children}
    </div>
  )
}

export default PanelFooter
