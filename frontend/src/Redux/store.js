import {createStore} from 'redux'
import rootReducer,{initState} from './reducer.js'



const store = createStore(rootReducer,initState)

export default store