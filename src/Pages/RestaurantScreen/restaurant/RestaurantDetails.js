import React from 'react'
import { View, Text } from 'react-native'
import FontsDefault from '../../../Assistant/FontDefault'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Styles'

function RestaurantDetails() {
   const OnClickButton = () => {
      return navigation.goBack()
   }

   return (
      <View style={FontsDefault.containerChildren}>
         <View style={Styles.containerLeftButton}>
            <LeftBottom onPress={OnClickButton} />
            <View style={{ marginLeft: 70, alignItems: 'center' }}>
               <Text style={{ fontSize: 20 }}>Tanakora Sushi</Text>
            </View>
         </View>
      </View>
   )
}

export default RestaurantDetails
