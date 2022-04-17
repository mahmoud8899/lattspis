import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './Styles'

function TitleCategory({ title, navigation }) {
   return (
      <View style={Styles.storesDelivering}>
         <Text style={Styles.titleHeader}>{title}</Text>
         <TouchableOpacity onPress={() => navigation.navigate('AllStores')}>
            <Text style={Styles.seeAllButton}>See All</Text>
         </TouchableOpacity>
      </View>
   )
}

export default TitleCategory
