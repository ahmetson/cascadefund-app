import React from 'react'
import Button from '@/components/custom-ui/Button'

interface TransactionTogglerProps {
  defaultShowCascaded?: boolean
  showCascaded: boolean
  onToggle: (value: boolean) => void
}

const TransactionToggler: React.FC<TransactionTogglerProps> = ({
  defaultShowCascaded = false,
  showCascaded,
  onToggle
}) => {
  return (
    <div className="mb-4">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => onToggle(!showCascaded)}
        className="w-full sm:w-auto"
      >
        {showCascaded ? 'show user donations' : 'show cascading donations'}
      </Button>
    </div>
  )
}

export default TransactionToggler

