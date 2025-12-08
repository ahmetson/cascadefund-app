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
}

