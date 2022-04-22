import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Styles from '../Style'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import HeaderScreen from '../../../Components/Header/Header'
import FontsDefault from '../../../Assistant/FontDefault'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'

export default function ShowOrdersUser(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props

   // navigation show datilas order
   const NavigationOneOrder = () => {
      return navigation.navigate('OneOrder')
      //
   }

   return (
      <View style={Styles.marginTopStor}>
         <HeaderScreen Title={ProfileLang.orderHistory[Language]} />
         <ScrollView contentContainerStyle={FontsDefault.scrollPaddingBottom}>
            <TouchableOpacity style={[Styles.containerbox, Styles.marginTop]}>
               <View style={Styles.edit}>
                  <Icon name="create-outline" style={Styles.iconaddress} />
               </View>

               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.orderTime[Language]} : 3 Days Ago
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.oderNumber[Language]} : 3287482374234
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.orderStatus[Language]} : Processing
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.payPayment[Language]} : Cart Number{' '}
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  {ProfileLang.timeBooking[Language]} : 09:08:00 - Thursday -
                  14/04/2022 - sdg
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  1x {ProfileLang.itemsNumber[Language]}
               </Text>

               <View style={Styles.marginx}>
                  <ButtonScreen
                     Titel={ProfileLang.details[Language]}
                     onPress={NavigationOneOrder}
                  />
               </View>
               <View style={Styles.marginx}>
                  <ButtonScreen Titel="3434 kr" />
               </View>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.containerbox, Styles.marginTop]}>
               <View style={Styles.edit}>
                  <Icon name="create-outline" style={Styles.iconaddress} />
               </View>

               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Beställningstid : 3 Days Ago
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  order number : 3287482374234
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Orderstatus : Processing
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Betala Betalning : Cart Number{' '}
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Tidsbokning : 09:08:00 - Thursday - 14/04/2022 - sdg
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  1x Föremal
               </Text>

               <View style={Styles.marginx}>
                  <ButtonScreen Titel="Detali" onPress={NavigationOneOrder} />
               </View>
               <View style={Styles.marginx}>
                  <ButtonScreen Titel="3434 kr" />
               </View>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.containerbox, Styles.marginTop]}>
               <View style={Styles.edit}>
                  <Icon name="create-outline" style={Styles.iconaddress} />
               </View>

               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Beställningstid : 3 Days Ago
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  order number : 3287482374234
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Orderstatus : Processing
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Betala Betalning : Cart Number{' '}
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Tidsbokning : 09:08:00 - Thursday - 14/04/2022 - sdg
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  1x Föremal
               </Text>

               <View style={Styles.marginx}>
                  <ButtonScreen Titel="Detali" onPress={NavigationOneOrder} />
               </View>
               <View style={Styles.marginx}>
                  <ButtonScreen Titel="3434 kr" />
               </View>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.containerbox, Styles.marginTop]}>
               <View style={Styles.edit}>
                  <Icon name="create-outline" style={Styles.iconaddress} />
               </View>

               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Beställningstid : 3 Days Ago
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  order number : 3287482374234
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Orderstatus : Processing
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Betala Betalning : Cart Number{' '}
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Tidsbokning : 09:08:00 - Thursday - 14/04/2022 - sdg
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  1x Föremal
               </Text>

               <View style={Styles.marginx}>
                  <ButtonScreen Titel="Detali" onPress={NavigationOneOrder} />
               </View>
               <View style={Styles.marginx}>
                  <ButtonScreen Titel="3434 kr" />
               </View>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.containerbox, Styles.marginTop]}>
               <View style={Styles.edit}>
                  <Icon name="create-outline" style={Styles.iconaddress} />
               </View>

               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Beställningstid : 3 Days Ago
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  order number : 3287482374234
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Orderstatus : Processing
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Betala Betalning : Cart Number{' '}
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  Tidsbokning : 09:08:00 - Thursday - 14/04/2022 - sdg
               </Text>
               <Text style={[Styles.fontOne, Styles.marginFont]}>
                  1x Föremal
               </Text>

               <View style={Styles.marginx}>
                  <ButtonScreen Titel="Detali" onPress={NavigationOneOrder} />
               </View>
               <View style={Styles.marginx}>
                  <ButtonScreen Titel="3434 kr" />
               </View>
            </TouchableOpacity>
         </ScrollView>
      </View>
   )
}
