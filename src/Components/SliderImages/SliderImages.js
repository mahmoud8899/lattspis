import React, { useState } from 'react'
import { View } from 'react-native'
import { ImageSlider } from 'react-native-image-slider-banner'
import Styles from './Styles'

function HeaderLocation() {
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
      <View style={Styles.imagesSlider}>
         <ImageSlider data={images} autoPlay={true} closeIconColor="#fff" />
      </View>
   )
}

export default HeaderLocation
