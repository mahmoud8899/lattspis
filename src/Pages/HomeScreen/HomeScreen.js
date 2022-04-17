import React from 'react'
import { View, ScrollView } from 'react-native'
import Styles from './Styles'

import { dummyProducts } from '../../Assistant/DummyData'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import SliderImages from '../../Components/SliderImages/SliderImages'
import TitleCategory from '../../Components/TitleCategory/TitleCategory'
import ListStoresDelivering from '../../Components/ListStoresDelivering/ListStoresDelivering'
import ListFreeDelivery from '../../Components/ListFreeDelivery/ListFreeDelivery'

export default function HomeScreen() {
   return (
      <View style={Styles.containerChildren}>
         <HeaderLocation />

         <ScrollView showsVerticalScrollIndicator={false}>
            <SliderImages />
            <TitleCategory title="Stores delivering to you" />
            <ListStoresDelivering dummyProducts={dummyProducts} />
            <TitleCategory title="Free Delivery" />
            <ListFreeDelivery dummyProducts={dummyProducts} />
         </ScrollView>
      </View>
   )
}
