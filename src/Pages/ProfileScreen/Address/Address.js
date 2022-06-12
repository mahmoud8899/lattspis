import { ScrollView, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import Styles from '../Style'
import ShowAddresses from './ShowAddresses'
import DeletionAlert from '../../../Components/DeletionAlert/DeletionAlert'
import FontsDefault from '../../../Assistant/FontDefault'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'

export default function AddressMethods(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { navigation } = props

   // oppen remove address..
   const [closeShow, setCloseShow] = useState(false)


   // OPTIONS
   // [1] -- ShowAddresses this is show address...
   // [2] -- button add new addres/

   return (
      <ScrollView contentContainerStyle={[FontsDefault.Conter, FontsDefault.fontBackgroundColoe]}>

         <View style={[FontsDefault.ContainerALLPadding, FontsDefault.fontBackgroundColoe]}>
            <LeftBottom
               onPress={() => navigation.goBack()}
               Tilte={ProfileLang.savedAddress[Language]}
            />
         </View>


         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>

               <TouchableOpacity onPress={() => setCloseShow(!closeShow)} style={Styles.marginTopStor}>
                  <ShowAddresses />
               </TouchableOpacity>
            </View>
         </View>


         <DeletionAlert closeShow={closeShow} setCloseShow={setCloseShow} />

         <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
            <View style={FontsDefault.ContainerALLPadding}>
               <ButtonScreen
                  Titel={ProfileLang.addNewAddressBtn[Language]}
                  onPress={() => navigation.navigate('CreateAddress')}
               />
            </View>
         </View>


      </ScrollView>
   )
}
