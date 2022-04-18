import React from 'react'
import { View, Text } from 'react-native'
import FilterIcon from '../../Components/FilterIcon/FilterIcon'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import MapIcon from '../../Components/MapIcon/MapIcon'
import Styles from './Styles'

export default function RestaurantScreen() {
   return (
      <View style={Styles.containerChildren}>
         <View style={Styles.contentLocation}>
            <HeaderLocation />
            <View style={Styles.containerRightIcons}>
               <FilterIcon />
               <MapIcon />
            </View>
         </View>
      </View>
   )
}
