import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import HeaderScreen from '../../../Components/Header/Header'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import FontsDefault from '../../../Assistant/FontDefault'
import { FlatListComponent, RenderItem } from '../../../Components/FlatlList/FlatList'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-virtualized-view'
import { Fragment } from 'react/cjs/react.production.min'

export default function CardLike(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props
   // show user Like card
   const likeCart = useSelector((state) => state?.like?.likeCart)

   // render data
   const ShowData = (option) => {
      return <RenderItem
         item={option}
         // category={TheParams}
         FullScrren
         NotShowLike


      />

   }
   return (
      <Fragment>
         <View style={[FontsDefault.ContainerALLPadding, FontsDefault.fontBackgroundColoe]}>
            <LeftBottom onPress={() => navigation.goBack()} Tilte={ProfileLang.cardLike[Language]} />
            <HeaderScreen Title={ProfileLang.cardLike[Language]} />
         </View>

         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>

              
               <FlatListComponent
                  data={likeCart}
                  HandleItem={ShowData}
               />
            </View>
         </View>



      </Fragment>
   )
}
