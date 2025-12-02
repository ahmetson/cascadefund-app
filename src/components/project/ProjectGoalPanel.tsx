import React from 'react';
import { getIcon } from '@/components/icon';
import NumberFlow from '@number-flow/react';
import { UserStarData } from '@/components/galactic/Space';
import { cn } from '@/lib/utils';

interface ProjectGoalPanelProps {
    stars?: UserStarData[]; // For user count
    totalStars?: number; // Total stars count
    totalSunshines?: number; // Total sunshines
    goalStars?: number; // Stars needed for community control
    goalDonations?: number; // Donations needed (in parentheses)
    votingPower?: string; // Voting power description
}

const ProjectGoalPanel: React.FC<ProjectGoalPanelProps> = ({
    stars = [],
    totalStars,
    totalSunshines,
    goalStars = 100,
    goalDonations,
    votingPower = 'Voting power will be determined by your star count at the snapshot moment',
}) => {
    // Calculate energy percentage (same logic as ProjectLandingHero)
    const sunshinesToStar = 360;
    const sunshinesValue = totalSunshines || 0;
    const starsValue = totalStars || 0;
    const shinesInStars = starsValue * sunshinesToStar;
    const energyPercentage = sunshinesValue > 0 ? ((shinesInStars / sunshinesValue) * 100) : 0;

    // Calculate stats
    const userCount = stars.length;
    const starsCount = totalStars || 0;
    const sunshinesCount = totalSunshines || 0;
    const energyCount = Math.round(energyPercentage);

    return (
        <div
            className={cn(
                'absolute bottom-4 md:bottom-auto md:top+[calc(50vh+60px)] right-24 ',
                // Base styles
                'w-full max-w-sm mx-auto',
                'backdrop-blur-md bg-white/10 dark:bg-slate-900/10',
                'border border-slate-200/30 dark:border-slate-700/30',
                'rounded-3xl p-8',
                'transition-all duration-300',
                'hover:bg-white/20 dark:hover:bg-slate-900/20',
                'hover:border-slate-300/50 dark:hover:border-slate-600/50',
                'hover:shadow-xl hover:shadow-blue-500/20',
                // Responsive positioning
                'self-start md:self-auto'
            )}
        >
            <div className="flex flex-col items-center space-y-6 text-center">
                {/* Large Star Icon */}
                <div className="flex items-center justify-center">
                    {getIcon({ iconType: 'star', className: 'w-16 h-16 text-yellow-500 dark:text-yellow-400' })}
                </div>

                {/* Explanation Section */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                        Why Obtain Stars?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Stars represent your contribution and commitment to the project. Earn stars by contributing, and they give you voting power when the project transitions to star user's ownership.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="w-full space-y-3">
                    <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-white/5 dark:bg-slate-900/5 border border-slate-200/20 dark:border-slate-700/20">
                        <div className="flex items-center gap-2">
                            {getIcon({ iconType: 'user', className: 'w-5 h-5 text-blue-500' })}
                            <span className="text-sm text-slate-600 dark:text-slate-400">Users</span>
                        </div>
                        <NumberFlow
                            value={userCount}
                            locales="en-US"
                            format={{ style: 'decimal', maximumFractionDigits: 0 }}
                            className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                        />
                    </div>

                    <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-white/5 dark:bg-slate-900/5 border border-slate-200/20 dark:border-slate-700/20">
                        <div className="flex items-center gap-2">
                            {getIcon({ iconType: 'star', className: 'w-5 h-5 text-orange-500' })}
                            <span className="text-sm text-slate-600 dark:text-slate-400">Stars</span>
                        </div>
                        <NumberFlow
                            value={starsCount}
                            locales="en-US"
                            format={{ style: 'decimal', maximumFractionDigits: 2 }}
                            className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                        />
                    </div>

                    <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-white/5 dark:bg-slate-900/5 border border-slate-200/20 dark:border-slate-700/20">
                        <div className="flex items-center gap-2">
                            {getIcon({ iconType: 'energy', className: 'w-5 h-5 text-purple-500' })}
                            <span className="text-sm text-slate-600 dark:text-slate-400">Energy</span>
                        </div>
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                            {energyCount}%
                        </span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-white/5 dark:bg-slate-900/5 border border-slate-200/20 dark:border-slate-700/20">
                        <div className="flex items-center gap-2">
                            {getIcon({ iconType: 'sunshine', className: 'w-5 h-5 text-yellow-500' })}
                            <span className="text-sm text-slate-600 dark:text-slate-400">Sunshines</span>
                        </div>
                        <NumberFlow
                            value={sunshinesCount}
                            locales="en-US"
                            format={{ style: 'decimal', maximumFractionDigits: 0 }}
                            className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                        />
                    </div>
                </div>

                {/* Goal Section */}
                <div className="w-full space-y-3 pt-2 border-t border-slate-200/30 dark:border-slate-700/30">
                    <div className="space-y-2">
                        <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                            Community Control Goal
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            <NumberFlow
                                value={goalStars}
                                locales="en-US"
                                format={{ style: 'decimal', maximumFractionDigits: 0 }}
                                className="font-semibold text-slate-800 dark:text-slate-200"
                            />
                            {' '}stars
                            {goalDonations !== undefined && (
                                <>
                                    {' '}(<NumberFlow
                                        value={goalDonations}
                                        locales="en-US"
                                        format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 0 }}
                                        className="font-semibold"
                                    />{' '}donations)
                                </>
                            )}{' '}
                            needed to turn project into community control
                        </p>
                    </div>

                    <div className="px-4 py-3 rounded-lg bg-blue-500/10 dark:bg-blue-900/20 border border-blue-500/20 dark:border-blue-700/30">
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            <span className="font-semibold">Voting Power:</span> {votingPower}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectGoalPanel;

