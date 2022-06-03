import React, { useState } from 'react'
import { View } from 'react-native'
import { ImageSlider } from 'react-native-image-slider-banner'
import { FlatListComponent } from '../../Components/FlatlList/FlatList'
import Styles from './Styles'
import { ImageUrl, TheImageCheck } from '../../Assistant/ImageUrl'
function SliderImages(props) {
   const { home } = props







   return (
      <View style={Styles.imagesSlider}>
         <ImageSlider
            data={home?.map((item) => (
               { img: TheImageCheck(item?.image) }
            ))}
            autoPlay={false}
            // onItemChanged={(item) => console.log("item", item)}
            closeIconColor="#fff"
         />


      </View>
   )
}

export default SliderImages
