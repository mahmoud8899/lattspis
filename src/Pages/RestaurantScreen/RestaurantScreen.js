import React from 'react'
import { View } from 'react-native'
import CartItems from '../../Components/CartItems/CartItems'
import FilterIcon from '../../Components/FilterIcon/FilterIcon'
import HeaderLocation from '../../Components/HeaderLocation/HeaderLocation'
import MapIcon from '../../Components/MapIcon/MapIcon'
import { dummyProducts } from '../../Assistant/DummyData'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'

export default function RestaurantScreen() {
   return (
      <View style={FontsDefault.containerChildren}>
         <View style={Styles.contentLocation}>
            <HeaderLocation />
            <View style={Styles.containerRightIcons}>
               <FilterIcon />
               <MapIcon />
            </View>
         </View>

         <View>
            <CartItems
               Tilte="Restaurants"
               showBtn={false}
               showMin={true}
               data={dummyProducts}
               dir={false}
               Form={true}
               forCategory={false}
            />
         </View>
      </View>
   )
}
