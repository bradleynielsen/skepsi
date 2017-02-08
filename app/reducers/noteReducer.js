export default function reducer(
  state={
    textField: ''
  }, action) {

    switch (action.type) {
      case 'CHANGE_TEXTFIELD':
        return {...state, textField: action.payload}
      default:
        return state;
    }
}
