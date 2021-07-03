import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import '@firebase/auth';

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';
/*
Kullanıcı email-şifre girdiğinde yapılan değişikliği tutarız. Bunlar loginFormda connect kullanarak çağrılacak. 
dispatch ile reducer ayağa kalkar. Reducerdaki switch-case ile durum değişikliği yakalanır.
*/

export const emailChanged = (email) => {
    return(dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return(dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};

export const loginUser = ({ email,password }) => {
    return(dispatch) => {
        dispatch({
            type: LOGIN_USER
        });
        if( email === '' || password === '' ){
            Alert.alert(
              'Mesaj',
              'Kullanıcı Adı ve Şifre Alanı Doldurulmalıdır !!',
              [
                { text: 'Tamam', onPress: () => null }
              ]
            );
            
          }
          else{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginSucces(dispatch,user))
            .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginSucces(dispatch,user))
                .catch(() => loginFail(dispatch));
                
                    
                  
            });
          }
    };
};
const loginFail = (dispatch) => {
    Alert.alert(
        'Mesaj',
        'Kullanıcı bilgileri hatalı',
        [
          { text: 'Tamam', onPress: () => null }
        ]
      );
    dispatch({
        type: LOGIN_USER_FAIL,  
        
    });
       
     
};
const loginSucces = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
    console.log(" geçiş yapıldı");

    if( LOGIN_USER_SUCCESS ){
        console.log(`BAŞARILI GİRİŞ`);
        
    }
};
