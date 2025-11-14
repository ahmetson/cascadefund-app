import React from 'react'
import BasePanel, { BasePanelProps } from './Panel'
import Button from '@/components/custom-ui/Button'
import Link from '@/components/custom-ui/Link'
import { getIcon, IconType, IconProps } from '@/components/icon'
import { cn } from '@/lib/utils'
import { BorderSize, type ActionProps } from '@/types/eventTypes'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../animate-ui/components/radix/accordion'

export interface InfoPanelProps extends Omit<BasePanelProps, 'children'> {
    icon?: IconType | IconProps  // Accepts both 'info' and { iconType: 'info', width: 'w-6' }
    title?: React.ReactNode
    actions?: ActionProps[]
    children?: React.ReactNode
    expandable?: boolean
    defaultExpanded?: boolean
    titleClassName?: string
}

export const infoPanelIcon = (iconType: IconType | IconProps | undefined): IconType | IconProps => {
    if (typeof iconType === 'object') {
        return iconType;
    }
    if (iconType === undefined) {
        iconType = 'info';
    }
    return iconType;
}

const InfoPanel: React.FC<InfoPanelProps> = ({
    key,
    icon,
    title,
    actions,
    children,
    expandable = false,
    defaultExpanded = false,
    className = '',
    titleClassName = '',
    ...baseProps
}) => {
    const panelID = 'infopanel-1'
    const hasContent = children || (actions && actions.length > 0)
    const titleBottomMargin = hasContent ? 'mb-4' : undefined;
    const contentTopMargin = 'mt-4';
    const titleColor = 'text-slate-600 dark:text-slate-400';
    const textColor = 'text-gray-600 dark:text-gray-500';
    const borderColor = 'border-slate-200 dark:border-slate-700/10';
    const blurredBorder = 'border-blur-xs';

    const renderHeader = () => {
        if (!title) return null;
        const iconProps = infoPanelIcon(icon);

        return (
            <div key={key} className={`${titleBottomMargin}`}>
                <h2 className={`font-georgia flex items-center gap-2 h-5 ${titleColor} ${titleClassName}`}>
                    {getIcon(iconProps)}
                    <span>{title}</span>
                </h2>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className={`font-noto-sans ${textColor} `}>
                {children}
            </div>
        )
    }

    const renderActions = () => {
        if (!actions || actions.length === 0) return null

        return (
            <div className="flex justify-center gap-3 mt-6">
                {actions.map((action, index) => (
                    action.uri ? (
                        <Link
                            key={index}
                            uri={action.uri}
                            className={cn("flex-1 inline-flex items-center font-bold py-2 px-4 rounded transition-colors", action.className)}
                        >
                            {action.children}
                        </Link>
                    ) : (
                        <Button
                            key={index}
                            variant={action.variant}
                            onClick={action.onClick}
                            className={cn("flex-1", action.className)}
                        >
                            {action.children}
                        </Button>
                    )
                ))}
            </div>
        )
    }
    const transparentBg = `bg-white dark:bg-blue-500/10 backdrop-blur-xs border-none ${textColor}`;


    if (hasContent && expandable) {
        return (
            <BasePanel
                {...baseProps}
                border={{ size: BorderSize.border1, color: `${borderColor} ${blurredBorder}`, className: 'filter' }}
                bg="bg-transparent"
                className={cn(
                    'shadow-none',
                    transparentBg,
                    className
                )}
            >
                <Accordion defaultValue={defaultExpanded ? panelID : undefined} type='single' collapsible={true}>
                    <AccordionItem value={panelID}>
                        <AccordionTrigger className={`flex items-center justify-between h-auto no-underline! p-0`}>
                            <div className="font-georgia font-semibold text-base flex items-center gap-2">
                                {icon && getIcon({ iconType: (icon as IconProps).iconType || icon, fill: 'currentColor', className: textColor })}
                                <span>{title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className={`AccordionContent ${contentTopMargin}`}>
                            {renderContent()}
                            {renderActions()}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </BasePanel>
        )
    }

    return (
        <BasePanel
            {...baseProps}
            border={{ size: BorderSize.border2, color: `${borderColor} ${blurredBorder}` }}
            bg="bg-transparent"
            className={cn(
                `shadow-none ${textColor}`,
                transparentBg,
                className)
            }
        >
            {renderHeader()}
            {children && renderContent()}
            {actions && renderActions()}
        </BasePanel>
    )
}

export default InfoPanel
