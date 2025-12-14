export type Roles = 'user' | 'maintainer' | 'contributor'

export interface User {
    _id?: string
    email?: string
    src?: string
    alt?: string
    uri?: string
    nickname?: string
    sunshines?: number
    stars?: number
    role?: Roles
    balance?: number
    demoPrivateKey?: string
}

export const USER_EVENT_TYPES = {
    USER_UPDATE: 'user-update',
} as const

export interface UserUpdateEventDetail {
    user: User
}

