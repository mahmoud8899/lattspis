import React, { useState } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   Image,
   ScrollView,
   FlatList,
} from 'react-native'
import Styles from './Styles'
<<<<<<< HEAD
import Icon from "react-native-vector-icons/Ionicons";


=======
import Icon from 'react-native-vector-icons/Ionicons'
import { ImageSlider } from 'react-native-image-slider-banner'
import { dummyProducts } from '../../Assistant/DummyData'
>>>>>>> 84c5235c44369f5f6a5332a73710c57a9f25a144

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

   const renderCategory = ({ item }) => {
      return (
         <View style={[Styles.cardsContainer, Styles.cardShadow]}>
            <Image source={{ uri: item.imageUrl }} style={Styles.imageCard} />
            <View style={Styles.contentContainer}>
               <Text style={Styles.textTitle}>{item.title}</Text>
               <Text style={Styles.textDescription}>{item.description}</Text>
               <View style={Styles.iconRunContainer}>
                  <Icon name="bicycle-outline" style={Styles.iconRun} />
                  <Text style={Styles.TextColor}>SEK{item.SEKNum}</Text>
                  <Text style={Styles.TextColor}>{item.MINNUM}min</Text>
               </View>
            </View>
         </View>
      )
   }

   return (
      <View style={Styles.containerChildren}>
         <View style={Styles.containerLoaction}>
            <Icon name="location-outline" style={Styles.IconsLeft} />
            <Text style={Styles.textCity}>uppsala</Text>
            <Icon name="chevron-down-outline" style={Styles.iconDown} />
<<<<<<< HEAD
        </View>

        <ScrollView >
 



=======
         </View>
>>>>>>> 84c5235c44369f5f6a5332a73710c57a9f25a144

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
               renderItem={renderCategory}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
            />
         </ScrollView>
      </View>
   )
}
