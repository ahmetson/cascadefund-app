import { actions } from 'astro:actions';
import { clearCookie, getCookie, setCookie, emitEvent, callAction } from '@/scripts/astro-runtime-cookies'
import { Roles, type UserModel } from '../scripts/user'
import { DEMO_COOKIE_NAMES, DEMO_EVENT_TYPES } from './index'


// (Client Side) Check if demo cookies exist
export const demoExists = (): boolean => {
    return demoCookiesExist()
}

// (Client Side) Get demo from the cookies
export const getDemo = (): { email: string | null; users: UserModel[] | null; role: Roles | null } => {
    return getDemoCookies()
}

// (Server Side Action) Start demo and emit USER_CREATED event
export const startDemo = async (email: string): Promise<{ success: boolean; error?: string }> => {
    const result = await callStartAction(email)

    if (result.success && result.users) {
        const defaultRole: Roles = 'maintainer'
        setDemoCookies(email.trim(), result.users, defaultRole)

        // Emit USER_CREATED event
        emitEvent(DEMO_EVENT_TYPES.USER_CREATED, {
            email: email.trim(),
            users: result.users,
            role: defaultRole,
        })
    }

    return result
};

// (Client Side) Clear demo cookies and emit USER_DELETED event
export const clearDemo = () => {
    clearDemoCookies()

    // Emit USER_DELETED event
    emitEvent(DEMO_EVENT_TYPES.USER_DELETED, {})
};

// (Client Side) Change role and emit ROLE_CHANGED event
export const changeRole = (role: Roles) => {
    const { email, users } = getDemoCookies()
    if (email && users) {
        setDemoCookies(email, users, role)

        // Emit ROLE_CHANGED event
        emitEvent(DEMO_EVENT_TYPES.ROLE_CHANGED, { role })
    }
};

//----------------------------------------------------------------
//
//----------------------------------------------------------------


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

