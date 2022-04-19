import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { dummySearchData } from '../../Assistant/DummySearchData'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'

export default function SearchScreen() {
   const RenderList = ({ item }) => {
      return (
         <View style={Styles.textContainer}>
            <Text style={[FontsDefault.fontDescription,FontsDefault.fontColorWith]}>{item.title}</Text>
         </View>
      )
   }

   return (
      <View style={Styles.containerList}>
         <FlatList
            data={dummySearchData}
            renderItem={dummySearchData => RenderList(dummySearchData)}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={4}
         />
      </View>
   )
}
