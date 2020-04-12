import React, { Component } from 'react';
import {Image, View, Animated, Easing, ImageBackground} from 'react-native';
import {Button, Text} from 'native-base';
import {connect} from 'react-redux';
import PopupDialog, { SlideAnimation, DialogButton } from 'react-native-popup-dialog';


class PopOut extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        // const slideAnimation = new SlideAnimation({
        //     slideFrom: 'bottom',
        //   });

        return (
            <ImageBackground 
            source={require('../image/bg.png')}
            style={styles.bg}>
                <PopupDialog
                    ref = {(popupDialog) => { this.popupDialog = popupDialog; }}
                    width={0.8}
                    height={200}
                    >

                    <Text>welcome to Freeze</Text>
                    
                    <DialogButton 
                    onPress={e => {this.okPress()}}
                    buttonStyle={top=5}
                    text='ok'
                    />



                </PopupDialog>
            </ImageBackground>
        );
    }
    okPress() {
        this.popupDialog.dismiss();
        setTimeout(() => {
            this.props.navigation.navigate('main');
        }, 100);
        
    }
    componentDidMount() {
        this.popupDialog.show();
    }
}
export default connect(state => ({
    ...state.main,
}))(PopOut);


const styles = {
    bg: {
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
}