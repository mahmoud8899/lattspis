import React from 'react'
import { View } from 'react-native'
import Styles from '../Styles'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import CartItems from '../../../Components/CartItems/CartItems'
import { dummyProducts } from '../../../Assistant/DummyData'
import HeaderLocation from '../../../Components/HeaderLocation/HeaderLocation'
import FilterIcon from '../../../Components/FilterIcon/FilterIcon'
import MapIcon from '../../../Components/MapIcon/MapIcon'
import FontsDefault from '../../../Assistant/FontDefault'
export default function SeeAllScreen(props) {
   const { navigation } = props

   // testing console console.log(navigation.goBack)

   // this is bottom callback
   const OnClickButton = () => {
      return navigation.goBack()
   }

   return (
      <View style={FontsDefault.containerChildren}>
         <View style={Styles.contentLocation}>
            <View style={Styles.containerHeaderLocation}>
               <LeftBottom onPress={OnClickButton} />
               <HeaderLocation notImageMas />
            </View>

            <View style={Styles.containerRightIcons}>
               <FilterIcon />
               <MapIcon />
            </View>
         </View>

         <View>
            <CartItems data={dummyProducts} dir={false} Form={true} />
         </View>
      </View>
   )
}
