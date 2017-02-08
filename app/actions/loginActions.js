export function changeInputName(name) {
  return {
    type: 'CHANGE_INPUT_NAME',
    payload: name
  }
}

export function submitName() {
  return {
    type: 'CHANGE_USER'
  }
}
