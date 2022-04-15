import React from 'react'
import ProfileScreen from './src/Pages/ProfileScreen/ProfileScreen'
import { SafeAreaView } from 'react-native'
import Styles from './src/Pages/ProfileScreen/Style'
import { NavigationContainer } from '@react-navigation/native'
import TabBottom from './src/Navigation/TabBottom'


export default function App() {




  return <SafeAreaView style={Styles.container}>
    <NavigationContainer>
      <TabBottom />
    </NavigationContainer>
  </SafeAreaView>



}


