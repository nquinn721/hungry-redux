import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Image from 'react-native-image-progress';
import { setRestaurant } from '../redux/actions/restaurants';
import { ShakeEventExpo } from '../components/shakeEvent';

class Shake extends React.Component {
    state = {
        showResult : false,
        title: "You Hungry?",
        description: "Hungry will help you find the best restaurant choices base on your personal preference.",
        image : {uri: ''},
        restaurants: [
          {name: 'Donatos', }
        ]
    }


    buildAddress(item){
        let location  = '';
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
                </View>
            </View>
        )


    }
}

let styles = StyleSheet.create({
    restaurant:{
        flex: 1,
        backgroundColor:'#f7f8fc',
    },
    container : {
        flex: 1,
        margin:20,
        alignItems: 'center',
        borderWidth:1,
        borderRadius: 10,
        borderColor: '#e4e5e9',
        backgroundColor:'white',
        shadowColor: "#e4e5e9",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 4,
        }

    },
    title : {
        color:'#e67e22',
        marginTop:30,
        fontSize:25,
        height:70,
        padding: 10,
        textAlign: 'center'
        // fontFamily:'HelveticaNeue-bold'
    },
    img : {
        height:280,
        width:332,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
        // borderRadius: 125,
        // borderWidth:1,
        // borderColor:'#e67e22',
    },
    text : {
        color:'#404142',
        textAlign: 'center',
        fontSize: 14
    },

    button : {
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        paddingBottom:10,

        borderColor: '#e67e22',
        backgroundColor : '#e67e22',
    },

    buttonText : {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        // fontFamily:'HelveticaNeue-bold'
    },

    afterButton : {
        marginTop: 5
    }
});


export default connect(
  (state) => ({restaurants: state.restaurants}), 
  (dispatch) => (bindActionCreators({setRestaurant}, dispatch))
)(Shake);