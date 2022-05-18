import React, { Fragment, useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from './Styles'
import LocationModal from './LocationModal'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HeaderLocation(props) {
   // notImageMas is hidden icon
   const { notImageMas, navigation } = props

   // oppen add location and add address
   const [closeShow, setCloseShow] = useState(false)

   const [optionPicker, setOptionPicker] = useState('ENLang')

   useEffect(() => {
      ; (async () => {
         setOptionPicker(await AsyncStorage.getItem('lang'))
      })()
   }, [])

   const showLang = option => {
      setOptionPicker(option)
      AsyncStorage.setItem('lang', option)
   }

   return (
      <Fragment>
         {closeShow && (
            <LocationModal
               navigation={navigation}
               closeShow={closeShow}
               setCloseShow={setCloseShow}
            />
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
                     FontsDefault.fontDescription,
                     FontsDefault.FontColor,
                  ]}
               >
                  Uppsala
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

            </View>
         </View>
      </Fragment>
   )
}



// {/* <Picker
// style={{ fontSize: 20, fontWeight: 'bold' }}
// onValueChange={showLang}
// selectedValue={optionPicker}
// >
// <Picker.Item label="English" value="ENLang" />
// <Picker.Item label="Sweden" value="SWLang" />
// </Picker> */}