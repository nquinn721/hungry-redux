import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Image from 'react-native-image-progress';
import { Icon } from 'react-native-elements';
import { setRestaurant } from '../redux/actions/restaurants';
import { ShakeEventExpo } from '../components/shakeEvent';
import  styles  from '../style/shake-style';

class Shake extends React.Component {
    state = {
        showResult : false,
        title: "You Hungry?",
        description: "Hungry will help you find the best restaurant choices base on your personal preference.",
        image : {uri: ''},
        restaurants: [
          {name: 'Donatos', }
        ]
    };


    buildAddress(item){
        let location  = '';
        console.log(item);
        if(item.location){
            if(item.location.display_address[0]){
                location = location.concat(item.location.display_address[0])
            }
            if(item.location.display_address[1]){
                location = (location.concat(', ')).concat(item.location.display_address[1])
            }
        }
        return location;
    }

    buttonPress() {
        this.props.setRestaurant(this.props.restaurants.random());

        setTimeout(() => this.waitForButtonPress = false, 2000);
    }

    favourite(r) {
        // update favourite list here
        console.log(r);
    }


    render(){
        let { currentRestaurant, restaurants } = this.props.restaurants;


        if(!restaurants){
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#aaa'}}>No restaurants found in your area</Text>
                </View>
            )
        }

        if(!this.shakeEventListener){
            this.shakeEventLisener = true;
            ShakeEventExpo.addListener(() => {
                if(!this.waitForButtonPress){
                    this.buttonPress();
                    this.waitForButtonPress = true;
                }
            });
        }

        return(
            <View style={styles.restaurant}>
                <View style={styles.container}>
                    <Text>{this.state.a}</Text>
                    <View>
                        <Image
                            style={styles.img}
                            source={{uri: currentRestaurant.image_url}}
                        />
                    </View>
                    <Text style={styles.title}>{currentRestaurant.name}</Text>
                    <Text style={styles.text}>{currentRestaurant.location && currentRestaurant.location.display_address.join(' ')}</Text>
                    <TouchableOpacity
                        onPress={this.buttonPress.bind(this)}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Let's roll</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.afterButton}>or shake phone!</Text>

                    {/*{this.state.showResult ?*/}

                    <TouchableHighlight
                        onPress={this.favourite.bind(this)}>
                        <View styles={styles.star}>
                            <Icon name='star' size={25} type='font-awesome' color="skyblue"/>
                        </View>
                    </TouchableHighlight>

                        {/*:*/}
                        {/*<View></View>*/}
                    {/*}*/}
                </View>
            </View>
        )
    }
}




export default connect(
  (state) => ({restaurants: state.restaurants}), 
  (dispatch) => (bindActionCreators({setRestaurant}, dispatch))
)(Shake);