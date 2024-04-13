const defaultState = {
    user: [
        
    ]
}


export function userReducer(state = defaultState, action) {
    if (action.type == 'addUser') {
        return { ...state, user: state.user + action.payload }
    } else if (action.type == 'deleteUser') {
        return { ...state, user: state.user - action.payload }
    } else {
        return { state }
    }
}