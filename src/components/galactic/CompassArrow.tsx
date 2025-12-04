import React, { useMemo } from 'react';
import { getIcon } from '@/components/icon';

interface CompassArrowProps {
    currentPosition: { x: number; y: number };
    targetPosition: { x: number; y: number };
    className?: string;
}

const CompassArrow: React.FC<CompassArrowProps> = ({
    currentPosition,
    targetPosition,
    className = '',
}) => {
    // Calculate angle in degrees from current position to target position
    const angle = useMemo(() => {
        const dx = targetPosition.x - currentPosition.x;
        const dy = targetPosition.y - currentPosition.y;
        // atan2 returns angle in radians, convert to degrees
        // Add 90 degrees because arrow-right icon points right (0°), but we want it to point up (90°) as default
        const radians = Math.atan2(dy, dx);
        const degrees = (radians * 180) / Math.PI;
        // Rotate so arrow points in the correct direction (arrow-right points right, we want it to point toward target)
        return degrees;
    }, [currentPosition, targetPosition]);

    return (
        <div
            className={className}
            style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: 'center',
                display: 'inline-block',
            }}
        >
            {getIcon({ iconType: 'arrow-right', className: 'w-5 h-5 text-slate-600 dark:text-slate-400' })}
        </div>
    );
};

export default CompassArrow;

