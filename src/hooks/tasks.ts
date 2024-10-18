import { useState, type DragEvent } from 'react'
import Swal from 'sweetalert2'
import { useTaskStore } from '../stores/tasks'
import { TaskStatus } from '../interfaces/task'

export function useTasks(status: TaskStatus) {
  const isDragging = useTaskStore(state => !!state.draggingTaskId)

  const onTaskDrop = useTaskStore(state => state.onTaskDrop)
  const addTask = useTaskStore(state => state.addTask)

  const [onDragOver, setOnDragOver] = useState(false)

  const handleAddTask = async () => {
    const { isConfirmed, value } = await Swal.fire({
      title: 'New task',
      input: 'text',
      inputLabel: 'Task name',
      inputPlaceholder: 'Enter the task name',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You must enter a name for the task'
        }
      }
    })

    if (!isConfirmed) return

    addTask(value, status)
  }

  const handleOnDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    setOnDragOver(true)
  }

  const handleOnDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    setOnDragOver(false)
  }

  const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    setOnDragOver(false)

    onTaskDrop(status)
  }

  return {
    isDragging,
    onDragOver,

    handleAddTask,
    handleOnDragOver,
    handleOnDragLeave,
    handleOnDrop
  }
}
