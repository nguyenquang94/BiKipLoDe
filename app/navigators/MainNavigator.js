import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import RootScreen from '../containers/RootScreen';
import HomeScreen from '../containers/HomeScreen';
import HomeDetailScreen from '../containers/HomeDetailScreen';
import NewsScreen from '../containers/NewsScreen';
import DuDoanScreen from '../containers/DuDoanScreen';
import TinhThanhScreen from '../containers/TinhThanhScreen';
import TinhThanhDetailScreen from '../containers/TinhThanhDetailScreen';
import ShowWebLink  from '../containers/ShowWebLink';

export const MainNavigator = StackNavigator({
	Root: { screen: RootScreen },
	Home: { screen: HomeScreen },
	HomeDetail: { screen: HomeDetailScreen},
	News: { screen: NewsScreen},
	DuDoan: { screen: DuDoanScreen},
	TinhThanh: { screen: TinhThanhScreen},
	TinhThanhDetail: { screen: TinhThanhDetailScreen},
	ShowWebLink: { screen: ShowWebLink},
}, {
	headerMode: 'none'
});

class MainNavigatorScreen extends Component {
	render() {
		return (
			<MainNavigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
			})} />
		);
	}
}

function mapStateToProps(state) {
	return {
		nav: state.nav
	}
}

export default connect(mapStateToProps)(MainNavigatorScreen);