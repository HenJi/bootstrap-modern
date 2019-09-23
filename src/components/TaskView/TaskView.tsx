import React from 'react'

import { Task } from 'models/Task'

interface Props {
  task: Task
}

export function TaskView(props: Props) {
  const { title } = props.task
  return (
    <div className="list-item">
      <input type="text" value={ title } readOnly={ true } />
    </div>
  )
}
