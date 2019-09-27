import React from 'react';
import MyFile from './src/myFile';
import {createStore} from 'redux';
import {reducer} from './src/reducers/CounterReducer';
import {Provider} from 'react-redux';

const App = () => {
  const store=createStore(reducer)
  return(
    <Provider store={store}>
        <MyFile/>
  </Provider>
  )
}
export default App;


