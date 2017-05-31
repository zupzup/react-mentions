import React from 'react'

import MultipleTrigger from './MultipleTrigger'

const tasks = [
  {
    id: 'jira:ZEIT-11',
    display: 'A Fun-Little Task in JIRA',
  },
  {
    id: 'jira:ZEIT-135',
    display: 'weird name with $some @awkward #things .in ,it',
  },
  {
    id: 'jira:ZEIT-111',
    display: 'bla',
  },
  {
    id: 'toggl:toggltag',
    display: 'toggltag',
  },
  {
    id: 'toggl:toggl tag',
    display: 'toggl tag',
  },
  {
    id: 'trello:58ff1792db705d4aea212d75',
    display: 'Some Card Name',
  },
  {
    id: '*:somezeitag',
    display: 'somezeitag',
  },
  {
    id: '*:otherzeitag',
    display: 'otherzeitag',
  },
]

export default function Examples() {
  return (
    <MultipleTrigger data={ tasks } />
  )
}
