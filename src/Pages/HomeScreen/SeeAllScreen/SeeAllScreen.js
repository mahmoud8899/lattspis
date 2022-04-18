import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Styles from '../Styles'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Icon from 'react-native-vector-icons/Ionicons'
import CartItems from '../../../Components/CartItems/CartItems'
import { dummyProducts } from '../../../Assistant/DummyData'
import HeaderLocation from '../../../Components/HeaderLocation/HeaderLocation'
export default function SeeAllScreen(props) {
   const { navigation } = props

   // testing console console.log(navigation.goBack)

   // this is bottom callback
   const OnClickButtom = () => {
      return navigation.goBack()
   }

   return (
      <View style={Styles.containerChildren}>
         <View style={Styles.ContainerHeader}>

            <View style={Styles.containerLocation}>
               <View >
                  <LeftBottom OnClickButtom={OnClickButtom} />

               </View>

               <View style={Styles.icon}>
                  <HeaderLocation notImageMas />
               </View>

            
           <View>
           <Icon name="pricetags-outline" style={Styles.iconsRight} />
           </View>
            <View>
            <Icon name="options-outline" style={Styles.iconsRight} />
            </View>
            
            </View>

          
         </View>
         <View>
            <CartItems data={dummyProducts} dir={false} Form={true} />
         </View>
      </View>
   )
}
