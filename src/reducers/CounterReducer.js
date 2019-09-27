import {ADD_COUNTER} from '../../actions/Types'
const INITIAL_STATE={
        count:0
}
export const reducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ADD_COUNTER:{
            return{
                ...state, count:action.payload
            }
        }

        default:
            return state
    }

}