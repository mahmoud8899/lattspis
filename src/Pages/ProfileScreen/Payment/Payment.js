import { Image, Text, View } from 'react-native'
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
      <View style={FontsDefault.containerChildren}>
         <LeftBottom
            onPress={() => navigation.goBack()}
            Tilte={ProfileLang.paymentMethods[Language]}
         />

         <View
            style={[
               Styles.marginTop,
               FontsDefault.containerImage,
               Styles.marginTopStor,
            ]}
         >
            {/* <LazyLoading
               style={FontsDefault.containerImageChildren}
               image={require('../../../../data/myimage/payment.png')}
            /> */}
         </View>

         <View>
            <Text style={[FontsDefault.fontDescription, Styles.marginTop]}>
               No cards available. You can use your debit or credit card to
               order with Wolt. Your card will be charged only after the order
               is delivered.
            </Text>
         </View>

         <View style={Styles.ButtomClick}>
            <ButtonScreen
               Titel={ProfileLang.addNewCard[Language]}
               NameIcon="add-outline"
               onPress={() => navigation.navigate('AddPayment')}
            />
         </View>
      </View>
   )
}
