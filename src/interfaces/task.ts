export interface Task {
  id: string
  title: string
  status: TaskStatus
}

export enum TaskStatus {
  Pending = 'pending',
  InProgress = 'in-progress',
  Done = 'done'
}
