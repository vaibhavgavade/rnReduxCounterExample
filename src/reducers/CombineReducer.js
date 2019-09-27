import {combineRedicers} from 'redux'
import {reducer} from './CounterReducer'
export default combineRedicers({
    data:reducer
})