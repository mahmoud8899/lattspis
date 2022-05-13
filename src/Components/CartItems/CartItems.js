import React, { Fragment, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ListCard from './ListCart'
import Styles from './Style'
import FontsDefault from '../../Assistant/FontDefault'
import HomeLang from '../../Language/Home'
import { ChoseLanguageDatilas } from '../UseContext/ChoseLanguage'

export default function CartItems(props) {
   const {
      Tilte,
      onPress,
      data,
      dir,
      Form,
      forCategory,
      showBtn,
      showMin,
      navigation,
   } = props

   const { Language } = useContext(ChoseLanguageDatilas)
   // options
   // [1] : title name
   // [2] :  fatch data

   return (
      <Fragment>
         {Tilte && (
            <View style={Styles.storesDelivering}>
               <Text style={[FontsDefault.TitleFont, FontsDefault.FontColor]}>
                  {Tilte}
               </Text>
               {showBtn && (
                  <TouchableOpacity onPress={onPress}>
                     <Text
                        style={[Styles.seeAllButton, FontsDefault.fontButton]}
                     >
                        {HomeLang.seeAllBtn[Language]}
                     </Text>
                  </TouchableOpacity>
               )}
            </View>
         )}

         <View style={Form ? { paddingBottom: 50 } : null}>
            <ListCard
               dummyProducts={data}
               dir={dir}
               Form={Form}
               forCategory={forCategory}
               showMin={showMin}
               navigation={navigation}
            />
         </View>
      </Fragment>
   )
}
