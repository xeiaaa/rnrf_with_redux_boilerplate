import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component{
    render () {
        return (
            <View>
                <Text> Home </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sample: state.sample
    }
}

export default connect(mapStateToProps)(Home);
