import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import Styles from './src/Pages/ProfileScreen/Style'
import { NavigationContainer } from '@react-navigation/native'
import TabBottom from './src/Navigation/TabBottom'
import ChoseLanguage from './src/Components/UseContext/ChoseLanguage'



export default function App() {


   return (
      <SafeAreaView style={Styles.container}>
         <NavigationContainer>
            <ChoseLanguage>
               <TabBottom />
            </ChoseLanguage>

         </NavigationContainer>
      </SafeAreaView>
   )
}
