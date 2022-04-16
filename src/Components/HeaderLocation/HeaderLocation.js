import React from 'react'
import { View, Text } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons'

function HeaderLocation() {
   return (
      <View style={Styles.containerLocation}>
         <Icon name="location-outline" style={Styles.IconsLeft} />
         <Text style={Styles.textCity}>uppsala</Text>
         <Icon name="chevron-down-outline" style={Styles.iconDown} />
      </View>
   )
}

export default HeaderLocation
