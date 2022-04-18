import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'

function MapIcon() {
   return (
      <TouchableOpacity style={FontsDefault.ContainerIcon}>
         <Icon
            name="map-outline"
            style={[
               FontsDefault.iconCenter,
               FontsDefault.fontColorWith,
               FontsDefault.iconSize,
            ]}
         />
      </TouchableOpacity>
   )
}

export default MapIcon
