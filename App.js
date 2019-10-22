import React, {Component} from 'react';
import MainRoot from './component/MainRoot';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Store, persistor} from './src/Store';
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainRoot />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
