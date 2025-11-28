import React from 'react'
import { Popover } from '@base-ui-components/react/popover'
import { getIcon } from '@/components/icon'
import Tooltip from '@/components/custom-ui/Tooltip'
import Button from '@/components/custom-ui/Button'
import List from '@/components/list/List'
import ReceiverInfo, { ReceiverInfoProps } from './ReceiverInfo'

interface DonationReceiversPopupProps {
  receivers?: ReceiverInfoProps[]
}

const DonationReceiversPopup: React.FC<DonationReceiversPopupProps> = ({ receivers = [] }) => {
  return (
    <Popover.Root>
      <Popover.Trigger className="hyperlink flex items-center justify-center shadow-none">
        <Tooltip
          content={
            <div className="text-sm">
              View receivers
            </div>
          }
        >
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {getIcon({ iconType: 'arrow-to-br-corner', className: 'w-4 h-4' })}
            {getIcon({ iconType: 'multiple-users', className: 'w-4 h-4' })}
          </Button>
        </Tooltip>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={8} side='bottom' className={'z-999!'}>
          <Popover.Popup className="w-80 origin-[var(--transform-origin)] rounded-xs bg-[canvas] px-6 py-4 text-gray-900 shadow-sm shadow-gray-900 dark:text-slate-300 dark:shadow-slate-300 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
            <Popover.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
            </Popover.Arrow>
            <Popover.Description className="text-gray-600 dark:text-slate-400 text-sm mb-3">
              Donation Receivers
            </Popover.Description>
            <List contentHeight="h-64">
              {receivers.length > 0 ? (
                receivers.map((receiver, index) => (
                  <ReceiverInfo key={index} {...receiver} />
                ))
              ) : (
                <div className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                  No receivers
                </div>
              )}
            </List>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default DonationReceiversPopup

