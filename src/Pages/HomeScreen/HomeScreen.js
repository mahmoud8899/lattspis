import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { ImageSlider } from 'react-native-image-slider-banner'

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
            <View style={Styles.cardsContainer}>
               <Image
                  source={{ uri: 'https://source.unsplash.com/1024x768/?tree' }}
                  style={Styles.stretch}
               />
            </View>
         </ScrollView>
      </View>
   )
}
