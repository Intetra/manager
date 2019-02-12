import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './src/components/common';
import reducers from './src/reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText='Manager' />
      </View>
    </Provider>
  );
};

export default App;