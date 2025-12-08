export interface Patch {
  issueId: string
  completed: boolean
  title: string
}

export interface Version {
  _id?: string
  galaxy: string
  tag: string
  createdTime: number
  status: 'completed' | 'active' | 'planned'
  patches: Patch[]
  maintainer: string
}

