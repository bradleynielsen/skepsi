export default function reducer(
  state={
    user: '',
    inputName: ''
  }, action) {

    switch (action.type) {
      case 'CHANGE_USER':
      //user = 

      //Object.assign({},state,{temp:67}) = "...state"
        return {...state, user: state.inputName, inputName: ''}
      case 'CHANGE_INPUT_NAME':
        return {...state, inputName: action.payload}
      default:
        return state;
    }
}

