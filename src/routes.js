import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Profile from './pages/Profile'

const AppDrawer = createDrawerNavigator();



export default function Routes () {
    return(
        <NavigationContainer>
            <AppDrawer.Navigator 
                initialRouteName="Home"
            >
                <AppDrawer.Screen name="Home" component={Home}/>
                <AppDrawer.Screen name="Profile" component={Profile} />
            </AppDrawer.Navigator>
        </NavigationContainer>
    );

}