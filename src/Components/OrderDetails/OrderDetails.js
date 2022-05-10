import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import { Fragment } from 'react/cjs/react.production.min'
import ButtonScreen from '../ButtonScreen/ButtonScreen'
import DatePicker from 'react-native-date-picker'
import { Button } from 'react-native'

export default function OrderDetails(props) {
   const { showModal, setShowModal } = props
   const [date, setDate] = useState(new Date())
   const [open, setOpen] = useState(false)
   const [checkMarkHow, setCheckMarkHow] = useState(true)
   const [checkMarkWhen, setCheckMarkWhen] = useState(true)

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

               <TouchableOpacity
                  onPress={() => setCheckMarkHow(true)}
                  style={Styles.mainContainer}
               >
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

                     {checkMarkHow && (
                        <Icon
                           name="checkmark-outline"
                           style={Styles.fontSizeCheckMark}
                        />
                     )}
                  </View>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={() => setCheckMarkHow(false)}
                  style={[Styles.mainContainer]}
               >
                  <Icon name="walk-outline" style={Styles.fontIcon} />

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
                           Pick Up
                        </Text>
                        <Text style={[FontsDefault.fontDescription]}>
                           I will pick up the food myself
                        </Text>
                     </View>

                     {!checkMarkHow && (
                        <Icon
                           name="checkmark-outline"
                           style={Styles.fontSizeCheckMark}
                        />
                     )}
                  </View>
               </TouchableOpacity>

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

               <TouchableOpacity
                  onPress={() => setCheckMarkWhen(true)}
                  style={Styles.mainContainer}
               >
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

                     {checkMarkWhen && (
                        <Icon
                           name="checkmark-outline"
                           style={Styles.fontSizeCheckMark}
                        />
                     )}
                  </View>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={() => {
                     setOpen(true)
                     setCheckMarkWhen(false)
                  }}
                  style={Styles.mainContainer}
               >
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

                     <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={date => {
                           setOpen(false)
                           setDate(date)
                        }}
                        onCancel={() => {
                           setOpen(false)
                        }}
                     />

                     {!checkMarkWhen && (
                        <Icon
                           name="checkmark-outline"
                           style={Styles.fontSizeCheckMark}
                        />
                     )}
                  </View>
               </TouchableOpacity>

               <View style={Styles.containerButtonDone}>
                  <ButtonScreen Titel="Done" />
               </View>
            </View>
         </Modal>
      </Fragment>
   )
}
