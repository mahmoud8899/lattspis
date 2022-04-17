import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../Styles'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Icon from 'react-native-vector-icons/Ionicons'
import COLORS from '../../../Assistant/Color'
import CartItems from '../../../Components/CartItems/CartItems'
import { dummyProducts } from '../../../Assistant/DummyData'
export default function AllStoresDelivering(props) {
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
               <LeftBottom OnClickButtom={OnClickButtom} />
               <Text style={Styles.textLocation}>Uppsala</Text>
               <Icon name="chevron-down-outline" style={Styles.iconDown} />
            </View>

            <View style={Styles.containerIconsRight}>
               <Icon name="pricetags-outline" style={Styles.iconsRight} />
               <Icon name="options-outline" style={Styles.iconsRight} />
            </View>
         </View>
         <View>
            <CartItems

               data={dummyProducts}
               name={false}
               Form={true}


            />
         </View>
      </View>
   )
}
