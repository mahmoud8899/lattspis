import React, { Fragment, useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import InputScreen from '../../../Components/InputScreen/InputScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import { addresSelection } from '../../../Assistant/Selection'
import Styles from '../Style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'

export default function CreateAddressWrite(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   return (
      <Fragment>
         <LeftBottom
            onPress={() => props.setNextInput(false)}
            Tilte="Uppsala"
         />

         <View style={Styles.borderbottom} />

         <KeyboardAwareScrollView extraHeight={120} enableOnAndroid>
            <View style={Styles.border} />

            <View style={Styles.containerInputText}>
               <Text style={[Styles.fontOne, Styles.fontOnew]}>
                  {ProfileLang.addAddress[Language]}
               </Text>
            </View>

            <View style={Styles.border} />

            <InputScreen Title={ProfileLang.streetAddress[Language]} />
            <View style={Styles.border} />

            <InputScreen Title={ProfileLang.detailHome[Language]} />
            <View style={Styles.border} />
            <View style={[Styles.containerInputText, Styles.city]}>
               <Icon name="location-outline" style={Styles.citychildren} />
               <Text style={[Styles.fontOne, Styles.fontOnew]}>Uppsala</Text>
            </View>

            <View style={Styles.border} />

            <InputScreen Title={ProfileLang.zipCode[Language]} />
            <View style={Styles.border} />

            <View style={Styles.containerInputText}>
               <Text style={Styles.fontOne}>
                  {ProfileLang.paragraphLocation[Language]}
               </Text>
            </View>
            <View style={Styles.border} />

            <TouchableOpacity style={Styles.map}>
               <Icon name="location-outline" style={Styles.mapfont} />
               <Text style={[Styles.fontOne, Styles.fontOnew, Styles.color]}>
                  {ProfileLang.secondLocation[Language]}
               </Text>
            </TouchableOpacity>
            <View style={Styles.border} />

            <View style={Styles.containerInputText}>
               <Text style={[Styles.fontOne, Styles.fontOnew]}>
                  {ProfileLang.typeOfAddress[Language]}
               </Text>
            </View>

            <View style={Styles.containerInputText}>
               <Text style={Styles.fontOne}>
                  {ProfileLang.taggingAddress[Language]}
               </Text>
            </View>
            <View style={Styles.border} />

            <View style={Styles.work}>
               {addresSelection?.map((select, Index) => (
                  <TouchableOpacity key={Index} style={Styles.boxwork}>
                     <Text style={[Styles.fontOne, Styles.fontOnew]}>
                        {select.name}
                     </Text>
                     <Icon name={select.image} style={Styles.iconswork} />
                  </TouchableOpacity>
               ))}
            </View>
         </KeyboardAwareScrollView>
      </Fragment>
   )
}
