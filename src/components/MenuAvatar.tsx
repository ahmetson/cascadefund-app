import React from 'react'
import Link from '@/components/custom-ui/Link'
import Tooltip from './custom-ui/Tooltip'
import NumberFlow from '@number-flow/react'
import { getIcon } from './icon'

interface MenuAvatarProps {
  src?: string
  alt?: string
  className?: string
  imgClassName?: string
  uri?: string
  nickname?: string
  sunshines?: number
  stars?: number
  isMaintainer?: boolean
}

const MenuAvatar: React.FC<MenuAvatarProps> = ({ 
  src, 
  alt, 
  className, 
  imgClassName, 
  uri = '/data/profile',
  nickname = 'Ahmetson',
  sunshines,
  stars,
  isMaintainer = false
}) => {
  const defaultSrc = 'https://api.backdropbuild.com/storage/v1/object/public/avatars/9nFM8HasgS.jpeg'
  const defaultAlt = 'Avatar'
  const profileUri = nickname ? `${uri}?nickname=${nickname}` : uri

  const tooltipContent = (
    <div className="text-sm space-y-2">
      <div className="flex items-center gap-2">
        <img 
          src={src || defaultSrc} 
          alt={alt || defaultAlt} 
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center gap-1">
            <span className="font-medium">{nickname}</span>
            {isMaintainer && (
              <span className="text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded">Maintainer</span>
            )}
          </div>
          {(sunshines !== undefined || stars !== undefined) && (
            <div className="flex items-center gap-2 mt-1">
              {sunshines !== undefined && (
                <div className="flex items-center gap-1">
                  {getIcon({ iconType: 'sunshine', className: 'w-4 h-4' })}
                  <NumberFlow
                    value={sunshines}
                    locales="en-US"
                    format={{ style: 'decimal', maximumFractionDigits: 0 }}
                    className="text-xs"
                  />
                </div>
              )}
              {stars !== undefined && (
                <div className="flex items-center gap-1">
                  {getIcon({ iconType: 'star', className: 'w-4 h-4' })}
                  <NumberFlow
                    value={stars}
                    locales="en-US"
                    format={{ style: 'decimal', maximumFractionDigits: 2 }}
                    className="text-xs"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <Tooltip content={tooltipContent}>
      <Link uri={profileUri} className={`hover:bg-teal-300 bg-blue-200 dark:bg-blue-400 rounded-full h-8 w-8 flex items-center p-1! ${className}`}>
        <img src={src || defaultSrc} alt={alt || defaultAlt} className={`w-full h-full rounded-full ${imgClassName}`} />
      </Link>
    </Tooltip>

  )
}

export default MenuAvatar
