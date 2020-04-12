import React, {Component } from 'react';
import {ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text,  Button} from 'native-base';
import Iceberg from './Iceberg.js';
import Popout from './PopOut';
import {melting} from '../states/MainAction.js';
import {setPWD} from '../states/TutorialAction';

class MainScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {} = this.props;
        return(
            <ImageBackground 
                source={require('../image/bg.png')}
                style={styles.bg}>
                    <View style={styles.statusbar}></View>
                    <View style={styles.Level}>
                        <View style={styles.leftSeperation}>
                            <Button
                                transparent light
                                onPress={()=>this.props.navigation.navigate('history')}>
                                    <Icon name='history' size={25} color='white'/>
                            </Button>
                        </View>
                        <View style={styles.rightSeperation}>
                            <Button
                                style={styles.BetweenBtn}
                                transparent light
                                onPress={()=>this.props.navigation.navigate('tutorial')}>
                                    <Icon name='cc-paypal' size={25} color={`white`}/>  
                            </Button> 
                        </View>
                    </View>

                    <View style={styles.Level}>
                        <View style={styles.leftSeperation}>   </View>
                        <View style={styles.rightSeperation}>
                            <Button
                                transparent light
                                onPress={e => this.handleSmallize(e)}>
                                    <Icon name='camera' size={25} color='white'/>  
                            </Button>
                        </View>
                    </View>


                    <View style={styles.empty}></View>
                    <View style={styles.iceberg}><Iceberg/></View>
                    <View style={styles.empty}></View>      
            </ImageBackground>
        );
    }
    handleSmallize() {
        this.props.dispatch(melting());
        
    }
}

export default connect(state => ({
    ...state.main,
}))(MainScreen);


const styles = {
    bg: {
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    statusbar: {
        height:20,
    },
    Level: {
        flexDirection:'row',
        alignSelf: 'flex-start',
    },
    leftSeperation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    rightSeperation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5
    },
    BetweenBtn: {
        marginLeft:5,
    },
    empty: {
        flex:2,
    },
    iceberg: {
        flex: 4,
    },
}