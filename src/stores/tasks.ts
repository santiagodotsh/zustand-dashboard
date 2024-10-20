import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { v4 as uuid } from 'uuid'
import { type Task, TaskStatus } from '../interfaces/task'

interface TaskState {
  draggingTaskId?: string
  tasks: Record<string, Task>

  getTaskByStatus: (status: TaskStatus) => Task[]
  addTask: (title: string, status: TaskStatus) => void

  setDraggingTaskId: (taskId: string) => void
  removeDraggingTaskId: () => void

  changeStatus: (taskId: string, status:TaskStatus) => void

  onTaskDrop: (status: TaskStatus) => void
}

export const useTaskStore = create<TaskState>()(
  devtools(
    persist(
      immer(
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
          addTask: (title, status) => {
            const newTask = {
              id: uuid(),
              title,
              status
            }

            set(state => {
              state.tasks[newTask.id] = newTask
            }, false, 'addTask')
          },

          setDraggingTaskId: (taskId) => set({ draggingTaskId: taskId }, false, 'setDraggingTaskId'),
          removeDraggingTaskId: () => set({ draggingTaskId: undefined }, false, 'removeDraggingTaskId'),
        
          changeStatus: (taskId, status) => {
            const task = { ...get().tasks[taskId] }
            task.status = status

            set(state => {
              state.tasks[taskId] = task
            }, false, 'changeStatus')
          },
          
          onTaskDrop: (status) => {
            const taskId = get().draggingTaskId

            if (!taskId) return

            get().changeStatus(taskId, status)
            get().removeDraggingTaskId()
          }
        })
      ),
      {
        name: 'tasks'
      }
    )
  )
)
