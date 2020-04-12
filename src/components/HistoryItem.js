import React, { Component } from 'react';
import {View, ListItem} from 'native-base';
import {Text, Button, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HistoryItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <ListItem style={{borderBottomWidth : 0, margin:0, padding : 0, borderWidth : 0}}>
				<View style = {{flexDirection : 'row', backgroundColor : 'rgba(255,255,255,0.3)', padding : 10, margin : 0, borderWidth : 0}}>
					<View style={{flex:1}} />
					<View style={{flex:2, justifyContent: 'center',}}>	
						<Icon name='tshirt' size = {80} color = {'black'}/>
					</View>
					<View style={{flex:1}} />
					<View style={{flex:7,flexDirection:'column'}}>	
						<View><Text>Topic : {this.props.topic}</Text></View>	
						<View><Text>Date : {this.props.date}</Text></View>	
						<View><Text>Cost : {this.props.cost}</Text></View>	
						<View><Text>Result : {this.props.result}</Text></View>
						<View><Text>Description : {this.props.description}</Text></View>	
					</View>
					<View style={{flex:1}} />
				</View>
			</ListItem>
        );
    }
}

const styles = {
}