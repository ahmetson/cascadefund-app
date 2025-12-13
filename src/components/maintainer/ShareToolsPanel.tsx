import React, { useState } from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import InfoPanel from '@/components/panel/InfoPanel'
import { getIcon } from '@/components/icon'
import { ActionProps } from '@/types/eventTypes'
import { Galaxy } from '@/types/galaxy'

const ShareTools: React.FC<{ galaxy: Galaxy }> = ({ galaxy }) => {
  const [copied, setCopied] = useState(false)
  const badgeCode = `[${galaxy.name + ' galaxy'}](https://app.ara.foundation/project?galaxy=${galaxy._id})`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(badgeCode)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = badgeCode
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  return (
    <PageLikePanel interactive={false} title={
      <span className="font-bold text-xl text-slate-900 dark:text-slate-100">Invite to Your Galaxy</span>
    } titleCenter={true} className="">
      <InfoPanel
        icon="copy"
        className="mb-4 dark:bg-transparent bg-transparent"
        actions={[
          {
            children: (
              <span className="flex items-center gap-2">
                {copied ? (
                  <>
                    {getIcon({ iconType: 'check', className: 'w-4 h-4' })}
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    {getIcon({ iconType: 'new-file', className: 'w-4 h-4' })}
                    <span>Copy</span>
                  </>
                )}
              </span>
            ),
            variant: 'secondary',
            onClick: handleCopy
          } as ActionProps
        ]}
      >
        <ul className="text-gray-600 dark:text-gray-400 text-sm mb-3 space-y-2 list-disc list-inside">
          <li>Share the link to the galaxy page for your users</li>
          <li>For any questions ask them to join the galaxy</li>
          <li>Ara's design increases the chance users to donate more. Unlike other sponsorship/donation platforms, in Ara users can be community owners as the reward, <strong>only, after your approval</strong></li>
        </ul>
        <div className="text-sm text-slate-700 dark:text-slate-300/80 bg-slate-100 dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700 font-mono break-all">
          {badgeCode}
        </div>
      </InfoPanel>
    </PageLikePanel>
  )
}

export default ShareTools
