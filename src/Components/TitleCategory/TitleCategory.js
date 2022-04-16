import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './Styles'

function TitleCategory({ title }) {
   return (
      <View style={Styles.storesDelivering}>
         <Text style={Styles.titleHeader}>{title}</Text>
         <TouchableOpacity>
            <Text style={Styles.seeAllButton}>See All</Text>
         </TouchableOpacity>
      </View>
   )
}

export default TitleCategory
