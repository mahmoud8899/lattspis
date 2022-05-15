import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import { Fragment } from 'react/cjs/react.production.min'
import { dummyOneStarters } from '../../Assistant/DummyStartersData'

export default function ItemDetails(props) {
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
            <View style={{ position: 'relative', borderRadius: 30 }}>
               <Image
                  source={{ uri: dummyOneStarters.imageUrl }}
                  style={Styles.styleImage}
               />
               <TouchableOpacity style={Styles.route} onPress={CloseALL}>
                  <Icon name="close-outline" style={Styles.ICON} />
               </TouchableOpacity>
            </View>
            <View style={Styles.LastContainer}>
               <Text
                  style={[FontsDefault.TitleFont, FontsDefault.fontColorBlack]}
               >
                  {dummyOneStarters.title}
               </Text>
               <View style={Styles.containerPrice}>
                  <Text style={[Styles.sizePrice, FontsDefault.FontColor]}>
                     149.00 Kr
                  </Text>
                  <Icon name="happy-outline" style={[FontsDefault.iconSize]} />
               </View>

               <View style={Styles.contentParagraph}>
                  <Text style={FontsDefault.fontDescription}>
                     transformRequest` allows changes to the request data before
                     it is sent to the server This is only applicable for
                     request methods 'PUT', 'POST', 'PATCH' and 'DELETE' // The
                     last function in the array must return a string or an
                     instance of Buffer, ArrayBuffer,
                  </Text>
               </View>

               <View style={Styles.containerAddOrder}>
                  <View style={[Styles.contentBtn, Styles.widthAddMinus]}>
                     <Icon
                        name="remove-outline"
                        style={[
                           Styles.plusMinus,
                           Styles.backgroundColorToPlusMinus,
                        ]}
                     />

                     <Text style={Styles.plusMinus}>0</Text>
                     <Icon
                        name="add-outline"
                        style={[
                           Styles.plusMinus,
                           Styles.backgroundColorToPlusMinus,
                        ]}
                     />
                  </View>

                  <View style={[Styles.widthAddToCart, Styles.contentBtn]}>
                     <Text style={FontsDefault.fontButtonCart}>
                        Add To Cart
                     </Text>
                     <Text style={FontsDefault.fontColorWith}>149.00 Kr</Text>
                  </View>
               </View>
            </View>
         </Modal>
      </Fragment>
   )
}
