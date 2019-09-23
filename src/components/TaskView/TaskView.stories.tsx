import React from 'react'
import { storiesOf } from '@storybook/react'

import { Task } from 'models/Task'

import { TaskView } from './TaskView'

const task: Task = {
  id: '1',
  title: 'Test title',
  state: 'TODO',
}

storiesOf('TaskView', module)
  .add('default', () => <TaskView task={ task } />)
  .add('pinned', () => <TaskView task={{ ...task, state: 'PINNED' }} />)
  .add('archived', () => <TaskView task={{ ...task, state: 'ARCHIVED' }} />)
