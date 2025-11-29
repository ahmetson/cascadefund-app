import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { RoadmapPanel } from './RoadmapPanel'
import { ActionProps } from '@/types/eventTypes'
import { ProjectVersionProps, Issue } from '../project/ProjectVersionPanel'

const meta: Meta<typeof RoadmapPanel> = {
    title: 'Components/Maintainer/Roadmap Panel',
    component: RoadmapPanel,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A roadmap panel component that displays project versions with different statuses (active, planned, completed). Features version cards with progress tracking, feature lists, issue completion status, and action buttons. Supports drag-and-drop for active and planned versions.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        actions: {
            control: { type: 'object' },
            description: 'Optional array of action buttons/links to display at the bottom of the panel',
        },
        versions: {
            control: { type: 'object' },
            description: 'Array of version objects to display, each with status, features, and metadata',
        },
    },
}

export default meta
type Story = StoryObj<typeof RoadmapPanel>

const mockActiveVersion: ProjectVersionProps = {
    version: "v2.5.0",
    authors: ["ahmetson"],
    date: Math.floor(new Date("Oct 12, 2023").getTime() / 1000),
    status: "active",
    projectId: "project-1",
    issues: [
        {
            title: "Dark mode implementation",
            id: "issue-1",
            uri: "/issues/1",
            completed: true,
            maintainer: "ahmetson",
            contributor: "contributor1",
            sunshines: 150
        },
        {
            title: "Tablet responsive layout fixes",
            id: "issue-2",
            uri: "/issues/2",
            completed: false,
            maintainer: "ahmetson",
            contributor: "contributor2",
            sunshines: 200
        },
        {
            title: "Google Calendar integration",
            id: "issue-3",
            uri: "/issues/3",
            completed: false,
            maintainer: "ahmetson",
            contributor: "contributor3",
            sunshines: 180
        }
    ],
    completedIssues: 1,
    totalIssues: 3
}

const mockPlannedVersion: ProjectVersionProps = {
    version: "v2.6.0",
    date: Math.floor(new Date("Oct 12, 2023").getTime() / 1000),
    authors: ["ahmetson"],
    status: "planned",
    projectId: "project-1",
    issues: [
        {
            title: "Advanced filtering options",
            id: "issue-4",
            uri: "/issues/4",
            completed: false,
            maintainer: "ahmetson",
            contributor: "contributor4",
            sunshines: 120
        },
        {
            title: "API rate limit improvements",
            id: "issue-5",
            uri: "/issues/5",
            completed: false,
            maintainer: "ahmetson",
            contributor: "contributor5",
            sunshines: 100
        }
    ],
    completedIssues: 0,
    totalIssues: 2
}

const mockCompletedVersion: ProjectVersionProps = {
    version: "v2.4.0",
    authors: ["ahmetson"],
    date: Math.floor(new Date("Oct 13, 2023").getTime() / 1000),
    status: "completed",
    projectId: "project-1",
    issues: [
        {
            title: "Discovered authentication system",
            id: "issue-6",
            uri: "/issues/6",
            completed: true,
            maintainer: "ahmetson",
            contributor: "contributor6",
            sunshines: 250
        },
        {
            title: "New dashboard experience",
            id: "issue-7",
            uri: "/issues/7",
            completed: true,
            maintainer: "ahmetson",
            contributor: "contributor7",
            sunshines: 300
        },
        {
            title: "Performance optimizations",
            id: "issue-8",
            uri: "/issues/8",
            completed: true,
            maintainer: "ahmetson",
            contributor: "contributor8",
            sunshines: 220
        }
    ],
    completedIssues: 3,
    totalIssues: 3
}

const mockActions: ActionProps[] = [
    {
        className: "border-2 border-dashed border-gray-300",
        children: "Add another version",
        uri: "#"
    }
]

// Default story with active and planned versions
export const Default: Story = {
    args: {
        versions: [mockActiveVersion, mockPlannedVersion],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Default roadmap view showing active and planned versions with action buttons. Active versions show progress bars and can accept drag-and-drop issues.',
            },
        },
    },
}

// Only active version
export const ActiveVersion: Story = {
    args: {
        versions: [mockActiveVersion],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Roadmap with a single active version showing progress (1/3 issues completed). Active versions display AvatarList and can accept dragged issues.',
            },
        },
    },
}

// Only planned version
export const PlannedVersion: Story = {
    args: {
        versions: [mockPlannedVersion],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Roadmap with a single planned version. Planned versions show features to be implemented and have a "Check" action button.',
            },
        },
    },
}

// Completed versions (archive)
export const CompletedVersions: Story = {
    args: {
        versions: [mockCompletedVersion],
    },
    parameters: {
        docs: {
            description: {
                story: 'Archive view showing completed versions. Completed versions display checkmarks for all features and show a star rating indicator instead of action buttons.',
            },
        },
    },
}

// Mixed statuses
export const MixedStatuses: Story = {
    args: {
        versions: [
            mockActiveVersion,
            mockPlannedVersion,
            {
                version: "v2.3.0",
                authors: ["developer1", "developer2"],
                date: Math.floor(new Date("Sep 28, 2023").getTime() / 1000),
                status: "completed",
                projectId: "project-1",
                issues: [
                    {
                        title: "Bug fixes",
                        id: "issue-9",
                        uri: "/issues/9",
                        completed: true,
                        maintainer: "developer1",
                        contributor: "contributor9",
                        sunshines: 180
                    },
                    {
                        title: "Security improvements",
                        id: "issue-10",
                        uri: "/issues/10",
                        completed: true,
                        maintainer: "developer2",
                        contributor: "contributor10",
                        sunshines: 200
                    }
                ],
                completedIssues: 5,
                totalIssues: 5
            }
        ],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Roadmap showing multiple versions with different statuses: active, planned, and completed. Demonstrates the visual differences between status types.',
            },
        },
    },
}

// Without actions
export const WithoutActions: Story = {
    args: {
        versions: [mockActiveVersion, mockPlannedVersion],
    },
    parameters: {
        docs: {
            description: {
                story: 'Roadmap without action buttons. The bottom action section is hidden when no actions are provided.',
            },
        },
    },
}

// Single version without progress
export const VersionWithoutProgress: Story = {
    args: {
        versions: [
            {
                version: "v2.7.0",
                authors: ["ahmetson"],
                date: Math.floor(new Date("Nov 1, 2023").getTime() / 1000),
                status: "planned",
                projectId: "project-1",
                issues: [
                    {
                        title: "New feature exploration",
                        id: "issue-11",
                        uri: "/issues/11",
                        completed: false,
                        maintainer: "ahmetson",
                        contributor: "contributor11",
                        sunshines: 90
                    },
                    {
                        title: "UI/UX improvements",
                        id: "issue-12",
                        uri: "/issues/12",
                        completed: false,
                        maintainer: "ahmetson",
                        contributor: "contributor12",
                        sunshines: 110
                    }
                ],
                // No completedIssues or totalIssues
            }
        ],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Planned version without progress tracking. When completedIssues and totalIssues are not provided, the progress bar is not displayed.',
            },
        },
    },
}

// Empty roadmap
export const Empty: Story = {
    args: {
        versions: [],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Empty roadmap with no versions. Only the action buttons are displayed.',
            },
        },
    },
}

