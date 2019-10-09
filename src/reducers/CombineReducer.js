import {combineReducers} from 'redux';
import {reducer} from './CounterReducer';
import {LoaderReducer} from './LoderReducer'
const rootReducer= combineReducers({
    data:reducer,
    loaderRe:LoaderReducer
})
export {rootReducer}