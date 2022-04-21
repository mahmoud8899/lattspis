import React, { Fragment, useState, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from './Styles'
import LocationModal from './LocationModal'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ChoseLanguageDatilas } from '../UseContext/ChoseLanguage'
import { LangLanguage } from '../../Assistant/ProductName'
export default function HeaderLocation(props) {
   // notImageMas is hidden icon
   const { notImageMas } = props

   // oppen add location and add address
   const [closeShow, setCloseShow] = useState(false)

   const { Language, setLanguage } = useContext(ChoseLanguageDatilas)


   const showLang = option => {
      console.log('this is option ' + option)
      setLanguage(option)
      AsyncStorage.setItem('lang', option)
   }

   return (
      <Fragment>
         {closeShow && (
            <LocationModal closeShow={closeShow} setCloseShow={setCloseShow} />
         )}

         <View
            style={{
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-between',
            }}
         >
            <TouchableOpacity
               style={Styles.containerLocation}
               onPress={() => setCloseShow(!closeShow)}
            >
               {notImageMas ? null : (
                  <View style={FontsDefault.ContainerIcon}>
                     <Icon
                        name="location-outline"
                        style={[
                           FontsDefault.iconCenter,
                           FontsDefault.fontColorWith,
                           FontsDefault.iconSize,
                        ]}
                     />
                  </View>
               )}

               <Text
                  style={[
                     Styles.textCity,
                     FontsDefault.FontNameCart,
                     FontsDefault.FontColor,
                  ]}
               >
                  uppsala
               </Text>
               <Icon
                  name="chevron-down-outline"
                  style={[
                     FontsDefault.iconSize,
                     Styles.textCity,
                     FontsDefault.FontColor,
                  ]}
               />
            </TouchableOpacity>
            <View
               style={{
                  width: '40%',
                  backgroundColor: '#f1f1f1',
                  borderRadius: 8,
               }}
            >
               <Picker
                  style={{ fontSize: 20, fontWeight: 'bold' }}
                  onValueChange={   showLang}
                  
                  selectedValue={Language}
               
                
               >
                  {LangLanguage.map((la, Index) => (
                     <Picker.Item key={Index} label={la.name} value={la?.value} />
                  ))}


               </Picker>
            </View>
         </View>
      </Fragment>
   )
}
