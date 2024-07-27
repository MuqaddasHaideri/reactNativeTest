
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import { NavigationContainer } from '@react-navigation/native';
import ThirdScreen from './ThirdScreen';

import Forthscreen from './Forthscreen';
import FiftScreen from './FiftScreen'




export default function Navigation() {
    const Stack = createStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='FirstScreen'>
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
                <Stack.Screen name="SecondScreen" component={SecondScreen} />
                <Stack.Screen name="ThirdScreen" component={ThirdScreen

                } />
                <Stack.Screen name="ForthScreen" component={Forthscreen} />
                <Stack.Screen name="FiftScreen" component={FiftScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
