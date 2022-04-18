import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'

function HeaderLocation(props) {
   // notImageMas is hidden icon
   const { notImageMas } = props
   return (
      <TouchableOpacity style={Styles.containerLocation}>
         {notImageMas ? null : (
            <View style={FontsDefault.ContainerIcon}>
               <Icon name="location-outline" style={
                  [FontsDefault.iconCenter,
                  FontsDefault.fontColorWith,
                  FontsDefault.iconSize
                  ]
               } />
              
            </View>
         )}

         <Text
            style={[
               Styles.textCity,
               FontsDefault.FontNameCart,
               FontsDefault.FontColor,
            ]}
         >
            uppsala
         </Text>
         <Icon
            name="chevron-down-outline"
            style={[
               FontsDefault.iconSize,
               Styles.textCity,
               FontsDefault.FontColor,
            ]}
         />
      </TouchableOpacity>
   )
}

export default HeaderLocation
