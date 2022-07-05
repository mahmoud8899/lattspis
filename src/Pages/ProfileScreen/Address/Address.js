import { ScrollView, View } from 'react-native'
import React, { useContext } from 'react'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import Styles from '../Style'
import ShowAddresses from './ShowAddresses'
import FontsDefault from '../../../Assistant/FontDefault'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'

export default function AddressMethods(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props




   // OPTIONS
   // [1] -- ShowAddresses this is show address...
   // [2] -- button add new addres/

   return (
      <View style={
         [FontsDefault.fontBackgroundColoe, { flex: 1 }]} >




         <View style={
            [FontsDefault.fontBackgroundColoe]
         }>
            <View style={FontsDefault.ContainerALLPadding}>

               <LeftBottom onPress={() => navigation.goBack()} Tilte={ProfileLang.savedAddress[Language]} />

               <View style={Styles.showaddress}>
                  <ShowAddresses />
               </View>

            </View>
         </View>

         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe, Styles.bx]}>
            <View style={FontsDefault.ContainerALLPadding}>
               <ButtonScreen
                  Titel={ProfileLang.addNewAddressBtn[Language]}
                  onPress={() => navigation.navigate('CreateAddress')}

               />
            </View>
         </View>





      </View>
   )
}
