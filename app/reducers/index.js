import { combineReducers } from "redux"

import temp from "./tempReducer"


export default combineReducers({
  //this sends out "counterReducer" as "counter" to be called in some page.js like userview.js as "store.counter.inputNum,"
  temp
})
