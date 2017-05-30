import React from 'react'

import MultipleTrigger from './MultipleTrigger'

const tasks = [
  {
    id: 'ZEIT-11',
    display: 'A Fun-Little Task in JIRA',
  },
  {
    id: 'ZEIT-135',
    display: 'weird name with $some @awkward #things .in ,it',
  },
  {
    id: 'ZEIT-111',
    display: 'bla',
  },
  {
    id: 'toggltag',
    display: 'toggltag',
  },
  {
    id: 'toggl tag',
    display: 'toggl tag',
  },
  {
    id: '58ff1792db705d4aea212d75',
    display: 'Some Card Name',
  },
  {
    id: 'somezeitag',
    display: 'somezeitag',
  },
  {
    id: 'otherzeitag',
    display: 'otherzeitag',
  },
]

export default function Examples() {
  return (
    <MultipleTrigger data={ tasks } />
  )
}
