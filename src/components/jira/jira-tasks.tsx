import { useState, type DragEvent } from 'react'
import classNames from 'classnames'
import Swal from 'sweetalert2'
import { IoAddOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { useTaskStore } from '../../stores/tasks'
import { SingleTask } from './single-task'
import type { Task, TaskStatus } from '../../interfaces/task'

interface Props {
  title: string
  status: TaskStatus
  tasks: Task[]
}

export function JiraTasks({ title, status, tasks }: Props) {
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

  return (
    <div
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={handleOnDrop}
      className={
        classNames(
          '!text-black border-4 relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]',
          {
            'border-blue-500 border-dotted': isDragging,
            'border-green-500 border-dotted': isDragging && onDragOver
          }
        )
      }
    >
      <div className='relative flex flex-row justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100'>
            <span className='flex justify-center items-center h-6 w-6 text-brand-500'>
              <IoCheckmarkCircleOutline style={{ fontSize: '50px' }} />
            </span>
          </div>

          <h4 className='ml-4 text-xl font-bold text-navy-700'>
            {title}
          </h4>
        </div>

        <button onClick={handleAddTask}>
          <IoAddOutline />
        </button>
      </div>

      <div className='h-full w-full'>
        {tasks.map(task => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
