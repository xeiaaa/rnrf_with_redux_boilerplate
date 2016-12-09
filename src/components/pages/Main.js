import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Container, Header, Title, Card, CardItem, Text, Content, Footer, FooterTab, Button, Icon } from 'native-base';

class Main extends Component{
    render () {
        return (
                <Container></Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sample: state.sample
    }
}

export default connect(mapStateToProps)(Main);
