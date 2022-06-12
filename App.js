import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import Styles from './src/Pages/ProfileScreen/Style'
import { NavigationContainer } from '@react-navigation/native'
import TabBottom from './src/Navigation/TabBottom'
import ChoseLanguage from './src/Components/UseContext/ChoseLanguage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ActionTypes from './src/Redux/Action/Types'
import { SetLocationAction } from './src/Redux/Action/LocationAction'
import { useDispatch } from 'react-redux'
import FilterCardItem from './src/Components/OneProduct/FilterCardItem'
import {GetUserInfoAction} from './src/Redux/Action/AuthAction'

export default function App() {

   const dispatch = useDispatch()
   useEffect(() => {
      //  AsyncStorage.removeItem(ActionTypes.USER_ASYNCSTORAGE)
      // AsyncStorage.removeItem(ActionTypes.SAVE_LOCAL_CH)
      // set location ....
      AsyncStorage.getItem(ActionTypes.ASYNC_LOCATION_SAVE).then(val => {

         dispatch(SetLocationAction(JSON.parse(val), false))
         AsyncStorage.getItem(ActionTypes.KEY_TOKEN).then(token => {
            // console.log('token',token)
            token !== null &&   dispatch(GetUserInfoAction(token))
   
         });

      });
   }, [])


   return (<NavigationContainer>
      <SafeAreaView style={Styles.container}>

         <FilterCardItem>
            <ChoseLanguage>
               <TabBottom />
            </ChoseLanguage>
         </FilterCardItem>

      </SafeAreaView>
   </NavigationContainer>
   )
}
