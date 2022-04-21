import { TouchableOpacity, View } from 'react-native'
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

   return (
      <View style={FontsDefault.containerChildren}>
         <LeftBottom
            onPress={() => navigation.goBack()}
            Tilte={ProfileLang.savedAddress[Language]}
         />

         <TouchableOpacity
            onPress={() => setCloseShow(!closeShow)}
            style={Styles.marginTopStor}
         >
            <ShowAddresses />
         </TouchableOpacity>

         <DeletionAlert closeShow={closeShow} setCloseShow={setCloseShow} />

         <View style={Styles.marginTopStor}>
            <ButtonScreen
               Titel={ProfileLang.addNewAddressBtn[Language]}
               onPress={() => navigation.navigate('CreateAddress')}
            />
         </View>
      </View>
   )
}
