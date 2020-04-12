import React, { Component } from 'react';
import {View,Button,Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImageBackground} from 'react-native';

const tmp=['      PayPal       ','Credit Cards','      Others      '];

export default class TutorialScreen extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<ImageBackground style={styles.bg} source={require('../image/card_option_bg.png')}>
				<View style={styles.button_left}>
					<Button
						transparent light
						onPress={()=>this.props.navigation.goBack()}>
							<Icon name='arrow-left' size={25} color='white'/>
					</Button>
				</View>
				<View style={styles.container}>
					<Button style={styles.button} onPress={()=>this.props.navigation.navigate('paypal')}>
						<Text style={styles.button_text}>{tmp[0]}</Text>
					</Button>
					<Button style={styles.button} onPress={()=>this.props.navigation.navigate('card')}>
						<Text style={styles.button_text}>{tmp[1]}</Text>
					</Button>
					<Button style={styles.button} onPress={()=>this.props.navigation.navigate('other')}>
						<Text style={styles.button_text}>{tmp[2]}</Text>
					</Button>
				</View>
			</ImageBackground>
		);
	}
}

const styles={
	button_left: {
		flex: 1,
        marginLeft: 5,
	    alignSelf:'flex-start',
    },
	bg:{
		flex:1,
		alignItems:'center',
	},
	container:{
		flex:8,
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
	},
	button:{
		backgroundColor:"#FFFFFF",
		alignItems:'center',
		justifyContent:'center',
		height:'8%',
		marginBottom:25,
		borderRadius:10,
	},
	button_text:{
		fontWeight:'bold',
		fontSize:20,
		color:'rgba(35,154,202,1)',
	},	
}

