import {List, fromJS} from 'immutable'
import {TEMP_LIST_GET} from './action'
const ACTION_HANDLERS = {
  [TEMP_LIST_GET]: (state, action) => (
    state.merge({...state, dataTree: action.result})
  )
}

const initialState = fromJS({
  fecting: false,
  dataTree: []
})
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}