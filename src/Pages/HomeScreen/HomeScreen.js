import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { SliderBox } from 'react-native-image-slider-box'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'

export default function HomeScreen() {
   const [images, setImages] = useState([
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
      'https://source.unsplash.com/1024x768/?tree',
   ])

   return (
      <View style={Styles.containerChildren}>
         <View style={Styles.containerLoaction}>
            <Icon name="location-outline" style={Styles.IconsLeft} />
            <Text style={Styles.textCity}>uppsala</Text>
            <Icon name="chevron-down-outline" style={Styles.iconDown} />
         </View>

         <ScrollView>
            <SliderBox images={images} style={Styles.imagesSlider} />

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
