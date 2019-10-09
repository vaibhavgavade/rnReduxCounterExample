import {COUNTER_INCREASE} from './Types';
import {COUNTER_DECREASE} from './Types';
import {FETCH_STARTED} from './Types';
import {FETCHING_SUCCESS} from './Types';
import {FETCHING_FAIL} from './Types'

import {LOADER_LOADING} from './Types'
import axios from 'axios'
export const CounterActionInc=(count)=>({
    type:COUNTER_INCREASE,
    payload:count 
})
export const CounterActionDec=(count)=>({
    type:COUNTER_DECREASE,
    payload:count
})

export const fetchData=()=>dispatch=>{
    const Api=`https://api.darksky.net/forecast/c7f15dc1a1352d23b77a6bfc97bd0bd6/37.8267,-122.4233`
    const request=axios.get(Api)
    console.log("fetchdata action called")
    
        dispatch({
            type:FETCH_STARTED
        })
     request.then((resdata)=>{
          dispatch({
                type:FETCHING_SUCCESS,
                payload:resdata.data
          })
          
      })
      .catch((err)=>{
            dispatch({
                type:FETCHING_FAIL, 
                payload:err
        
            })
      })
    
}

  

