const { createStore } = require('redux')

const ACTION_TYPES = {
  ADD: 'ADD',
  MINUS: 'MINUS'
}

const initialState = {
  value: 0
}

// pure reducer function
const reducer = (state = initialState, action) => {
  if (action.type === ACTION_TYPES.ADD) {
    return { ...state, value: state.value + action.value}
  }
  if (action.type === ACTION_TYPES.MINUS) {
    return { ...state, value: state.value - action.value}
  }
  return state
}

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// synchronous action creator
const add = (n) => {
  // returned action object
  return {
    type: ACTION_TYPES.ADD,
    value: n
  }
}

const minus = (n) => {
  return {
    type: ACTION_TYPES.MINUS,
    value: n
  }
}

store.dispatch(add(2))
store.dispatch(add(3))
store.dispatch(minus(1))

unsubscribe()
