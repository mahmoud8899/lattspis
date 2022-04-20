import React, { useEffect } from 'react'
import ProfileScreen from './src/Pages/ProfileScreen/ProfileScreen'
import { SafeAreaView } from 'react-native'
import Styles from './src/Pages/ProfileScreen/Style'
import { NavigationContainer } from '@react-navigation/native'
import TabBottom from './src/Navigation/TabBottom'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
   useEffect(() => {
      ;(async () => {
         // AsyncStorage.clear()
         if (!(await AsyncStorage.getItem('lang'))) {
            AsyncStorage.setItem('lang', 'EN')
         }
         AsyncStorage.getItem('lang').then(val =>
            console.log('the lang is ' + val),
         )
      })()
   }, [])

   return (
      <SafeAreaView style={Styles.container}>
         <NavigationContainer>
            <TabBottom />
         </NavigationContainer>
      </SafeAreaView>
   )
}
