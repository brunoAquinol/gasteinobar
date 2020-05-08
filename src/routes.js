import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import NewOrder from './pages/NewOrder/Index';
import OrderPad from './pages/OrderPad/Index';
/*
import AddOrder from './pages/AddOrder/Index';
import History from './pages/History/Index';
import Home from './pages/Home/Index';

<AppStack.Screen name="AddOrder" component={AddOrder} />
<AppStack.Screen name="History" component={History} />
<AppStack.Screen name="Home" component={Home} />

*/
export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="NewOrder" component={NewOrder} />
                <AppStack.Screen name="OrderPad" component={OrderPad} />
            </AppStack.Navigator> 
        </NavigationContainer>
    );
}