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
import { AddCart_Action } from './src/Redux/Action/CardAction'
export default function App() {

   const dispatch = useDispatch()
   useEffect(() => {
      //  AsyncStorage.removeItem(ActionTypes.USER_ASYNCSTORAGE)
      // AsyncStorage.removeItem(ActionTypes.SAVE_LOCAL_CH)
      // 
      AsyncStorage.getItem(ActionTypes.ASYNC_LOCATION_SAVE).then(val => {

         dispatch(SetLocationAction(JSON.parse(val), false))

      });

      // card items
      // AsyncStorage.getItem(ActionTypes.SAVE_LOCAL_CH).then(val => {

      //    // dispatch(AddCart_Action(JSON.parse(val)))

      //    dispatch({
      //       type:
      //          ActionTypes.CART_ADD_ITEMS,
      //       payload: JSON.parse(val)
      //    })

      //    // console.log('card item',)

      // });






   }, [])


   return (
      <SafeAreaView style={Styles.container}>
         <NavigationContainer>
            <FilterCardItem>
               <ChoseLanguage>
                  <TabBottom />
               </ChoseLanguage>
            </FilterCardItem>
         </NavigationContainer>
      </SafeAreaView>
   )
}
