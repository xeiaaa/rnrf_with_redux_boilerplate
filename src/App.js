import React from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import Home from './components/pages/Home';
import Main from './components/pages/Main';

// --- Create it via Actions.create(), or it will be re-created for each render of your Router
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" component={Home} />
        <Scene key="main" component={Main} />
    </Scene>
);

// --- Create connected Router if you want dispatch() method.
// --- Or you can just use vanilla Router

class ReduxRouter extends React.Component {
    render () {
        return (
            <Router sceneStyle={ {paddingTop: 65} } scenes={scenes} />
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