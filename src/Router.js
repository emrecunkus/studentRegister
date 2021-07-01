import React from 'react';

import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentCreate from './components/StudentCreate';
import StudentsList from './components/StudentsList';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ marginTop: 65 }}>
            <Scene key="root" hideNavBar={true}>
                <Scene key="main">
                    <Scene
                        onRight={() => Actions.studentcreate()}
                        rightTitle="Ekle"
                        key="studentsList"
                        component={StudentsList}
                        title="Ogrenci Liste" />
                    <Scene

                        key="studentcreate"
                        component={StudentCreate}
                        title="Ogrenciyi Kaydet"
                    />



                </Scene>






                <Scene key="kimlik">
                    <Scene key="loginScreen" component={LoginForm} title="GİRİŞ EKRANI" />
                </Scene>

            </Scene>
        </Router>
    );

};

export default RouterComponent;