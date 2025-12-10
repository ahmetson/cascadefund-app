import React from 'react'
import { useHotkeys } from 'react-hotkeys-hook';
import { capitalizeFirstLetter } from '@/lib/utils'
import { cn } from '@/lib/utils';

interface Props {
  children: string
  overwrittenChildren?: string
  onPress?: (children?: string) => void
  className?: string
}

const Kbd: React.FC<Props> = ({ className, children, overwrittenChildren, onPress }) => {
  useHotkeys(overwrittenChildren || children, () => {
    onPress?.(overwrittenChildren || children);
  }, { enableOnFormTags: true });

  return (
    <kbd className={cn("kbd border border-gray-300 dark:border-gray-600 rounded-sm border-solid px-1 py-2 w-12 text-xs flex text-center items-center dark:bg-slate-500 text-gray-600 dark:text-gray-300 h-4!", className)}>
      {capitalizeFirstLetter(children as string)}
    </kbd>
  )
}

export default Kbd
