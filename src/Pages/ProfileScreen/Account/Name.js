import React, { useContext } from 'react'
import { View } from 'react-native'
import FontsDefault from '../../../Assistant/FontDefault'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import HeaderScreen from '../../../Components/Header/Header'
import InputScreen from '../../../Components/InputScreen/InputScreen'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Style'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'

export default function NameScreen(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props

   return (
      <View style={FontsDefault.containerChildren}>
         <LeftBottom onPress={() => navigation.goBack()} />

         <HeaderScreen Title={ProfileLang.name[Language]} />

         <InputScreen Title={ProfileLang.firstName[Language]} />

         <View style={Styles.border} />

         <InputScreen Title={ProfileLang.lastName[Language]} />

         <View style={Styles.ButtomClick}>
            <ButtonScreen Titel={ProfileLang.saveBtn[Language]} />
         </View>
      </View>
   )
}
