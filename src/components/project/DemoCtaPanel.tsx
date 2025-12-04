import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '@/components/custom-ui/Button';
import { cn } from '@/lib/utils';

const DemoCtaPanel: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleStart = () => {
        // Validate email
        if (!email || !email.trim()) {
            setError('please write email address');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setError('please write email address');
            return;
        }

        // Clear error and show alert
        setError('');
        alert(`Todo, demo play by ${email.trim()}`);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        // Clear error when user starts typing
        if (error) {
            setError('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleStart();
        }
    };

    return (
        <motion.div
            className={cn(
                "relative w-full max-w-md mx-auto -mt-20 z-11",
                "backdrop-blur-md bg-white/30 dark:bg-slate-900/30",
                "border border-slate-200/40 dark:border-slate-700/40",
                "rounded-xl p-8",
                "transition-all duration-300",
                "hover:bg-white/40 dark:hover:bg-slate-900/40",
                "hover:border-slate-300/60 dark:hover:border-slate-600/60",
                "hover:shadow-2xl hover:shadow-blue-500/30",
                "shadow-lg shadow-blue-500/10"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
                scale: isHovered ? 1.02 : 1,
                y: isHovered ? -4 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            {/* Animated gradient overlay on hover */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 text-center">
                    Demo Try out
                </h3>

                {/* Email Input with Button */}
                <div className="w-full space-y-3">
                    <div className="flex gap-2">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Enter your email"
                            className={cn(
                                "flex-1 h-12 px-4 rounded-lg",
                                "bg-white/50 dark:bg-slate-800/50",
                                "border border-slate-300/50 dark:border-slate-600/50",
                                "text-slate-800 dark:text-slate-200",
                                "placeholder:text-slate-400 dark:placeholder:text-slate-500",
                                "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                                "focus:border-blue-500/50",
                                "transition-all duration-200",
                                error && "border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50"
                            )}
                        />
                        <Button
                            variant="primary"
                            size="lg"
                            className="h-12 px-6 whitespace-nowrap"
                            onClick={handleStart}
                        >
                            Start
                        </Button>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="text-sm text-red-500 dark:text-red-400 text-center"
                            >
                                {error}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Info Paragraph */}
                <motion.p
                    className="text-sm text-slate-600 dark:text-slate-400 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    You will start immediately.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default DemoCtaPanel;

