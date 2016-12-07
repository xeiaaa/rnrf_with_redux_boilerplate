import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Main extends Component{
    render () {
        return (
            <View>
                <Text> Main </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sample: state.sample
    }
}

export default connect(mapStateToProps)(Main);
