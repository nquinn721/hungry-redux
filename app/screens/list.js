import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated, TouchableOpacity, Image, ListView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckBox from 'react-native-check-box';
import { setRestaurant } from '../redux/actions/restaurants';

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
    renderRow(item){
        let address = this.buildAddress(item);
        return(
            <TouchableOpacity>
                <View style={styles.listItem}>
                    <View style={styles.left}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.address}>{address}</Text>
                        {/*<Text>{item.price}</Text>*/}
                        {/*<Text style={styles.type}>{item.categories[0].title}</Text>*/}
                    </View>
                    <CheckBox
                            style={styles.checkbox}
                            isChecked={typeof item.checked === 'undefined' ? true : item.checked}
                            onClick={() => this.checkItem(item)}
                    />
                    </View>
            </TouchableOpacity>
        )
    }
    render(){
                // {this.state.loading ? <Text>Loading...</Text>: <ListView
                //     style={styles.list}
                //     dataSource={this.state.dataSource}
                //     renderRow={(data) => this.renderRow(data)}
                // />}

        return(
            <View style={styles.listContainer}>
                <Text style={styles.intro}>
                    Customize your choice list
                </Text>
                {
                    this.state.restaurants.map((r, i) => {
                        return (<TouchableOpacity key={i} onPress={() => this.props.setRestaurant(r)}><Text>{r.name}</Text></TouchableOpacity>)
                    })
                }
            </View>
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
        borderWidth: 0.5,
        borderColor: 'black',
        padding:10,
        flex:1,
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
    },
    checkbox:{
        marginRight:10,
        alignSelf: 'center',
    }

});
export default connect(
  (state) => ({restaurants: state.restaurants}), 
  (dispatch) => (bindActionCreators({setRestaurant}, dispatch))
)(List);