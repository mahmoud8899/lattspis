import React, { useContext } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { ChoseLanguageDatilas } from '../UseContext/ChoseLanguage'
import HomeLang from '../../Language/Home'
import CartComponent from './CartComponent'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from './style'
import CategoryComponent from './CategoryComponent'


// render item cart....
export function RenderItem(props) {
   const { item, category, FullScrren ,onPress } = props


   return category ?
      <CategoryComponent item={item} category={category} />
      :
      <CartComponent
         item={item}
         category={category}
         FullScrren={FullScrren}
         onPress={onPress}

      />

};


// featch data..
export function FlatListComponent(props) {
   const { data, HandleItem, onEndReached, horizontal } = props
   const keyExtractor = item => item._id;


   return <FlatList
      horizontal={horizontal}
      data={data}
      renderItem={HandleItem}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}

   />




}
// ListFooterComponent={<View><Text>Footer</Text></View>}

// title Name 
export function TitleName(props) {
   const { Tilte, showBtn, onPress } = props

   const { Language } = useContext(ChoseLanguageDatilas)
   return <View>
      {Tilte && (
         <View style={Styles.storesDelivering}>
            <Text
               style={[FontsDefault.TitleFont, FontsDefault.fontBoldTitle]}
            >
               {Tilte}
            </Text>
            {showBtn && (
               <TouchableOpacity onPress={onPress} style={[FontsDefault.stylesTextInButton]}>
                  <Text style={FontsDefault.extra} >
                     {HomeLang.seeAllBtn[Language]}

                  </Text>
               </TouchableOpacity>
            )}
         </View>
      )}
   </View>
}



// oTHER flatlIST 
export function OtherFlatList(props) {


   return <FlatList   {...props} />
}