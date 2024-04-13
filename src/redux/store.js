import { createStore, combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { composeWithDevTools } from '@redux-devtools/extension'

const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
