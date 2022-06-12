import { Image, ScrollView, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Style'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import FontsDefault from '../../../Assistant/FontDefault'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import LazyLoading from '../../../Components/LazyLoading/LazyLoading'

export default function PaymentMethods(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   // params
   const { navigation } = props

   return (
      <ScrollView style={[FontsDefault.containerChildren]}>

         <View style={FontsDefault.ContainerALLPadding}>
            <LeftBottom
               onPress={() => navigation.goBack()}
               Tilte={ProfileLang.paymentMethods[Language]}
            />
         </View>


         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>
               <View style={[Styles.marginTop, FontsDefault.containerImage, Styles.marginTopStor,]}>
                  <Image
                     style={FontsDefault.containerImageChildren}
                     source={require('../../../../data/myimage/payment.png')}
                  />
               </View>

               <View>
                  <Text style={[FontsDefault.fontDescription, Styles.marginTop]}>
                     No cards available. You can use your debit or credit card to
                     order with Wolt. Your card will be charged only after the order
                     is delivered.
                  </Text>
               </View>

            </View>
         </View>

         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>
               <ButtonScreen
                  Titel={ProfileLang.addNewCard[Language]}
                  NameIcon="add-outline"
                  onPress={() => navigation.navigate('AddPayment')}
               />
            </View>
         </View>

      </ScrollView>
   )
}
