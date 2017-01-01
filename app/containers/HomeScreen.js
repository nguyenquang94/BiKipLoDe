import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';

import { Container, Header, Card, CardItem, Thumbnail, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem, Subtitle, H3 } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

import { openSideMenu } from '../actions/sidemenu';
import { Define } from '../Define';
import { goToHomeDetailDetail, goToTWebLinkl } from '../actions/nav'
import { requestHomeDetail } from '../actions/me'
import { AdMobBanner } from 'react-native-admob';
import moment from 'moment';
var win = Dimensions.get('window');

class HomeScreen extends Component {

	componentDidMount() {
	}

	_openLink(item) {
		global.link = 'http://ketqua.net/so-ket-qua';
		global.title = 'Kết Quả Lô Tô';
		this.props.dispatch(goToTWebLinkl());
	}

	render() {
		var current_date = new moment ().format("DD-MM-YYYY");
		var screen = Dimensions.get('window');
		const { dispatch, absence } = this.props;
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header>
			            <Left style={{flex: 1}}>
			                <Button transparent onPress={() => dispatch(openSideMenu())}>
			                    <Icon name='menu' />
			                </Button>
			            </Left>
			            <Body style={{flex: 3}}>
			                <Title>Xổ số Việt Nam</Title>
			                <Subtitle>{current_date}</Subtitle>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        <Content style={{padding: 5, marginBottom: 5}}>
			        	<Card>
			           		<CardItem>
				                <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> this._openLink()}>
				                  <Text>Kết quả Lô Tô</Text>
				                  <Text note>Kết quả, dự đoán, thống kê</Text>
				                </TouchableOpacity>
				            </CardItem>
				            <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> this._openLink()}>
				            <CardItem cardBody>
				            	
						            <Image
										style={{flex: 1, resizeMode: 'contain', height: 150, borderColor: 'black',borderWidth: 1}}
										source={require('../images/loto.jpg')}
									/>
								
				            </CardItem>
				            </TouchableOpacity>
			           	</Card>
			           	<Card>
			           		<CardItem>
				                <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> 
				                			dispatch(requestHomeDetail('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxskt.com.vn%2Frss-feed%2Fmien-bac-xsmb.rss'))}>
				                  <Text>Xổ số miền Bắc</Text>
				                  <Text note>Cập nhật liên tục trong ngày</Text>
				                </TouchableOpacity>
				            </CardItem>
				            <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> 
				                			dispatch(requestHomeDetail('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxskt.com.vn%2Frss-feed%2Fmien-bac-xsmb.rss'))}>
				            <CardItem cardBody>
				            	
						            <Image
										style={{flex: 1, height: 150,resizeMode: 'contain', borderColor: 'black',borderWidth: 1}}
										source={require('../images/mienbac.png')}
									/>
								
				            </CardItem>
				            </TouchableOpacity>
			           	</Card>
			           	<Card>
			           		<CardItem>
				                <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> 
				                			dispatch(requestHomeDetail('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxskt.com.vn%2Frss-feed%2Fmien-nam-xsmn.rss'))}>
				                  <Text>Xổ số miền Nam</Text>
				                  <Text note>Cập nhật liên tục trong ngày</Text>
				                </TouchableOpacity>
				            </CardItem>
				            <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> 
				                			dispatch(requestHomeDetail('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxskt.com.vn%2Frss-feed%2Fmien-nam-xsmn.rss'))}>
					            <CardItem cardBody>
						            <Image
										style={{flex: 1, height: 150, borderColor: 'black',borderWidth: 1}}
										source={require('../images/miennam.png')}
									/>
					            </CardItem>
				            </TouchableOpacity>
			           	</Card>
			           	<Card>
			           		<CardItem>
				                <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> 
				                			dispatch(requestHomeDetail('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxskt.com.vn%2Frss-feed%2Fmien-trung-xsmt.rss'))}>
				                    <Text>Xổ số miền Trung</Text>
				                    <Text note>Cập nhật liên tục trong ngày</Text>
				                </TouchableOpacity>
				            </CardItem>
				            <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> 
				                			dispatch(requestHomeDetail('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxskt.com.vn%2Frss-feed%2Fmien-trung-xsmt.rss'))}>
					            <CardItem cardBody>
						            <Image
										style={{flex: 1, height: 150, borderColor: 'black',borderWidth: 1}}
										source={require('../images/mientrung.jpg')}
									/>
					            </CardItem>
				            </TouchableOpacity>
			           	</Card>
			           	<Card>
			           		<CardItem>
				                <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> 
				                			dispatch(requestHomeDetail('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxskt.com.vn%2Frss-feed%2Ftp-hcm-xshcm.rss'))}>
				                    <Text>Xổ số Kiến thiết TP Hồ CHí Minh</Text>
				                    <Text note>Cập nhật liên tục trong ngày</Text>
				                </TouchableOpacity>
				            </CardItem>
				            <TouchableOpacity style={{flexDirection: 'column'}} onPress={ ()=> 
				                			dispatch(requestHomeDetail('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxskt.com.vn%2Frss-feed%2Ftp-hcm-xshcm.rss'))}>
					            <CardItem cardBody>
						            <Image
										style={{flex: 1, height: 150, borderColor: 'black',borderWidth: 1}}
										source={require('../images/tphcm.jpg')}
									/>
					            </CardItem>
				            </TouchableOpacity>
			           	</Card>
			        </Content>
			        <AdMobBanner
                        bannerSize="banner"
                        adUnitID="ca-app-pub-7350182379499361/8563659309"
                        testDeviceID="EMULATOR"
                        didFailToReceiveAdWithError={this.bannerError}/>
			    </Container>
			</StyleProvider>
		);
	}

	goToLinkWeb(link){
		Linking.openURL(link);
	}
}

function mapStateToProps(state) {
	const {
		rootScreen,
		absence,
	} = state;

	return {
		rootScreen,
		absence,
	}
}

export default connect(mapStateToProps)(HomeScreen)