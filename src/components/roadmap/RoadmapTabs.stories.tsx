import type { Meta, StoryObj } from '@storybook/react'
import RoadmapTabs from './RoadmapTabs'

const meta: Meta<typeof RoadmapTabs> = {
    title: 'Components/Maintainer/Roadmap Tabs',
    component: RoadmapTabs,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A tabbed interface for managing project roadmaps. Displays two tabs: Roadmap (showing active and planned versions) and Archive (showing completed versions). Includes version cards with progress tracking, feature lists, and action buttons for adding new versions.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RoadmapTabs>

// Default story showing the roadmap tabs
export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Default view of the Roadmap Tabs component showing the Roadmap tab active. Displays active and planned versions with progress bars, feature lists, and action buttons.',
            },
        },
    },
}

// Archive tab view (story would show archive if component allowed tab switching)
// Since the component doesn't expose props, we document the archive tab behavior
export const WithArchive: Story = {
    parameters: {
        docs: {
            description: {
                story: 'The Archive tab contains completed versions. Completed versions show checkmarks for all features and display star ratings instead of action buttons. Users can switch between Roadmap and Archive tabs.',
            },
        },
    },
}

