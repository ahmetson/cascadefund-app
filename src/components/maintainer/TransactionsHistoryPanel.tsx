import React, { useState } from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import TransactionToggler from './TransactionToggler'
import DonationReceiversPopup from './DonationReceiversPopup'
import NumberFlow from '@number-flow/react'
import TimeAgo from 'timeago-react'
import Link from '@/components/custom-ui/Link'
import Tooltip from '@/components/custom-ui/Tooltip'
import MenuAvatar from '@/components/MenuAvatar'
import { getIcon } from '@/components/icon'
import { Popover } from '@base-ui-components/react/popover'
import Button from '@/components/custom-ui/Button'
import Badge from '@/components/badge/Badge'
import BackButton from '@/components/custom-ui/BackButton'

interface Transaction {
  id: number
  date: number
  amount: number
  user: {
    nickname: string
    icon?: string
    sunshines: number
    stars: number
    isMaintainer?: boolean
  }
  memo?: string
  blockchainTx?: string
  receipt?: string
  maintainer?: {
    nickname: string
    icon?: string
    sunshines: number
    stars: number
  }
  cascadeLevel?: number
}

interface TransactionsHistoryPanelProps {
  defaultShowCascaded?: boolean
}

// Sample transaction data
const sampleTransactions: Transaction[] = [
  {
    id: 1,
    date: Date.now() - 86400000 * 2,
    amount: 1250.00,
    user: {
      nickname: 'Alex Johnson',
      sunshines: 1250,
      stars: 3.47,
      isMaintainer: false
    },
    memo: 'Thank you for your amazing work on this project! Keep it up!',
    blockchainTx: '0x3f8e2094a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8',
    receipt: 'example.pdf'
  },
  {
    id: 2,
    date: Date.now() - 86400000 * 5,
    amount: 3750.00,
    user: {
      nickname: 'Sarah Williams',
      sunshines: 2500,
      stars: 6.94,
      isMaintainer: false
    },
    memo: 'Great progress!',
    blockchainTx: '0x4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3',
    receipt: 'example.pdf'
  },
  {
    id: 3,
    date: Date.now() - 86400000 * 10,
    amount: 850.00,
    user: {
      nickname: 'Michael Chen',
      sunshines: 850,
      stars: 2.36,
      isMaintainer: true
    },
    maintainer: {
      nickname: 'Michael Chen',
      sunshines: 850,
      stars: 2.36
    },
    cascadeLevel: 3,
    blockchainTx: '0x5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5',
    receipt: 'example.pdf'
  }
]

