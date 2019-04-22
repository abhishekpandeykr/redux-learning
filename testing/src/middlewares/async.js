export default ({dispatch}) => next => action => {
    debugger;
    if(!action.payload || !action.payload.then) {
        return next(action)
    }

    action.payload.then(res => {
        const newAction = {...action, payload:res};
        dispatch(newAction)
    })
}