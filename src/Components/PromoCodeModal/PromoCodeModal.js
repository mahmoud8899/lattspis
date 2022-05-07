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
               <View style={Styles.containerPromoCode}>
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

                  <View>
                     <Text
                        style={[
                           FontsDefault.TitleFont,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        Promo Code
                     </Text>
                  </View>
                  <View>
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.FontColor,
                        ]}
                     >
                        Submit
                     </Text>
                  </View>
               </View>
               <View style={Styles.containerPromoCodeInput}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     If you have {ProductName} promo code or gift card enter it
                     below to clime your benefits.
                  </Text>
               </View>
               <View>
                  <InputScreen Title="LattSpis Promo Code" />
               </View>
            </View>
         </Modal>
      </Fragment>
   )
}
