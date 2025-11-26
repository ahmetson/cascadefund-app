import React from 'react'
import { cn } from '@/lib/utils'
import { BorderSize, PanelEvents, RoundedSize, ShadowSize } from '@/types/eventTypes'

export type Padding = 'p-0' | 'p-2' | 'p-4' | 'p-8' | string
export type Bg = string | {
    src: string
    label?: string
    className?: string
}
export type Border = {
    size: BorderSize
    color?: string
    className?: string
}

export type BasePanelProps = PanelEvents & {
    key?: string
    children: React.ReactNode
    className?: string
    padding?: Padding
    bg?: Bg
    border?: Border
    shadowSize?: ShadowSize
    roundedSize?: RoundedSize
}

const BasePanel: React.FC<BasePanelProps> = ({
    key,
    children,
    className = '',
    padding = 'p-4',
    bg = 'bg-white dark:bg-slate-900',
    border = {
        size: 'border-1',
        color: 'border-slate-200 dark:border-slate-500/10',
        className: ''
    },
    shadowSize = ShadowSize.shadowMd,
    roundedSize = RoundedSize.roundedXs
}) => {

    const getBackgroundStyles = () => {
        if (typeof bg === 'object' && bg.src) {
            return 'backdrop-blur-sm'
        }
        return bg || ''
    }

    return (
        <div
            key={key}
            className={cn(
                `${roundedSize} ${shadowSize} relative overflow-hidden`,
                `${border.size} ${border.color} ${border.className}`,
                getBackgroundStyles(),
                padding,
                className
            )}
        >
            {/* Background Image with Frosted Glass Effect */}
            {typeof bg === 'object' && bg.src && (
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <img
                        src={bg.src}
                        alt={bg.label || 'Background'}
                        referrerPolicy="no-referrer"
                        className={cn(
                            `w-full h-full object-cover blur-xs scale-110 ${bg.className || ''}`,
                        )}
                    />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

        </div>
    )
}

export default BasePanel
