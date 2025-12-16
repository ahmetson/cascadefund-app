/**
 * BrowseTracker - Stack-based navigation tracking using localStorage
 * Maintains a stack of visited URLs for semantic navigation
 */

const STORAGE_KEY = 'ara-browse-stack';
const MAX_STACK_SIZE = 100;

/**
 * Get the current stack from localStorage
 */
function getStack(): string[] {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return [];
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
            return parsed.filter((item) => typeof item === 'string');
        }
        return [];
    } catch (error) {
        console.error('Error reading browse stack from localStorage:', error);
        return [];
    }
}

/**
 * Save the stack to localStorage
 */
function saveStack(stack: string[]): void {
    try {
        // Limit stack size to prevent localStorage bloat
        const limitedStack = stack.slice(-MAX_STACK_SIZE);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedStack));

        // Dispatch custom event to notify listeners of stack changes
        window.dispatchEvent(new CustomEvent('browse-stack-changed', {
            detail: { stackSize: limitedStack.length, topUrl: limitedStack[limitedStack.length - 1] || null }
        }));
    } catch (error) {
        console.error('Error saving browse stack to localStorage:', error);
    }
}

/**
 * Push a URL to the stack
 * If the URL is already in the stack (parent URL), pop all URLs after it
 * Otherwise, push the URL to the stack
 */
export function pushUrl(url: string): void {
    if (!url || typeof url !== 'string') {
        console.warn('Invalid URL provided to pushUrl:', url);
        return;
    }

    const stack = getStack();
    const topUrl = stack[stack.length - 1];

    // Don't push if it's the same as the top URL
    if (topUrl === url) {
        return;
    }

    // Check if URL exists in the stack (parent URL)
    const parentIndex = stack.indexOf(url);
    if (parentIndex !== -1) {
        // URL is a parent - pop all URLs after it
        const newStack = stack.slice(0, parentIndex + 1);
        saveStack(newStack);
        return;
    }

    // URL is new - push it to the stack
    stack.push(url);
    saveStack(stack);
}

/**
 * Pop and return the most recent URL from the stack
 * Returns null if stack is empty
 */
export function popUrl(): string | null {
    const stack = getStack();
    if (stack.length === 0) {
        return null;
    }

    const url = stack.pop() || null;
    saveStack(stack);
    return url;
}

/**
 * Get the parent URL (second-to-last URL in the stack)
 * Returns null if there's no parent (stack has 0 or 1 items)
 */
export function peekParent(): string | null {
    const stack = getStack();
    // Need at least 2 items to have a parent
    if (stack.length < 2) {
        return null;
    }

    // Return the second-to-last URL (the parent)
    return stack[stack.length - 2] || null;
}

/**
 * Get the number of URLs in the stack
 */
export function getStackSize(): number {
    return getStack().length;
}

/**
 * Clear the entire stack
 */
export function clearStack(): void {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Error clearing browse stack from localStorage:', error);
    }
}

