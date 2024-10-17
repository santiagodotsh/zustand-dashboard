import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { type Task, TaskStatus } from '../interfaces/task'

interface TaskState {
  draggingTaskId?: string
  tasks: Record<string, Task>

  getTaskByStatus: (status: TaskStatus) => Task[]
  setDraggingTaskId: (taskId: string) => void
  removeDraggingTaskId: () => void
  changeStatus: (taskId: string, status:TaskStatus) => void
  onTaskDrop: (status: TaskStatus) => void
}

export const useTaskStore = create<TaskState>()(
  devtools(
    (set, get) => ({
      draggingTaskId: undefined,
      tasks: {
        'ABC-1': { id: 'ABC-1', title: 'Task 1', status: TaskStatus.Pending },
        'ABC-2': { id: 'ABC-2', title: 'Task 2', status: TaskStatus.InProgress },
        'ABC-3': { id: 'ABC-3', title: 'Task 3', status: TaskStatus.Pending },
        'ABC-4': { id: 'ABC-4', title: 'Task 4', status: TaskStatus.Pending },
        'ABC-5': { id: 'ABC-5', title: 'Task 5', status: TaskStatus.Done }
      },

      getTaskByStatus: (status) => Object.values(get().tasks).filter(task => task.status === status),
      setDraggingTaskId: (taskId) => set({ draggingTaskId: taskId }),
      removeDraggingTaskId: () => set({ draggingTaskId: undefined }),
      changeStatus: (taskId, status) => {
        const task = get().tasks[taskId]
        task.status = status

        set(state => ({
          tasks: {
            ...state.tasks,
            [taskId]: task
          }
        }))
      },
      onTaskDrop: (status) => {
        const taskId = get().draggingTaskId

        if (!taskId) return

        get().changeStatus(taskId, status)
        get().removeDraggingTaskId()
      }
    })
  )
)
