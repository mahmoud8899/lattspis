import React, { useState } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   ScrollView,
   FlatList,
} from 'react-native'
import Styles from './Styles'

import { dummyProducts } from '../../Assistant/DummyData'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import SliderImages from '../../Components/SliderImages/SliderImages'
import TitleCategory from '../../Components/TitleCategory/TitleCategory'
import ListStoresDelivering from '../../Components/ListStoresDelivering/ListStoresDelivering'

export default function HomeScreen() {
   return (
      <View style={Styles.containerChildren}>
         <HeaderLocation />

         <SliderImages />

         <ScrollView>
            <TitleCategory title="Stores delivering to you" />
            <ListStoresDelivering dummyProducts={dummyProducts} />
         </ScrollView>
      </View>
   )
}
