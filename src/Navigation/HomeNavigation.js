import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Pages/HomeScreen/HomeScreen'
import SeeAllScreen from '../Pages/HomeScreen/SeeAllScreen/SeeAllScreen'
import React from 'react'

const Stack = createNativeStackNavigator()

export default function HomeNavigation() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="SeeAll"
            component={SeeAllScreen}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   )
}
