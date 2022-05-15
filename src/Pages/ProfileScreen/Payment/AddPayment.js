import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Style'
import HeaderScreen from '../../../Components/Header/Header'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import InputScreen from '../../../Components/InputScreen/InputScreen'
import FontsDefault from '../../../Assistant/FontDefault'

import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'

export default function AddPayment(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   // params
   const { navigation } = props

   return (
      <View style={FontsDefault.containerChildren}>
         <LeftBottom onPress={() => navigation.goBack()} />
         <HeaderScreen Title={ProfileLang.addCard[Language]} />

         <View style={Styles.cardContainer}>
            <View style={Styles.credit}>
               <Text style={[Styles.FontDefultlast, FontsDefault.iconSize]}>
                  {ProfileLang.typeCard[Language]}
               </Text>
            </View>

            <InputScreen
               placeholder="0000 0000 0000 0000"
               Title={ProfileLang.cardNumber[Language]}
            />

            <View style={Styles.creditexpi}>
               <View style={Styles.creditexpichildren}>
                  <InputScreen
                     placeholder="MM/YY"
                     Title={ProfileLang.ExpDate[Language]}
                  />
               </View>
               <View style={Styles.creditexpichildren}>
                  <InputScreen
                     placeholder="000"
                     Title={ProfileLang.securityCode[Language]}
                  />
               </View>
            </View>
         </View>

         <View style={Styles.ButtomClick}>
            <ButtonScreen
               Titel={ProfileLang.addNewCard[Language]}
               NameIcon="add-outline"
            />
         </View>
      </View>
   )
}
