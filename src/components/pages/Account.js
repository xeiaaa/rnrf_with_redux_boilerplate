import React, { Component } from 'react';
import { Container, Header, Title, Card, CardItem, Text, Content, Footer, FooterTab, Button, Icon, List, ListItem, InputGroup, Input, Picker } from 'native-base';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
const Item = Picker.Item;

export default class FormExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }

    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }

    render() {
        return(
            <Container>
                <Content style={{paddingTop:55}}>
<List>
                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="Username" placeholder="" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PASSWORD" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                    onPress={ () => {Actions.register()} }>
                        Login
                    </Button>
                    <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Register
                    </Button>
                </Content>
            </Container>
        )
    }

}