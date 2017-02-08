export function incrementCount() {
  return {
    type: 'INC_COUNT'
  }
}

export function decrementCount() {
  return {
    type: 'DEC_COUNT'
  }
}

export function changeInputNum(num) {
  return {
    type: 'CHANGE_INPUT_NUM',
    payload: num
  }
}
