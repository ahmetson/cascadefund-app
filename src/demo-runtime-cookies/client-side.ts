import { actions } from 'astro:actions';
import { clearCookie, getCookie, setCookie, emitEvent, callAction } from '@/scripts/astro-runtime-cookies'
import { Roles, type UserModel } from '../scripts/user'
import { DEMO_COOKIE_NAMES } from './index'


// Get all demo cookies
function getDemoCookies(): {
    email: string | null
    users: UserModel[] | null
    role: Roles | null
} {
    const email = getCookie(DEMO_COOKIE_NAMES.email)
    const usersStr = getCookie(DEMO_COOKIE_NAMES.users)
    const role = getCookie(DEMO_COOKIE_NAMES.role) as Roles | null

    let users: UserModel[] | null = null
    if (usersStr) {
        try {
            users = JSON.parse(usersStr)
        } catch {
            users = null
        }
    }

    return { email, users, role }
}


// Check if demo cookies exist
function demoCookiesExist(): boolean {
    const { email, users, role } = getDemoCookies()
    return !!(email && users && role)
}

// Clear all demo cookies
function clearDemoCookies(): void {
    Object.values(DEMO_COOKIE_NAMES).forEach((name) => {
        clearCookie(name)
    })
}

// Set all demo cookies
function setDemoCookies(
    email: string,
    users: UserModel[],
    role: Roles,
    days: number = 30
): void {
    setCookie(DEMO_COOKIE_NAMES.email, email, days)
    setCookie(DEMO_COOKIE_NAMES.users, encodeURIComponent(JSON.stringify(users)), days)
    setCookie(DEMO_COOKIE_NAMES.role, role, days)
}


// Call the start action
async function callStartAction(email: string): Promise<{ success: boolean; users?: UserModel[]; error?: string }> {
    const result = await callAction(actions.start, { email: email.trim() })

    if (result.success) {
        return {
            success: true as const,
            users: result.data?.users,
        }
    }

    return {
        success: false,
        error: result.error,
    }
}

export const demoExists = (): boolean => {
    return demoCookiesExist()
}

export const getDemo = (): { email: string | null; users: UserModel[] | null; role: Roles | null } => {
    return getDemoCookies()
}

// Start demo function
export const startDemo = async (email: string): Promise<{ success: boolean; error?: string }> => {
    const result = await callStartAction(email)

    if (result.success && result.users) {
        const defaultRole: Roles = 'maintainer'
        setDemoCookies(email.trim(), result.users, defaultRole)

        // Emit demo-user-created event
        emitEvent('demo-user-created', {
            email: email.trim(),
            users: result.users,
            role: defaultRole,
        })
    }

    return result
};

// Clear demo function
export const clearDemo = () => {
    clearDemoCookies()

    // Emit demo-user-deleted event
    emitEvent('demo-user-deleted', {})
};

// Change role function
export const changeRole = (role: Roles) => {
    const { email, users } = getDemoCookies()
    if (email && users) {
        setDemoCookies(email, users, role)

        // Emit demo-role-change event
        emitEvent('demo-role-change', { role })
    }
};

