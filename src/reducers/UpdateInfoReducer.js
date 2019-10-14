import {UPDATE_INFO} from '../../actions/Types'
INITIAL_STATE={
    lat:'37.8267',
    long:'-122.4233',
    loc:'Mumbai',
    
}

export const UpdateInfoReducer=(state=INITIAL_STATE,action)=>{
console.log("bla bla bla action called",action)
   switch(action.type){
       case UPDATE_INFO:{
           return {
               ...state,
               lat:(state.lat=action.payload.lat),
               long:(state.long=action.payload.long),
               loc:(state.long=action.payload.loc)
           }
        }
        default:{
            return state;
        }
    }
}