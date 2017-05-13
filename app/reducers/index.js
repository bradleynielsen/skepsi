import { combineReducers } from 'redux'

import login from './loginReducer'
import note from './noteReducer'

export default combineReducers({
  // this sends out "counterReducer" as "counter" to be called in some page.js like userview.js as "store.counter.inputNum,"
  note,
  login
})
