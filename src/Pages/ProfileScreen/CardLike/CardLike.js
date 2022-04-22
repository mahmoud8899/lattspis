import { View } from 'react-native'
import React, { useContext } from 'react'
import { dummyProducts } from '../../../Assistant/DummyData'
import CartItems from '../../../Components/CartItems/CartItems'
import Styles from '../../../Components/CartItems/Style'
import HeaderScreen from '../../../Components/Header/Header'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'

export default function CardLike(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props

   return (
      <View style={Styles.contentContainer}>
         <LeftBottom
            onPress={() => navigation.goBack()}
            Tilte={ProfileLang.cardLike[Language]}
         />

         <HeaderScreen Title={ProfileLang.cardLike[Language]} />

         <CartItems data={dummyProducts} dir={false} />
      </View>
   )
}
