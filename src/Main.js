import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import '@firebase/auth';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class Main extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCEvll1IzmJYLyf4TYPSIHzptYoBCWl5kE',
            authDomain: 'studentregister-9c011.firebaseapp.com',
            projectId: 'studentregister-9c011',
            storageBucket: 'studentregister-9c011.appspot.com',
            messagingSenderId: '79907826077',
            appId: '1:79907826077:web:5562b7f99b580469e6a774',
            measurementId: 'G-1TSX70PXWC'
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Router />
                </View>
            </Provider >
        );
    }
}
export default Main;