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
			tabBarIcon: ({tintColor}) => <Icon name='cutlery' size={25} type='font-awesome'color={tintColor}/>,
		}
	},
	List: {
		screen: List,
		navigationOptions: {
			title: 'Restaurants',
			tabBarIcon: ({tintColor}) => <Icon name='list' size={25} type='font-awesome' color={tintColor}/>,
		}
	}
};
const tabConfig = {
	tabBarPosition: 'bottom',
	// swipeEnabled: false,
	// lazyLoad: true,
	// animationEnabled: false,
	tabBarOptions: {
		showIcon: true,
		activeTintColor: '#e67e22',
		inactiveTintColor: 'grey',
		activeBackgroundColor: 'white',
		inactiveBackgroundColor: 'white',
		style: {
			backgroundColor: 'white',
		}
	}

}

export const TabBar = TabNavigator(tabRoutes, tabConfig);

