const reducers = {};
const defaultState = {};

export default function reducer(state = defaultState, action) {
  const handler = reducers[action.type];
  return  handler ? handler(state, action) : state;
}
