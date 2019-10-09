import {SEARCH_RESULT} from '../../actions/Types';
const   INITIAL_STATE={
        data:[]
}
    export const SearchReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SEARCH_RESULT:{
            return action.result
        }
        default:
            return state
        }
}