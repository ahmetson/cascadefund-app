export interface Patch {
  id: string
  completed: boolean
  tested?: boolean
  title: string
  sunshines?: number
}

export interface Version {
  _id?: string
  galaxy: string
  tag: string
  createdTime: number
  status: 'complete' | 'testing' | 'release' | 'archived'
  patches: Patch[]
  maintainer: string
}

