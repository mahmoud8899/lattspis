import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
function HeaderLocation(props) {
   // notImageMas is hidden icon
   const {notImageMas} = props
   return (
      <TouchableOpacity style={Styles.containerLocation}>
       {notImageMas ? null :
       <View style={Styles.IconsLeft}>
        <Icon name="location-outline" style={Styles.icon} />
        </View>
        } 
         <Text style={[Styles.textCity,FontsDefault.FontNameCart,FontsDefault.FontColor]}>uppsala</Text>
         <Icon name="chevron-down-outline" style={[FontsDefault.iconsize,Styles.textCity, FontsDefault.FontColor]} />
      </TouchableOpacity>
   )
}

export default HeaderLocation
