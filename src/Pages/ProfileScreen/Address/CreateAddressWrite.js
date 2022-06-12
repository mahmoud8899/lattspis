import React, { Fragment, useContext, useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import Input from '../../../Components/InputScreen/Input'
import Icon from 'react-native-vector-icons/Ionicons'
import { addresSelection } from '../../../Assistant/Selection'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import FontsDefault from '../../../Assistant/FontDefault'
import Styles from '../Style'
import MapViewComponent from '../../../Components/MapView/MapView'
import ShowMaps from './ShowMaps'

export default function CreateAddressWrite(props) {
   const { Language } = useContext(ChoseLanguageDatilas)


   // oppen maps....
   const [oppenMaps, setOppenMaps] = useState(false)



   // options 
   // [] -- addresSelection this is witch address

   return (
      <Fragment>
         {oppenMaps ?

           <ShowMaps  
           oppenMaps={oppenMaps}
           setOppenMaps={setOppenMaps}
           />

            :
            <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
               <View style={FontsDefault.ContainerALLPadding}>

                  <View style={Styles.containerInputText}>
                     <Text
                        style={[
                           FontsDefault.fontCategory,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        {ProfileLang.addAddress[Language]}
                     </Text>
                  </View>

                  <View style={Styles.border} />

                  <Input Title={ProfileLang.streetAddress[Language]} />
                  <View style={Styles.border} />

                  <Input Title={ProfileLang.detailHome[Language]} />
                  <View style={Styles.border} />
                  <View style={[Styles.containerInputText, Styles.city]}>
                     <Icon name="location-outline" style={Styles.citychildren} />
                     <Text style={[FontsDefault.iconSize, FontsDefault.FontColor, FontsDefault.fontBoldTitle,]} >
                        Uppsala
                     </Text>
                  </View>

                  <View style={Styles.border} />

                  <Input Title={ProfileLang.zipCode[Language]} />
                  <View style={Styles.border} />

                  <View style={Styles.containerInputText}>
                     <Text
                        style={[
                           FontsDefault.fontCategory,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        {ProfileLang.paragraphLocation[Language]}
                     </Text>
                  </View>
                  <View style={Styles.border} />

                  <TouchableOpacity style={Styles.map} onPress={() => setOppenMaps(!oppenMaps)}  >
                     <Icon name="location-outline" style={Styles.mapfont} />
                     <Text style={[Styles.color]}>
                        {ProfileLang.secondLocation[Language]}
                     </Text>
                  </TouchableOpacity>
                  <View style={Styles.border} />

                  <View style={Styles.containerInputText}>
                     <Text style={[FontsDefault.iconSize, FontsDefault.FontColor, FontsDefault.fontBoldTitle,]}  >
                        {ProfileLang.typeOfAddress[Language]}
                     </Text>
                  </View>

                  <View style={Styles.containerInputText}>
                     <Text
                        style={[
                           FontsDefault.fontCategory,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        {ProfileLang.taggingAddress[Language]}
                     </Text>
                  </View>
                  <View style={Styles.border} />

                  <View style={Styles.work}>
                     {addresSelection?.map((select, Index) => (
                        <TouchableOpacity key={Index} style={Styles.boxwork}>
                           <Text
                              style={[FontsDefault.iconSize, FontsDefault.FontColor]}
                           >
                              {select.name}
                           </Text>
                           <Icon name={select.image} style={Styles.iconswork} />
                        </TouchableOpacity>
                     ))}
                  </View>
               </View>
            </View>
         }



      </Fragment>
   )
}


//  <View style={[FontsDefault.ContainerALLPadding, FontsDefault.fontBackgroundColoe]}>
// <LeftBottom onPress={() => props.setNextInput(false)} Tilte="Uppsala" />
// </View> 