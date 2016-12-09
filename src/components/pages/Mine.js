import React, { Component } from 'react';
import {
  View,
  Image,
  Picker,
  TextInput
} from 'react-native';

import { Container, Header, Title, Card, CardItem, Text, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import { connect } from 'react-redux';

class Mine extends Component{
    render () {
        return (
            <Container>
                <Content style={{paddingTop: 55, paddingHorizontal: 10}}>
                    <Card>
                        <CardItem>                        
                            <Text>
                                My Projects
                            </Text>   
                        </CardItem>                 
                    </Card>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sample: state.sample
    }
}

export default connect(mapStateToProps)(Mine);