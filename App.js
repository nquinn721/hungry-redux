import React from 'react';
import { Provider, connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import store from './app/redux/store';
import Index from './app/index';


class App extends React.Component{
  render(){
    // return <Text>HI</Text>
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

export default App;
