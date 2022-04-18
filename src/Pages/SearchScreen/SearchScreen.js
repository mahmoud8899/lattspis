import React from 'react'
import { View, Text } from 'react-native'
import FontDefault from '../../Assistant/FontDefault'
import InputScreen from '../../Components/InputScreen/InputScreen'
import SearchInput from '../../Components/SearchInput/SearchInput'

export default function SearchScreen() {
   return (
      <View style={FontDefault.containerChildren}>
         <SearchInput />
      </View>
   )
}
