import React, { Component } from 'react';
import { View, Button} from 'native-base';
import {Text, StatusBar, ImageBackground, TouchableOpacity ,ListView} from 'react-native';
import HistoryItem from './HistoryItem.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

class HistoryScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
		const {events} = this.props;
		
		let children = events.map(e => (
			<View>
			<HistoryItem  	topic = {e.topic}
							cost = {e.cost}
							date = {e.date}
							result = {e.result}
							description = {e.description}/>
			</View>
		));
		
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		const dataSource = ds.cloneWithRows(children);
		
        return(
			<ImageBackground source={require('../image/historybg.png')} style={styles.bg}>
				<View style={styles.statusbar}></View>
				<View style={styles.button}>
					<Button
						transparent light
						onPress={()=>this.props.navigation.goBack()}>
							<Icon name='arrow-left' size={25} color='white'/>
					</Button>
				</View>
				<View style={styles.all}>
					<ListView
						dataSource={dataSource}
						renderRow={(rowData) => rowData }
					/>
				</View>
			</ImageBackground>
        );
    }
}

export default connect(state => ({
	...state.main,
	...state.history,
}))(HistoryScreen);

const styles = {
	button: {
		flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    all: {
        flex:7,
        alignItems: 'center', 
        flexDirection: 'column',
		justifyContent: 'flex-start'
    },
	bg: {
        flex:1,
        //alignItems: 'center', 
        justifyContent: 'center',
		flexDirection: 'column'
	},
	statusbar: {
        height:20,
    },
}