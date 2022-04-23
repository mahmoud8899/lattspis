import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import { ProductName } from '../../Assistant/ProductName'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { Fragment } from 'react/cjs/react.production.min'
import SelectCity from './SelectCity'
import { ChoseLanguageDatilas } from '../../Components/UseContext/ChoseLanguage'
import LocationLang from '../../Language/Location'

// // show and select loction and add addresss.

export default function LocationModal(props) {
   const { Language } = useContext(ChoseLanguageDatilas)

   const { setCloseShow, closeShow } = props

   const navigation = useNavigation()

   // NAVIGATION add address
   const NavigationAddAddress = () => {
      // navigation.push('CreateAddress')
      navigation.navigate('ProfileScreen', {
         screen: 'Address',
         params: {
            screen: 'CreateAddress',
         },
      })

      return setCloseShow(!closeShow)
   }

   // select city
   const [showCity, setShowCity] = useState(false)

   // oppen select city
   const HandleCity = () => setShowCity(!showCity)

   // check city if oppen close....
   const CHeckClose = () => {
      if (showCity) return setShowCity(!showCity)
      setCloseShow(!closeShow)
   }

   // close all
   const CloseALL = () => {
      setCloseShow(!closeShow)
      setShowCity(!showCity)
   }

   return (
      <Fragment>
         <Modal
            animationType="slide"
            onRequestClose={() => setCloseShow(!closeShow)}
            visible={closeShow}
            transparent={true}
         >
            <TouchableOpacity
               style={Styles.FirstContainer}
               onPress={CloseALL}
            ></TouchableOpacity>
            <View style={Styles.LastContainer}>
               <TouchableOpacity style={Styles.route} onPress={CHeckClose}>
                  <Icon name="close-outline" style={Styles.ICON} />
               </TouchableOpacity>
               {showCity ? (
                  <SelectCity />
               ) : (
                  <Fragment>
                     <View>
                        <Text
                           style={[FontsDefault.TitleFont, FontsDefault.BALCK]}
                        >
                           {LocationLang.location[Language]}
                        </Text>
                     </View>

                     <TouchableOpacity style={Styles.flexLocation}>
                        <View style={[Styles.route, Styles.left]}>
                           <Icon name="navigate-outline" style={Styles.ICON} />
                        </View>
                        <View style={Styles.flexLocationText}>
                           <Text
                              style={[
                                 FontsDefault.FontNameCart,
                                 Styles.MARGINB,
                              ]}
                           >
                              {LocationLang.currentLocation[Language]}
                           </Text>
                           <Text style={FontsDefault.fontDescription}>
                              {ProductName} {LocationLang.useLocation[Language]}
                           </Text>
                        </View>
                     </TouchableOpacity>

                     <View style={Styles.Top} />

                     <TouchableOpacity
                        style={Styles.flexLocation}
                        onPress={NavigationAddAddress}
                     >
                        <View
                           style={[Styles.route, Styles.left, Styles.notColor]}
                        >
                           <Icon name="add-outline" style={Styles.BALCK} />
                        </View>

                        <View style={Styles.flexLocationText}>
                           <Text
                              style={[
                                 FontsDefault.FontNameCart,
                                 Styles.MARGINB,
                              ]}
                           >
                              {LocationLang.addNewAddress[Language]}
                           </Text>
                        </View>
                     </TouchableOpacity>

                     <View style={Styles.Top} />

                     <TouchableOpacity
                        style={Styles.flexLocation}
                        onPress={HandleCity}
                     >
                        <View
                           style={[Styles.route, Styles.left, Styles.notColor]}
                        >
                           <Icon name="apps-outline" style={Styles.BALCK} />
                        </View>

                        <View style={Styles.flexLocationText}>
                           <Text
                              style={[
                                 FontsDefault.FontNameCart,
                                 Styles.MARGINB,
                              ]}
                           >
                              {LocationLang.browseAll[Language]}
                           </Text>
                        </View>
                     </TouchableOpacity>
                  </Fragment>
               )}
            </View>
         </Modal>
      </Fragment>
   )
}
