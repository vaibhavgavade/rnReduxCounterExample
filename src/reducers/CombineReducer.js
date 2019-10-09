import {combineReducers} from 'redux';
import {reducer} from './CounterReducer';
import {LoaderReducer} from './LoderReducer'
import {SearchReducer} from './SearchReducer'
const rootReducer= combineReducers({
    data:reducer,
    loaderRe:LoaderReducer,
    search:SearchReducer
})
export {rootReducer}