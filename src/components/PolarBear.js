import React, { Component } from 'react';
import {ImageBackground, Image, View,} from 'react-native';
import {connect} from 'react-redux';
import {Sprite, Loop} from 'react-game-kit/native';
class PolarBear extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {movePattern} = this.props;
        const face = [2,2,2,3,2,3,3,2,2,2]; //*************/ */
        return( 
            <Loop>
            <Sprite
                repeat={true}
                src={require('../image/bear.png')}
                state={4}
                scale={0.3}
                ticksPerFrame={33}
                steps={[0, 0, 12, 12, 7]}
                tileHeight={360}
                tileWidth={290}
                offset={[0,0]}
            /> 
            </Loop>
        );
    }
}

export default connect(state => ({
    ...state.main,
}))(PolarBear);