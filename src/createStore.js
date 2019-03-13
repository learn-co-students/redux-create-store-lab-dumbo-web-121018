export default function createStore(reducer) {
  // add your code here
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  }

  const getState = () => {
    return state
  }

  dispatch({type: "@@init"})

  return {
    dispatch,
    getState
  }

}

function render() {
  const container = document.getElementById('container');
}
