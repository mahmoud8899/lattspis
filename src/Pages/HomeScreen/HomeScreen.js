import React, { useState } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   ScrollView,
   FlatList,
} from 'react-native'
import Styles from './Styles'

import Icon from 'react-native-vector-icons/Ionicons'
import { ImageSlider } from 'react-native-image-slider-banner'
import { dummyProducts } from '../../Assistant/DummyData'
import CardsItem from '../../Components/CardsStoresDelivering/CardsStoresDelivering'

export default function HomeScreen() {
   const [images, setImages] = useState([
      {
         img: 'https://source.unsplash.com/1024x768/?water',
      },
      {
         img: 'https://source.unsplash.com/1024x768/?nature',
      },
      {
         img: 'https://source.unsplash.com/1024x768/?girl',
      },
      {
         img: 'https://source.unsplash.com/1024x768/?tree',
      },
   ])

   const renderStoresDelivering = ({ item }) => {
      return <CardsItem data={item} />
   }

   return (
      <View style={Styles.containerChildren}>
         <View style={Styles.containerLoaction}>
            <Icon name="location-outline" style={Styles.IconsLeft} />
            <Text style={Styles.textCity}>uppsala</Text>
            <Icon name="chevron-down-outline" style={Styles.iconDown} />
         </View>

         <View style={Styles.imagesSlider}>
            <ImageSlider data={images} autoPlay={true} closeIconColor="#fff" />
         </View>

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
