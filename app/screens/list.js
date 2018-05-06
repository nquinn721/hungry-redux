import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, TouchableOpacity, Image, ListView, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckBox from 'react-native-checkbox';


const ds = new ListView.DataSource({
    rowHasChanged: (r1,r2) => r1 != r2
});

class List extends React.Component{
    state = {
        dataSource: ds.cloneWithRows([{name: 'restaurant'}]),
        selected: [],
        restaurants: [],
        loading: false
    };

    componentWillMount(){
        this.setState({restaurants: this.props.restaurants.restaurants});
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
        return location
    }
    checked = true;
    renderRow(item, index){
        let address = this.buildAddress(item);
        return(
            <TouchableOpacity key={index} onPress={() => this.checkItem(index)}>
                <View style={styles.listItem}>
                    <View style={styles.left}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.address}>{address}</Text>
                        {/*<Text>{item.price}</Text>*/}
                        {/*<Text style={styles.type}>{item.categories[0].title}</Text>*/}
                    </View>
                    <CheckBox
                            style={styles.checkbox}
                            label=""
                            checked={!item.disabled}
                            onChange={() => this.checkItem(index)}
                    />
                    </View>
            </TouchableOpacity>
        )
    }
    checkItem(index){
        this.props.restaurants.disable(index);
        this.setState({checked: true});
    }
    render(){
        let {restaurants} = this.props.restaurants;
        if(!restaurants){
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#aaa'}}>No Restaurants found</Text>
                </View>
            );
        }
        return(
            <ScrollView style={styles.listContainer}>
                <Text style={styles.intro}>
                    Customize your choice list
                </Text>
                {
                    restaurants.map((r, i) => {
                        return this.renderRow(r, i);
                    })
                }
            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    listContainer:{
        flex: 1,
        backgroundColor:"white"
    },
    intro : {
        padding:10,
        fontSize: 16
    },
    list: {

    },
    listItem: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding:10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    left:{
        alignSelf: 'flex-start',
        flexDirection: 'column',
    },
    name: {
        color:'#e67e22',
        // fontFamily:'HelveticaNeue-bold',
        fontSize:15
    },
    address: {
        fontSize:12
    },
    type:{
        color:'grey',
        fontSize:10
    }

});
export default connect(
  (state) => ({restaurants: state.restaurants}), 
  // (dispatch) => (bindActionCreators({setRestaurant}, dispatch))
)(List);