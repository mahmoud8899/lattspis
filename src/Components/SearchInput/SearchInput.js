import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/Ionicons'

export default function SearchScreen() {
   return (
      <View style={Styles.searchSection}>
         <Icon
            style={Styles.searchIcon}
            name="ios-search"
            size={20}
            color="#000"
         />
         <TextInput
            style={Styles.input}
            placeholder="Search Near Uppsala"
            underlineColorAndroid="transparent"
         />
      </View>
   )
}
