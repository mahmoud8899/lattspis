import React from 'react'
import { View } from 'react-native'
import FontDefault from '../../Assistant/FontDefault'
import SearchInput from '../../Components/SearchInput/SearchInput'
import ListSearch from '../../Components/ListSearch/ListSearch'

export default function SearchScreen() {
   return (
      <View style={FontDefault.containerChildren}>
         <SearchInput />
         <ListSearch />
      </View>
   )
}
