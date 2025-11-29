import Strikethrough from '@/components/animate-ui/strikethrough'
import React from 'react'
import SelectableItem, { SelectableItemProps } from '../list/SelectableItem'

interface TaskItemProps extends Omit<SelectableItemProps, 'children'> {
  title: string
  points: number
  time: string
  isHighlighted?: boolean
  id?: string
  completedId?: string
}

const TaskItem: React.FC<TaskItemProps> = ({ ref, onClick: onTaskClick, selectedId: selectedTaskId, completedId: completedTaskId, id, title, points, time, isHighlighted = false }) => {
  isHighlighted = isHighlighted || selectedTaskId === id;
  const isCompleted = completedTaskId === id;

  return (
    <div ref={ref}>
      <Strikethrough id={id!} checked={isCompleted}>
        <SelectableItem selectedId={selectedTaskId} id={id!} onClick={onTaskClick} iconClassName={isCompleted ? 'bg-green-700 border-green-700' : 'border-green-300 dark:border-green-700'}>
          <div className={`text-sm ${isCompleted ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-gray-300'}`}>
            {title}
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs font-medium text-green-600 dark:text-green-500">+{points} pts</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{time}</span>
          </div>
        </SelectableItem>
      </Strikethrough>
    </div>
  )
}

export default TaskItem
