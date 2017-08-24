export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload
    // or, the payload does not have a .then propery
    // we dont care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action)
    }

    // Make sure the actions promise resolves
    action.payload
      .then(response => {
        // take everything in the action and then replace payload with the response
        // this is now a new action
       const newAction = { ...action, payload: response.data }
       dispatch(newAction)
      })
  }
}
