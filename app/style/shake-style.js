import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';

let styles = StyleSheet.create({
    restaurant:{
        flex: 1,
        backgroundColor:'#f7f8fc',
    },
    container : {
        flex: 1,
        margin:20,
        alignItems: 'center',
        justifyContent: 'space-between',
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
        height:250,
        width:332,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
        // borderRadius: 125,
        // borderWidth:1,
        // borderColor:'#e67e22',
    },
    text : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:280,
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
    },

    star : {

    }
});

export default styles;