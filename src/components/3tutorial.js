import React, { Component } from 'react';
import { ImageBackground, Image, StatusBar,Dimensions} from 'react-native';
import { Container, Button, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Right, Body, Icon } from 'native-base';
import {set_tutorial} from '../states/TutorialAction.js';
import {tutorial} from '../states/TutorialReducer.js';
import {createStore} from 'redux';
import PopoutForTutorial from './PopOutForTutorial';
import Swiper from 'react-native-swiper';

const store = createStore(tutorial);
export class paypal extends Component {
	constructor(props){
		super(props);
		this.state={
			over:false,
			count:0,
			jump:false,
			card_name:'default name',
			card_type:'default type',
			pwd_tail:'fuckuuuuuuuuu',
			width:0,
			height:0,
		};
	}
	next(){
		this.setState((prev,props)=>({
			count:prev.count+1,
			jump:prev.count==3?true:false,
		}));
	}
	componentDidMount(){
		var {height, width}=Dimensions.get('window');
		
		this.setState({
			width:width,
			height:height,
		});
	}
	render() {
		const {width, height} = this.state;
		return (
			<View style={{flex:1}}>
				<Swiper style={{flex:1}} showsButtons={true} loop={false}>
        			<View style={styles.slide}>
						<ImageBackground 
							source={require('../image/instr1.png')}
							style={[styles.backGround,{height:height},{width:width}]}>
								<PopoutForTutorial/>
						</ImageBackground>

        			</View>
        			<View style={styles.slide}>
						<Image style={{height:height,width:width}} source={require('../image/instr2.png')}/>
        			</View>
        			<View style={styles.slide}>
						<Image style={{height:height,width:width}} source={require('../image/instr3.png')}/>
        			</View>
					<View style={styles.slide}>
						<Image style={{height:height,width:width}} source={require('../image/instr4.png')}/>
        			</View>
      			</Swiper>
			</View>
		);
	}
	save(){
		let tmp={
            cardName:this.state.card_name,
            cardType:this.state.card_type,
            pwdTail:this.state.pwd_tail,
		};
		
	}
}

export class card extends Component {
  render() {
    return (
		<View style={{flex:1}}>
			<DeckSwiper 
				style={{flex:1}}
				dataSource={cards}
				renderItem={item =>
					<Card style={{ elevation: 4 , flex:1}}>
						<CardItem cardBody>
							<Image style={ styles.bg } source={item.image} />
						</CardItem>
					</Card>
				}
			/>
		</View>
    );
  }
}
export class other extends Component {
  render() {
    return (
		<View style={{flex:1}}>
			<DeckSwiper 
				style={{flex:1}}
				dataSource={cards}
				renderItem={item =>
					<Card style={{ elevation: 4 , flex:1}}>
						<CardItem cardBody>
							<Image style={ styles.bg } source={item.image} />
						</CardItem>
					</Card>
				}
			/>
		</View>
    );
  }
}

const styles = {
	deck: {
        flex:1,
    },
	slide: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	img: {
		height:720,
        width:540,
	},
	backGround: {
        flex:1,
        alignItems: 'center',
        alignSelf: 'center',
    },
}