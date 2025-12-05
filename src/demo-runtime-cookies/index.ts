import { Roles, UserModel } from "@/scripts/user"
import { ObjectId } from "mongodb"

export interface DemoModel {
    _id?: any
    email: string
    created: number
    users: ObjectId[]
}

/**
 * Client-safe demo constants
 * These constants can be safely imported in client components
 */
export const DEMO_COOKIE_NAMES = {
    email: 'demo-email',
    users: 'demo-users',
    role: 'demo-role',
} as const

export const demoProjectName = 'hyperpayment'

export const DEMO_EVENT_TYPES = {
    USER_CREATED: 'demo-user-created',
    USER_DELETED: 'demo-user-deleted',
    ROLE_CHANGED: 'demo-role-change',
} as const

// Event types
export interface DemoUserCreatedEvent {
    email: string
    users: UserModel[]
    role: Roles
}

export interface DemoRoleChangeEvent {
    role: Roles
}

