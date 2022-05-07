import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import { Fragment } from 'react/cjs/react.production.min'
import ButtonScreen from '../ButtonScreen/ButtonScreen'

export default function OrderDetails(props) {
   const { showModal, setShowModal } = props
   const [selectedHow, setSelectedHow] = useState(false)

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
               <View style={Styles.containerOrderDetails}>
                  <View style={Styles.contentOrderDetailsTitle}>
                     <Text
                        style={[
                           FontsDefault.TitleFont,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        Order Details
                     </Text>
                  </View>
                  <View style={Styles.route}>
                     <TouchableOpacity onPress={CloseALL}>
                        <Icon name="close-outline" style={Styles.ICON} />
                     </TouchableOpacity>
                  </View>
               </View>

               <View style={Styles.howWhenContainer}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     How?
                  </Text>
               </View>

               <View style={Styles.mainContainer}>
                  <Icon name="bicycle-outline" style={Styles.fontIcon} />

                  <View
                     style={[
                        Styles.mainContent,
                        Styles.mainContentBorderBottom,
                     ]}
                  >
                     <View>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Delivery
                        </Text>
                        <Text style={[FontsDefault.fontDescription]}>
                           Tap to choose a different address
                        </Text>
                     </View>

                     <Icon
                        name="checkmark-outline"
                        style={Styles.fontSizeCheckMark}
                     />
                  </View>
               </View>

               <View style={Styles.mainContainer}>
                  <Icon name="walk-outline" style={Styles.fontIcon} />

                  <View style={Styles.mainContent}>
                     <View>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Pick Up
                        </Text>
                        <Text style={[FontsDefault.fontDescription]}>
                           I will pick up the food myself
                        </Text>
                     </View>

                     <Icon
                        name="checkmark-outline"
                        style={Styles.fontSizeCheckMark}
                     />
                  </View>
               </View>

               <View style={Styles.howWhenContainer}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     When?
                  </Text>
               </View>

               <View style={Styles.mainContainer}>
                  <Icon name="time-outline" style={Styles.fontIcon} />

                  <View
                     style={[
                        Styles.mainContent,
                        Styles.mainContentBorderBottom,
                     ]}
                  >
                     <View>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           As soon as possible
                        </Text>
                     </View>

                     <Icon
                        name="checkmark-outline"
                        style={Styles.fontSizeCheckMark}
                     />
                  </View>
               </View>

               <View style={Styles.mainContainer}>
                  <Icon name="calendar-outline" style={Styles.fontIcon} />

                  <View
                     style={[
                        Styles.mainContent,
                        Styles.mainContentBorderBottom,
                     ]}
                  >
                     <View>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Schedule for later
                        </Text>
                     </View>

                     <Icon
                        name="checkmark-outline"
                        style={Styles.fontSizeCheckMark}
                     />
                  </View>
               </View>
               <View style={Styles.containerButtonDone}>
                  <ButtonScreen Titel="Done" />
               </View>
            </View>
         </Modal>
      </Fragment>
   )
}
