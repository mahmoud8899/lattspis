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
import CardsItem from '../../Components/CardsStoresDelivering/CardsStoresDelivering'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import SliderImages from '../../Components/SliderImages/SliderImages'

export default function HomeScreen() {
   const renderStoresDelivering = ({ item }) => {
      return <CardsItem data={item} />
   }

   return (
      <View style={Styles.containerChildren}>
         <HeaderLocation />

         <SliderImages />

         <ScrollView>
            <View style={Styles.storesDelivering}>
               <Text style={Styles.titleHeader}>Stores delivering to you</Text>
               <TouchableOpacity>
                  <Text style={Styles.seeAllButton}>See All</Text>
               </TouchableOpacity>
            </View>
            <FlatList
               data={dummyProducts}
               renderItem={renderStoresDelivering}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
            />
         </ScrollView>
      </View>
   )
}
