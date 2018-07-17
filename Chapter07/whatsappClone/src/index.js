import React from 'react';
import { StackNavigator } from 'react-navigation';
import routes from './config/routes';
import { initApi } from './services/api';
import { Provider } from 'react-redux';
import store from './store';

const AppNavigator = StackNavigator(routes);

export default class extends React.Component {
    componentWillMount() {
        initApi();
    }

    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        )
    }
}