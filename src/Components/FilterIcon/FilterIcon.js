import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'

function FilterIcon() {
   return (
      <View style={FontsDefault.ContainerIcon}>
         <Icon
            name="options-outline"
            style={[
               FontsDefault.iconCenter,
               FontsDefault.fontColorWith,
               FontsDefault.iconSize,
            ]}
         />
      </View>
   )
}

export default FilterIcon
