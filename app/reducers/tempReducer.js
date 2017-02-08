export default function reducer(state={
    temp: 0
  }, action) {

    switch (action.type) {
      //action from dipatch at "actions" folder
      case 'SET_TEMP':
        return {...state, temp: action.payload}
      default:
        return state;
    }
}
