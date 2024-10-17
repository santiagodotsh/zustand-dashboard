import { useMemo } from 'react'
import { useTaskStore } from '../../stores/tasks'
import { JiraTasks } from '../../components/jira/jira-tasks'
import { TaskStatus } from '../../interfaces/task'

export function JiraPage() {
  const tasks = useTaskStore(state => state.tasks)

  const getTaskByStatus = useTaskStore(state => state.getTaskByStatus)

  const pending = useMemo(() => getTaskByStatus(TaskStatus.Pending), [tasks])
  const inProgress = useMemo(() => getTaskByStatus(TaskStatus.InProgress), [tasks])
  const done = useMemo(() => getTaskByStatus(TaskStatus.Done), [tasks])
  
  return (
    <>
      <h1>Tasks</h1>
      <p>Managing state with Zustand objects</p>

      <hr />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <JiraTasks
          title='Pending'
          status={TaskStatus.Pending}
          tasks={pending}
        />
        <JiraTasks
          title='In-Progress'
          status={TaskStatus.InProgress}
          tasks={inProgress}
        />
        <JiraTasks
          title='Done'
          status={TaskStatus.Done}
          tasks={done}
        />
      </div>
    </>
  )
}
