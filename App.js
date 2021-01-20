import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/pages/Home/index'
import Sobre from './src/pages/Sobre/index'
import Contato from './src/pages/Contato/index'

const Stack = createStackNavigator()


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  
        name="Home"
        component={Home}
        options={{
          title:'Inicio',
          headerStyle: {
            backgroundColor: "#121212"
          },
          headerTintColor: '#fff',
          headerShown: false
        }}
        />
        <Stack.Screen  name="Sobre" component={Sobre}/>
        <Stack.Screen name = "Contato" component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}