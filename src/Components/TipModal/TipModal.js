import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import { Fragment } from 'react/cjs/react.production.min'
import ButtonScreen from '../ButtonScreen/ButtonScreen'
import { ProductName } from '../../Assistant/ProductName'
import InputScreen from '../InputScreen/InputScreen'

export default function PromoCodeModal(props) {
   const { showModal, setShowModal } = props

   // close all
   const CloseALL = () => {
      setShowModal(!showModal)
   }

   return (
      <Fragment>
         <Modal
            animationType="slide"
            onRequestClose={() => setShowModal(!showModal)}
            visible={showModal}
            transparent={true}
         >
            <TouchableOpacity
               style={Styles.FirstContainer}
               onPress={CloseALL}
            ></TouchableOpacity>

            <View style={Styles.LastContainer}>
               <View style={Styles.containerTip}>
                  <View>
                     <TouchableOpacity onPress={CloseALL}>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.FontColor,
                           ]}
                        >
                           Cancel
                        </Text>
                     </TouchableOpacity>
                  </View>

                  <View style={Styles.contentTip}>
                     <Text
                        style={[
                           FontsDefault.TitleFont,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        Tip the courier
                     </Text>
                  </View>
               </View>
               <View style={Styles.mainContainerTipPrice}>
                  <Text style={[FontsDefault.fontDescription]}>
                     They'll get 100% of your tip after the delivery. If you
                     want to change or cancel th tip, please contact support for
                     help.
                  </Text>
                  <View style={Styles.containerTipPrice}>
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.fontColorBlack,
                           Styles.textTipPrice,
                        ]}
                     >
                        None
                     </Text>
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.fontColorBlack,
                           Styles.textTipPrice,
                        ]}
                     >
                        10,00
                     </Text>
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.fontColorBlack,
                           Styles.textTipPrice,
                        ]}
                     >
                        20,00
                     </Text>
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.fontColorBlack,
                           Styles.textTipPrice,
                        ]}
                     >
                        30,00
                     </Text>
                     <View style={[Styles.textTipPrice, Styles.otherSum]}>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Other sum (max 200,00)
                        </Text>
                        <Icon
                           name="chevron-forward-outline"
                           style={Styles.iconToOtherSum}
                        />
                     </View>
                  </View>
               </View>
            </View>
         </Modal>
      </Fragment>
   )
}
