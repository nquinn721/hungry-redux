import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


// Stack Nav Items 
import Shake from '../screens/shake';
import List  from '../screens/list';


const tabRoutes = {
	Shake: {
		screen: Shake,
		navigationOptions: {
			tabBarIcon: ({tintColor}) => <Icon name='comments-o' size={25} type='font-awesome'color={tintColor}/>,
		}
	},
	List: {
		screen: List,
		navigationOptions: {
			tabBarIcon: ({tintColor}) => <Icon name='list' size={25} type='font-awesome' color={tintColor}/>,
		}
	}
};
const tabConfig = {
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	lazyLoad: true,
	animationEnabled: false,
	tabBarOptions: {
		activeTintColor: '#2980b9',
		activeBackgroundColor: 'white',
		inactiveBackgroundColor: 'white',
	}

}

export const TabBar = TabNavigator(tabRoutes, tabConfig);

