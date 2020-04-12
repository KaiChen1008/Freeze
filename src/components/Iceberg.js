import React, { Component } from 'react';
import {ImageBackground, Image, View, Animated, Easing} from 'react-native';
import {Button, Text} from 'native-base';
import {connect} from 'react-redux';
import PolarBear from './PolarBear.js';
import {changeBearState, changePattern} from '../states/MainAction.js';
class Iceberg extends Component {
    constructor(props) {
        super(props);
        this.bearAni = new Animated.Value(0);
    }

    componentDidMount() {
        const {moveDuration} = this.props;
        Animated.timing(this.bearAni, {
            toValue: 1,
            duration: moveDuration, //ms
            useNativeDriver: true,
        }).start();


        setInterval(() => {         
            this.bearAni.setValue(0);
            const {fixedSize, movePattern} =  this.props;
            this.props.dispatch(changePattern());

            Animated.timing(this.bearAni, {
                toValue: 1,
                duration: moveDuration, //ms
                useNativeDriver: true,
            }).start();
        }, moveDuration);
    }
    
    render() {
        const {movePattern, fixedSize} = this.props;
        let outputRangeArrayX = 
        [
            [
                [-20, 110], // + 130
                [110, 110], // + 0
                [110,  60], // - 50
                [60 ,  60], // + 0
                [60 , -80], // - 140
                [-80, -60], // + 20
                [-60, -20], // + 40
                [-20, -20], // + 0
            ],
            [
                [-20, 110], // + 130
                [110, 110], // + 0
                [110,  60], // - 50
                [60 ,  60], // + 0
                [60 , -80], // - 140
                [-80, -60], // + 20
                [-60, -20], // + 40
                [-20, -20], // + 0
            ],            [
                [-20, 110], // + 130
                [110, 110], // + 0
                [110,  60], // - 50
                [60 ,  60], // + 0
                [60 , -80], // - 140
                [-80, -60], // + 20
                [-60, -20], // + 40
                [-20, -20], // + 0
            ],            [
                [-20, 110], // + 130
                [110, 110], // + 0
                [110,  60], // - 50
                [60 ,  60], // + 0
                [60 , -80], // - 140
                [-80, -60], // + 20
                [-60, -20], // + 40
                [-20, -20], // + 0
            ],
        ];
        const outputRangeArrayY = 
        [
            [
                [20  ,   20], // + 0
                [20  ,  -50], // - 70
                [-50 ,  -50], // + 0
                [-50 , -150], // - 100
                [-150, -150], // + 0
                [-150,  -100], // + 50
                [-100  , -100], // + 0
                [-100  ,   20], // + 120
            ],
            [
                [20  ,   20], // + 0
                [20  ,  -50], // - 70
                [-50 ,  -50], // + 0
                [-50 , -150], // - 100
                [-150, -150], // + 0
                [-150,  -100], // + 50
                [-100  , -100], // + 0
                [-100  ,   20], // + 120
            ],
            [
                [20  ,   20], // + 0
                [20  ,  -50], // - 70
                [-50 ,  -50], // + 0
                [-50 , -150], // - 100
                [-150, -150], // + 0
                [-150,  -100], // + 50
                [-100  , -100], // + 0
                [-100  ,   20], // + 120
            ],
            [
                [20  ,   20], // + 0
                [20  ,  -50], // - 70
                [-50 ,  -50], // + 0
                [-50 , -150], // - 100
                [-150, -150], // + 0
                [-150,  -100], // + 50
                [-100  , -100], // + 0
                [-100  ,   20], // + 120
            ],

        ];

        const moveX = this.bearAni.interpolate({
            inputRange: [0, 1],
            outputRange: outputRangeArrayX[fixedSize][movePattern],
            extrapolate: 'clamp'
        });
        const moveY = this.bearAni.interpolate({
            inputRange: [0, 1],
            outputRange: outputRangeArrayY[fixedSize][movePattern],
            extrapolate: 'clamp'
        });
        return(
            <ImageBackground 
                source={(fixedSize === 0) ? require('../image/ice0.png') : 
                        (fixedSize === 1) ? require('../image/ice1.png') : 
                        (fixedSize === 2) ? require('../image/ice2.png') : 
                                            require('../image/ice3.png')}
                style={styles.backGround}>
                    <Animated.View style={{
                        transform: [{translateX:moveX},{translateY:moveY}]
                    }}>
                        <PolarBear/>
                    </Animated.View>
            </ImageBackground>
        );
    }
}
export default connect(state => ({
    ...state.main,
}))(Iceberg);


const styles = {
    backGround: {
        flex:1,
        alignItems: 'center',
        alignSelf: 'center',
        height:340,
        width:346,
    },
}

// const distance = [
//     [+0, +85],
//     [+65, +0],
//     [+0,   -70],
//     [-50,  +0],
//     [+0,   -100],
//     [-140, +0],
//     [+20,  +50],
//     [+40,  +0],
//     [+0,   +120],
//     [+65,  -85],
// ];