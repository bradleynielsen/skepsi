export default function reducer(state={
    user: '',
    inputName: ''
  }, action) {

    switch (action.type) {
      case 'CHANGE_USER':
        return {...state, user: state.inputName, inputName: ''}
      case 'CHANGE_INPUT_NAME':
        return {...state, inputName: action.payload}
      default:
        return state;
    }
}
