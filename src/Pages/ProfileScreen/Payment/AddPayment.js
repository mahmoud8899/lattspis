import { Text, View } from 'react-native'
import React, { Fragment, useContext } from 'react'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Style'
import HeaderScreen from '../../../Components/Header/Header'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import Input from '../../../Components/InputScreen/Input'
import FontsDefault from '../../../Assistant/FontDefault'

import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function AddPayment(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   // params
   const { navigation } = props

   return (
      <View style={[FontsDefault.Conter, FontsDefault.fontBackgroundColoe]} >

         <KeyboardAwareScrollView extraHeight={400} enableOnAndroid>


            <View style={[FontsDefault.ContainerALLPadding, FontsDefault.fontBackgroundColoe]}>
               <LeftBottom onPress={() => navigation.goBack()} />
               <HeaderScreen Title={ProfileLang.addCard[Language]} />
            </View>



            <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
               <View style={FontsDefault.ContainerALLPadding}>

                  <View style={Styles.cardContainer}>
                     <View style={Styles.credit}>
                        <Text style={[Styles.FontDefultlast, FontsDefault.iconSize]}>
                           {ProfileLang.typeCard[Language]}
                        </Text>
                     </View>

                     <Input
                        placeholder="0000 0000 0000 0000"
                        keyboardType='phone-pad'
                        Title={ProfileLang.cardNumber[Language]}
                     />

                     <View style={Styles.creditexpi}>
                        <View style={Styles.creditexpichildren}>
                           <Input
                              placeholder="MM/YY"
                              Title={ProfileLang.ExpDate[Language]}
                           />
                        </View>
                        <View style={Styles.creditexpichildren}>
                           <Input
                              placeholder="000"
                              keyboardType='phone-pad'
                              Title={ProfileLang.securityCode[Language]}
                           />
                        </View>
                     </View>
                  </View>

               </View>
            </View>

            <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
               <View style={FontsDefault.ContainerALLPadding}>
                  <ButtonScreen
                     Titel={ProfileLang.addNewCard[Language]}
                     NameIcon="add-outline"
                  />
               </View>
            </View>


         </KeyboardAwareScrollView>
      </View>
   )
}
