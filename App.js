import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import AppStack from './Route'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './src/reducers/CombineReducer'
import {Provider} from 'react-redux';

const App = () => {
  const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
  return(
      <Provider store={store}>
     <AppStack/>
      </Provider>
  )
}
export default App;


