import {List, fromJS} from 'immutable'
import {DATAVIEW_LIST_GET_2} from './action'
const ACTION_HANDLERS = {
  [DATAVIEW_LIST_GET_2]: (state, action) => (
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
