import { actions } from 'astro:actions';
import type { Version } from '@/types/roadmap';

/**
 * Get versions by galaxy ID
 */
export async function getVersions(galaxyId: string): Promise<Version[]> {
    try {
        const result = await actions.getVersionsByGalaxy({ galaxyId });
        return result.data?.versions || [];
    } catch (error) {
        console.error('Error fetching versions:', error);
        return [];
    }
}

