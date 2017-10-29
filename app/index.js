import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from './components/nav';
import gStyles from './config/globalStyles';
import Header from './screens/header';


class Index extends React.Component{

  
  render(){
    const isFetching = false;
    return (
      <View style={gStyles.container}>
        <View style={styles.statusBar}></View>
        <Header />
        {isFetching ? 
          <View style={gStyles.containerCenter}><ActivityIndicator size="large" color="red"/></View> : 
          <Nav />
        }
      </View>
      );
  }
}


const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor:'#e67e22'
  }
})




export default connect(
  // (state) => ({user: state.user}), 
  // (dispatch) => (bindActionCreators({login}, dispatch))
)(Index);