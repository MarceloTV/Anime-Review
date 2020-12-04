/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import Index from './components/Index'
import Anime from './components/Anime'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const App = (props) => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Index} options={{headerShown:false}}/>
        <Stack.Screen name='Anime' component={Anime}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
