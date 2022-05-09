import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { useTheme } from '@react-navigation/native';

import TelaA from './TelaA';
import TelaB from './TelaB';

const Drawer = createDrawerNavigator();

export default function Main(props) {
    const theme = useTheme();

    return (
        <Drawer.Navigator initialRouteName="" screenOptions={theme.screenOptions}>
            <Drawer.Screen name="TelaA" component={TelaA} />
            <Drawer.Screen name="TelaB" component={TelaB} />
        </Drawer.Navigator>
    );
}