const TransactionsHistoryPanel: React.FC<TransactionsHistoryPanelProps> = ({
  defaultShowCascaded = false
}) => {
  const [showCascaded, setShowCascaded] = useState(defaultShowCascaded)
  const [likedMemos, setLikedMemos] = useState<Set<number>>(new Set())
  const [completedMemos, setCompletedMemos] = useState<Set<number>>(new Set())

  const handleLikeMemo = (transactionId: number) => {
    setLikedMemos(new Set([...likedMemos, transactionId]))
    // Show popup notification
    alert('We sent email to the user notifying your feedback')
  }

  const handleCompleteMemo = (transactionId: number) => {
    setCompletedMemos(new Set([...completedMemos, transactionId]))
  }

  const getRandomEtherscanTx = () => {
    const chars = '0123456789abcdef'
    const tx = Array.from({ length: 64 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    return `https://etherscan.io/tx/0x${tx}`
  }

  const getRandomReceipt = () => {
    return '/example.pdf'
  }

  const filteredTransactions = showCascaded
    ? sampleTransactions.filter(t => t.maintainer)
    : sampleTransactions

  return (
    <PageLikePanel title="Transaction History">
      <TransactionToggler
        defaultShowCascaded={defaultShowCascaded}
        showCascaded={showCascaded}
        onToggle={setShowCascaded}
      />

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="text-gray-600">#</span>
                  ID
                </div>
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 text-blue-600">
                Proof
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 text-blue-600">
                Amount
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                User
              </th>
              {!showCascaded && (
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                  Memo
                </th>
              )}
              {showCascaded && (
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">
                  Cascade
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-teal-900/40">
                {/* ID Column */}
                <td className="py-4 px-2">
                  <div className="flex items-center gap-1 text-sm text-gray-800 dark:text-gray-400 pl-3">
                    {transaction.id}
                  </div>
                </td>

                {/* Proof Column */}
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Link
                      uri={transaction.blockchainTx || getRandomEtherscanTx()}
                      asNewTab={true}
                      className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Blockchain Tx
                    </Link>
                    <span className="text-gray-400 dark:text-gray-600">|</span>
                    <Link
                      uri={transaction.receipt || getRandomReceipt()}
                      asNewTab={true}
                      className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Receipt
                    </Link>
                  </div>
                </td>

                {/* Amount Column */}
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2">
                    <Tooltip
                      content={
                        <div className="text-sm">
                          {showCascaded && transaction.maintainer
                            ? (
                              <div className="space-y-2">
                                <div>Maintainer who shared his donations with you</div>
                                <div className="flex items-center gap-2">
                                  <img
                                    src={transaction.maintainer.icon || 'https://api.backdropbuild.com/storage/v1/object/public/avatars/9nFM8HasgS.jpeg'}
                                    alt={transaction.maintainer.nickname}
                                    className="w-12 h-12 rounded-full"
                                  />
                                  <div>
                                    <div className="flex items-center gap-1">
                                      <span className="font-medium">{transaction.maintainer.nickname}</span>
                                      <span className="text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded">Maintainer</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                      {getIcon({ iconType: 'sunshine', className: 'w-4 h-4' })}
                                      <NumberFlow
                                        value={transaction.maintainer.sunshines}
                                        locales="en-US"
                                        format={{ style: 'decimal', maximumFractionDigits: 0 }}
                                        className="text-xs"
                                      />
                                      {getIcon({ iconType: 'star', className: 'w-4 h-4' })}
                                      <NumberFlow
                                        value={transaction.maintainer.stars}
                                        locales="en-US"
                                        format={{ style: 'decimal', maximumFractionDigits: 2 }}
                                        className="text-xs"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                            : 'Amount user donated'}
                        </div>
                      }
                    >
                      <NumberFlow
                        value={transaction.amount}
                        locales="en-US"
                        format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 2 }}
                        className="text-sm font-medium text-gray-800 dark:text-gray-400"
                      />
                    </Tooltip>
                    {!showCascaded && <DonationReceiversPopup />}
                  </div>
                </td>

                {/* Date Column */}
                <td className="py-4 px-2">
                  <TimeAgo datetime={transaction.date} className="text-sm text-gray-800 dark:text-gray-400" />
                </td>

                {/* User Column */}
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2">
                    <Tooltip
                      content={
                        <div className="text-sm">
                          Who donated
                          <div className="mt-2">
                            <MenuAvatar
                              src={transaction.user.icon}
                              nickname={transaction.user.nickname}
                              sunshines={transaction.user.sunshines}
                              stars={transaction.user.stars}
                              isMaintainer={transaction.user.isMaintainer}
                            />
                          </div>
                        </div>
                      }
                    >
                      <MenuAvatar
                        src={transaction.user.icon}
                        nickname={transaction.user.nickname}
                        sunshines={transaction.user.sunshines}
                        stars={transaction.user.stars}
                        isMaintainer={transaction.user.isMaintainer}
                      />
                    </Tooltip>
                    <Tooltip
                      content={
                        <div className="text-sm">
                          Received {transaction.user.sunshines} sunshines. {getIcon({ iconType: 'star', className: 'w-4 h-4 inline' })} 1 = 360 sunshines
                        </div>
                      }
                    >
                      <div className="flex items-center gap-1">
                        {getIcon({ iconType: 'sunshine', className: 'w-4 h-4' })}
                        <NumberFlow
                          value={transaction.user.sunshines}
                          locales="en-US"
                          format={{ style: 'decimal', maximumFractionDigits: 0 }}
                          className="text-sm text-gray-800 dark:text-gray-400"
                        />
                        <span className="text-gray-500">+</span>
                      </div>
                    </Tooltip>
                  </div>
                </td>

                {/* Memo Column (only when not showing cascaded) */}
                {!showCascaded && (
                  <td className="py-4 px-2">
                    {transaction.memo ? (
                      <Popover.Root>
                        <Popover.Trigger className="hyperlink flex items-center justify-center shadow-none">
                          <div className="text-sm text-gray-800 dark:text-gray-400 italic max-w-xs truncate">
                            &quot;{transaction.memo.substring(0, 64)}
                            {transaction.memo.length > 64 ? '...' : ''}&quot;
                          </div>
                        </Popover.Trigger>
                        <Popover.Portal>
                          <Popover.Positioner sideOffset={8} side='bottom' className={'z-999!'}>
                            <Popover.Popup className="w-96 origin-[var(--transform-origin)] rounded-xs bg-[canvas] px-6 py-4 text-gray-900 shadow-sm shadow-gray-900 dark:text-slate-300 dark:shadow-slate-300 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
                              <Popover.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                              </Popover.Arrow>
                              <Popover.Title className="text-gray-500 dark:text-gray-400 font-medium text-md mb-2">
                                Memo
                              </Popover.Title>
                              <Popover.Description className="text-gray-600 dark:text-slate-400 text-sm mb-4">
                                {transaction.memo}
                              </Popover.Description>
                              <div className="flex gap-2">
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  onClick={() => handleCompleteMemo(transaction.id)}
                                  disabled={completedMemos.has(transaction.id)}
                                >
                                  {completedMemos.has(transaction.id) ? 'Completed' : 'Complete'}
                                </Button>
                                <Button
                                  variant="primary"
                                  size="sm"
                                  onClick={() => handleLikeMemo(transaction.id)}
                                  disabled={likedMemos.has(transaction.id)}
                                  className="flex items-center gap-1"
                                >
                                  {getIcon({ iconType: 'likes', className: 'w-4 h-4' })}
                                  {likedMemos.has(transaction.id) ? 'Liked' : 'Like'}
                                </Button>
                              </div>
                            </Popover.Popup>
                          </Popover.Positioner>
                        </Popover.Portal>
                      </Popover.Root>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                )}

                {/* Cascade Column (only when showing cascaded) */}
                {showCascaded && (
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <BackButton uri="/project/transactions" />
                      <Tooltip
                        content={
                          <div className="text-sm">
                            Shared at the {transaction.cascadeLevel || 3} level
                          </div>
                        }
                      >
                        <Badge variant="info" static={true}>
                          <NumberFlow
                            value={transaction.cascadeLevel || 3}
                            locales="en-US"
                            format={{ style: 'decimal', maximumFractionDigits: 0 }}
                          />
                        </Badge>
                      </Tooltip>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLikePanel>
  )
}

export default TransactionsHistoryPanel

