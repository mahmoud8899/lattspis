import { View, Text, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Styles from '../Style'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import FontsDefault from '../../../Assistant/FontDefault'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'

export default function OneOrder(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   // param
   const { navigation } = props

   //

   return (
      <View style={FontsDefault.containerChildren}>
         <LeftBottom
            onPress={() => navigation.goBack()}
            Tilte={ProfileLang.myOrder[Language]}
         />

         <ScrollView contentContainerStyle={FontsDefault.scrollPaddingBottom}>
            <View style={[Styles.containerbox, Styles.marginTop]}>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Order # 6256d59a795d981b9dca7fb5
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  3 Days Ago
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Status : Processing
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.payPayment[Language]} : Cart Number
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.userName[Language]} :Mahmoud
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.email[Language]} :X@X.Com
               </Text>
               <View style={Styles.borderwidth} />

               <View style={Styles.background}>
                  <Text
                     style={[
                        Styles.fontOne,
                        Styles.marginFont,
                        Styles.backgroundColor,
                     ]}
                  >
                     {ProfileLang.myAddress[Language]}
                  </Text>
               </View>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.fullName[Language]}: Mahmoud Almadhoun
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.phoneNumber[Language]}: +32423433322
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.address[Language]}: sdxfcvx{' '}
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.city[Language]} : uppsala
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.zipCode[Language]} : 438734
               </Text>

               <View style={Styles.borderwidth} />
               <View style={Styles.JustCenter}>
                  <Image
                     style={Styles.productImage}
                     source={require('../../../../data/image/uppsalamat/3.jpg')}
                  />
                  <Text>{ProfileLang.name[Language]} : Pizza</Text>
                  <Text>Qty : 1</Text>
               </View>

               <View style={Styles.borderwidth} />

               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.timeBooking[Language]} : 09:08:00 - Thursday -
                  14/04/2022
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  1X {ProfileLang.itemsNumber[Language]}
               </Text>
               <View style={[Styles.marginx, Styles.MarginTop]}>
                  <ButtonScreen Titel="293 kr" />
               </View>
            </View>
         </ScrollView>
      </View>
   )
}
