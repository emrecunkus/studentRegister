import React from 'react';
import { Scene, Router, Actions ,Stack} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';

import StudentCreate from './components/StudentCreate';

const RouterComponent = () => {
    return (
  
        <Router style={{ marginTop: 0 }}>
        <Stack key = "root">
            <Scene key="kimlik " hideNavBar={true}>
                <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani" hideNavBar={false} />
            </Scene>

            <Scene key="main" hideNavBar={true}>
                <Scene
                    onRight={() => Actions.studentCreate()}
                    rightTitle="Yeni"
                    key="studentsList"
                    component={StudentsList}
                    title="Öğrenci Liste"
                    hideNavBar={false}
                />
                <Scene
                    key="studentCreate"
                    component={StudentCreate}
                    title="Öğrenci Kaydet"
                    hideNavBar={false}
                />
            </Scene>
        </Stack>

    </Router>
    
    );
};

export default RouterComponent;