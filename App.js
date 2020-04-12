import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	StatusBar,
	View
} from 'react-native';

import {StyleProvider, Text} from 'native-base';
import {createStackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider, connect} from 'react-redux';

import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import MainScreen from './src/components/MainScreen';
import TutorialScreen from './src/components/TutorialScreen';
import HistoryScreen from './src/components/HistoryScreen';
import Popout from './src/components/PopOut';

import {main} from './src/states/MainReducer';
import {history} from './src/states/HistoryReducer';
import {tutorial} from './src/states/TutorialReducer';
import {paypal,card,other} from'./src/components/3tutorial';

const AppNav = createStackNavigator({
	main: MainScreen,
	tutorial: TutorialScreen,
	history: HistoryScreen,
	paypal:paypal,
	card:card,
	other:other,
	popout:Popout,
	},
	{
		initialRouteName: 'popout',
		headerMode:'none',
		transform:['popout', 'main', 'fadeIn'],
	}
);

class AppWithStyle extends Component {
  render() {
    return (
    	<StyleProvider style={getTheme(platform)}>	
			<AppNav/>
		</StyleProvider>
    );
  }
}

const AppWithNavState= connect(state => ({
	//nav: state.nav
}))(AppWithStyle);

// // Nav ruducer
// // const initialState = AppNav.router.getStateForAction(NavigationActions.navigate({routeName:'main'}));
// // const nav = (state = initialState, action) => {
// // 	const nextState = AppNav.router.getStateForAction(action, state);
// // 	return nextState || state;
// // };

const store = createStore(combineReducers({
	main,history,tutorial

}), compose(applyMiddleware(thunkMiddleware, loggerMiddleware)));

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavState/>
			</Provider>
		)
	}
}