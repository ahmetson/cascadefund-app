import React from 'react'
import Tabs, { TabProps } from '../Tabs'
import Badge from '../badge/Badge'
import { ProjectVersionProps } from '../project/ProjectVersionPanel';
import RoadmapPanel from './RoadmapPanel'
import { Popover } from '@base-ui-components/react/popover';
import { ActionProps } from '@/types/eventTypes';


const RoadmapTabs: React.FC = () => {
  const notificationBanner = <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
    <div className="flex items-center space-x-2 mb-2">
      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      <span className="text-sm font-medium text-green-800">Marked as complete!</span>
    </div>
    <p className="text-xs text-green-700">
      Wow! Informed 5 people who were waiting for this release.
    </p>
  </div>

  const archive: ProjectVersionProps[] = [
    {
      version: "v2.4.0",
      authors: ["ahmetson"],
      date: Math.floor((Date.now() - 2 * 365 * 24 * 60 * 60 * 1000) / 1000), // 2 years ago
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
  ]
  const versions: ProjectVersionProps[] = [{
    version: "v2.5.0",
    authors: ["ahmetson"],
    date: Math.floor((Date.now() - 1 * 365 * 24 * 60 * 60 * 1000) / 1000), // 1 year ago
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
  }, {
    version: "v2.6.0",
    date: Math.floor((Date.now() - 2 * 365 * 24 * 60 * 60 * 1000) / 1000), // 2 years ago
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
  }]

  const actions: ActionProps[] = [
    {
      className: "",
      variant: "secondary" as const,
      children: "New version",
      popoverContent: "Form to add another version"
    }
  ]

  const tabs: TabProps[] = [
    {
      label: <div className=''>Roadmap <Badge variant='gray'>{versions.length}</Badge></div>,
      key: "roadmap",
      content: <RoadmapPanel actions={actions} versions={versions} />
    },
    {
      label: <div className=''>Archive <Badge variant='gray'>{archive.length}</Badge></div>,
      key: "archive",
      content: <RoadmapPanel versions={archive} />
    },
  ]

  return (
    <Tabs id="versions" activeTab='roadmap' tabs={tabs} />
  )
}

export default RoadmapTabs
