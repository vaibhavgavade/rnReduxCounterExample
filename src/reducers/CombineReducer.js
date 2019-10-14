import {combineReducers} from 'redux';
import {reducer} from './CounterReducer';
import {LoaderReducer} from './LoderReducer';
import {SearchReducer} from './SearchReducer';
import {UpdateInfoReducer} from './UpdateInfoReducer'
const rootReducer= combineReducers({
    data:reducer,
    loaderRe:LoaderReducer,
    search:SearchReducer,
    update:UpdateInfoReducer
})
export {rootReducer}