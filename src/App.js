import React from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import Home from './components/pages/Home';
import Main from './components/pages/Main';
import Checkout from './components/pages/Checkout';
import Account from './components/pages/Account';
import Register from './components/pages/Register';
import Mine from './components/pages/Mine';

const TabIcon = ( {selected, title} ) => {
    return (
        <Text style={{color: selected ? '#fd9132' : 'black'}}> {title} </Text>
    )
}

// --- Create it via Actions.create(), or it will be re-created for each render of your Router
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="tabbar" tabs tabBarStyle={{
            borderTopWidth : .5,
            borderColor    : '#fd9132',
            backgroundColor: '#fff',
            opacity        : 1
        }}>

            <Scene key="home-tab" title="Home" icon={TabIcon}>
                <Scene key="home" title="Home" component={Home} initial rightTitle="Checkout" onRight={() => Actions.checkout()}/>
                <Scene key="checkout" title="Checkout" component={Checkout} />
            </Scene>
            <Scene key="search-tab" title="Search" icon={TabIcon}>
                <Scene key="search" title="Search" component={Main} />
            </Scene>
            <Scene key="mine-tab" title="My Projects" icon={TabIcon}>
                <Scene key="mine" title="My Projects" component={Mine} />
            </Scene>
            <Scene key="account-tab" title="Account" icon={TabIcon}>
                <Scene key="account" title="My Account" component={Account} />
                <Scene key="register" title="Register" component={Register} />
            </Scene>

        </Scene>
    </Scene>
);

// --- Create connected Router if you want dispatch() method.
// --- Or you can just use vanilla Router

class ReduxRouter extends React.Component {
    render () {
        return (
            <Router scenes={scenes} />
        )
    }
}

const ConnectedRouter = connect()(ReduxRouter);

// --- your exported main router
export default class MyExportedRouter extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Provider store={createStore(reducers, {})}>
                <ConnectedRouter />
            </Provider>
        );
    }
}