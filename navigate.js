import  React from 'react';
import Main from './components/Main';
import Series from './components/Series';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name = "Main"
                component = {Main}
                options = {{title: 'Главная'}}
            />
            <Stack.Screen 
                name = "Series"
                component = {Series}
                options = {{title: 'Серии'}}
            />
        </Stack.Navigator>

    </NavigationContainer>;
}