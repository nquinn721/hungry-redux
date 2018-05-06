import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Constants, Permissions, Location } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from './components/nav';
import gStyles from './config/globalStyles';
import Header from './screens/header';
import { updateRestaurants } from './redux/actions/restaurants';
import { Icon } from 'react-native-elements';


class Index extends React.Component{
  state = {};

  componentWillMount(){
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
          return this.setState({noLocation: true});
      }


      let location = await Location.getCurrentPositionAsync({});

      if(location){
          this.props.updateRestaurants(location.coords.latitude, location.coords.longitude);
      }
  };

    render(){
        const {isFetching} = this.props.restaurants;
        if(this.state.noLocation){
            return (
                <View style={gStyles.container}>
                    <View style={styles.statusBar}></View>
                    <Header />
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}>
                        <Icon name='cutlery' size={25} type='font-awesome' color="#aaa"/>
                        <Text style={{color: '#aaa', textAlign: 'center', fontSize: 20}}>
                            Sorry, we can't get any restaurants for you without knowing where you are.
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => this._getLocationAsync()}>
                            <Text style={{color: 'white'}}>Allow Location</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
          <View style={gStyles.container}>
            <View style={styles.statusBar}></View>
            <Header />
            {isFetching ?
              <View style={gStyles.containerCenter}>
                <Text style={{color: '#e67e22'}}>Gathering restaurants...</Text>
              </View> :
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
  },
    button : {
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: '#e67e22',
        backgroundColor : '#e67e22',
    }
})




export default connect(
  (state) => ({restaurants: state.restaurants}),
  (dispatch) => (bindActionCreators({updateRestaurants}, dispatch))
)(Index);