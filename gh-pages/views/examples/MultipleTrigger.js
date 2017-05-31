import React from 'react'

import { Mention, MentionsInput } from '../../../src'

import { provideExampleValue } from './higher-order'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'
import fuzzysearch from 'fuzzysearch';



function MultipleTriggers({ value, data, onChange, onAdd }) {
  function queryFn(query, callback) {
    const results = []
    for (let i = 0, l = data.length; i < l; ++i) {
      const display = data[i].display || data[i].id
      const current = {
        id: data[i].id.replace('@', '').replace('#', ''),
        display: data[i].display ? data[i].display.replace('@', '').replace('#', '') : data[i].display,
      }
      if (fuzzysearch(query.toLowerCase(), display.toLowerCase())) {
        results.push(current)
      }
    }
    if (query) {
      results.push({ id: query, display: query, isNew: true })
    }
    return results
  }
  return (
    <div className="multiple-triggers">
      <MentionsInput
        value={ value }
        onChange={ onChange }
        style={ defaultStyle }
        allowSpaceInQuery
        markup="[{__display__}{__type__:__id__}]"
      >
        <Mention
          trigger="@"
          type="mention"
          appendSpaceOnAdd
          data={ queryFn }
          renderSuggestion={ (entry, search, highlightedDisplay) => (
            <div className="user">
              { entry && entry.isNew ? 'Create New:' : ''} {highlightedDisplay}
            </div>)
          }
          onAdd={ onAdd }
          style={defaultMentionStyle}
        />
        <Mention
          trigger="#"
          type="tag"
          appendSpaceOnAdd
          data={ queryFn }
          renderSuggestion={ (entry, search, highlightedDisplay) => (
            <div className="user">
              { entry && entry.isNew ? 'Create New:' : ''} {highlightedDisplay}
            </div>
          )}
          onAdd={ onAdd }
          style={defaultMentionStyle}
        />
      </MentionsInput>
      <div>
        <h3>Plain Text of Note Field:</h3>
        {value}
      </div>
    </div>
  )
}
const asExample = provideExampleValue('Worked on [{A Fun-Little Task in JIRA}{tag:jira:ZEIT-11}] with [{toggltag}{mention:toggl:toggltag}] for some time!')

export default asExample(MultipleTriggers)
