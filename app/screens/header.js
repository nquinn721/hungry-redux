import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
import { connect } from 'react-redux';
const height = Dimensions.get('window').height; 

class Header extends React.Component {
    constructor(navigator){
        super();
        this.navigator = navigator;

    }
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>Hungry?</Text>
            </View>

        );
    }
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height * .06,
        backgroundColor: '#e67e22',
    },
    text: {
        color:'white',
        // fontFamily: 'ArialRoundedMTBold',
        fontSize: 20
    }
});

export default connect(
  // (state) => ({Shake: state.Shake}), 
  // (dispatch) => (bindActionCreators({getShake, getDates}, dispatch))
)(Header);