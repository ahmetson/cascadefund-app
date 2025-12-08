import React from 'react'
import BasePanel from '@/components/panel/Panel'
import DropTarget from '../DropTarget'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import VersionPanel from './VersionPanel'
import type { Version } from '@/types/roadmap'

export interface RoadmapProps {
  versions: Version[]
}

export const RoadmapPanel: React.FC<RoadmapProps> = ({ versions }) => {
  return (
    <BasePanel className="space-y-6 p-0! border-none! min-h-[50vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {versions.map((version) =>
          version.status === 'completed' ?
            <VersionPanel key={version.tag} {...version} /> :
            <DndProvider key={version.tag} backend={HTML5Backend}>
              <DropTarget id={version.tag} accept={["issue"]} onDrop={(e) => console.log(e)}>
                <VersionPanel {...version} />
              </DropTarget>
            </DndProvider>
        )}
      </div>
    </BasePanel>
  )
}

export default RoadmapPanel
