import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import OrderPad from './pages/OrderPad/Index';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator >
                <AppStack.Screen name="OrderPad" component={OrderPad} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}