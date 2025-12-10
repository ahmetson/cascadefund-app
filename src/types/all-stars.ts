export interface AllStarStats {
    totalGalaxies: number;
    totalStars: number;
    totalUsers: number;
    totalSunshines?: number;
}

export interface SolarForgeModel {
    _id?: string;
    solarForgeType: 'issue';
    issueId: string;
    users: string[]; // Array of user IDs
    sunshines: number;
    createdTime: number;
}

export interface SolarUser {
    id: string;
    roles: string[];
    stars: number;
}

export interface SolarForgeByIssueResult {
    users: SolarUser[];
    solarForgeId: string;
    error?: string;
}

export interface SolarForgeByVersionResult {
    users: SolarUser[];
    totalIssues: number;
    totalSunshines: number;
    totalStars: number;
}

/**
 * Convert sunshines to stars using the formula: stars = sunshines / 180
 * @param sunshines - The amount of sunshines to convert
 * @returns The equivalent number of stars
 */
export function solarForge(sunshines: number): number {
    return sunshines / 180;
}

