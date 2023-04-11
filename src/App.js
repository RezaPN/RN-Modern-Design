import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
// import {Provider} from 'react-redux';
// import store from './redux/store';
import Router from './router';

function App() {
  return (
    <NavigationContainer>
        <Router />
    </NavigationContainer>
  );
}

export default App;
