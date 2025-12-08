import { ISSUE_EVENT_TYPES, Issue } from '@/types/issue'

/**
 * Emit issue-update event to notify components of issue changes
 */
export function emitIssueUpdate(data?: Issue): void {
    window.dispatchEvent(new CustomEvent(ISSUE_EVENT_TYPES.ISSUE_UPDATE, {
        detail: data,
    }))
}

