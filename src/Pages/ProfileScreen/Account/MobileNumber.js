import React, { useContext } from 'react'
import { View, Image } from 'react-native'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import HeaderScreen from '../../../Components/Header/Header'
import Styles from '../Style'
import InputScreen from '../../../Components/InputScreen/InputScreen'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import FontsDefault from '../../../Assistant/FontDefault'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import LazyLoading from '../../../Components/LazyLoading/LazyLoading'

export default function MobileNumber(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props

   return (
      <View style={FontsDefault.containerChildren}>
         <LeftBottom onPress={() => navigation.goBack()} />

         <HeaderScreen Title={ProfileLang.mobileNumber[Language]} />

         <View style={Styles.parantBox}>
            <View style={Styles.parantBoxfirst}>
               <InputScreen Title={ProfileLang.country[Language]} />
            </View>
            <View style={Styles.parantBoxLast}>
               <InputScreen Title={ProfileLang.phoneNumber[Language]} />
            </View>
         </View>

         <View style={[Styles.marginTop, FontsDefault.containerImage]}>
            {/* <LazyLoading
               style={FontsDefault.containerImageChildren}
               image={require('../../../../data/myimage/Mobile.png')}
            /> */}
         </View>

         <View style={Styles.ButtomClick}>
            <ButtonScreen Titel={ProfileLang.saveBtn[Language]} />
         </View>
      </View>
   )
}
