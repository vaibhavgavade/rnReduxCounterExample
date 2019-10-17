import {COUNTER_INCREASE} from '../../actions/Types';
import {COUNTER_DECREASE} from '../../actions/Types';
import {FETCH_DATA} from '../../actions/Types';
import {LOADER_LOADING} from '../../actions/Types'
const INITIAL_STATE={
        count:0,
}
export const reducer=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        case COUNTER_INCREASE:{
            return{
                ...state, count:state.count+1
            }
        }
        case COUNTER_DECREASE:{
            return{
                ...state, count:state.count-1
            }
        }
      default:
            return state
    }
}