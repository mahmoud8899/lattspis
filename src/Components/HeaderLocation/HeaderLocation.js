import React, { Fragment, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import LocationModal from './LocationModal'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from './Styles'
import LocationModal from './LocationModal'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HeaderLocation(props) {
   // notImageMas is hidden icon
   const { notImageMas } = props

   // oppen add location and add address
   const [closeShow, setCloseShow] = useState(false)

   const [language, setLanguage] = useState('EN')

   useEffect(() => {
      ;(async () => {
         setLanguage(await AsyncStorage.getItem('lang'))
      })()
   }, [])

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
                  onValueChange={showLang}
                  selectedValue={language}
               >
                  <Picker.Item label="Sweden" value="SW" />
                  <Picker.Item label="English" value="EN" />
               </Picker>
            </View>
         </View>
      </Fragment>
   )
}
