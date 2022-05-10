import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import { Fragment } from 'react/cjs/react.production.min'
import ButtonScreen from '../ButtonScreen/ButtonScreen'
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function OrderDetails(props) {
   const { showModal, setShowModal } = props
   const [date, setDate] = useState(new Date())
   const [open, setOpen] = useState(false)
   const [checkMarkHow, setCheckMarkHow] = useState(true)
   const [checkMarkWhen, setCheckMarkWhen] = useState(true)
   const [dateFromStorage, setDateFromStorage] = useState()

   // close all
   const CloseALL = () => {
      setShowModal(!showModal)
   }

   useEffect(() => {
      console.log(checkMarkHow)

      AsyncStorage.getItem('checkMarkHow').then(val => {
         console.log(val)
         if (val === 'false') {
            setCheckMarkHow(false)
         }
         if (val === 'true') {
            setCheckMarkHow(true)
         }
      })

      AsyncStorage.getItem('checkMarkWhen').then(val => {
         console.log(val)
         if (val === 'false') {
            setCheckMarkWhen(false)
         }
         if (val === 'true') {
            setCheckMarkWhen(true)
         }
      })

      AsyncStorage.getItem('datePick').then(val => {
         console.log(val)
         if (val != null) {
            setDateFromStorage(JSON.parse(val))
         }
      })
      console.log(date.toISOString())
   }, [checkMarkHow, dateFromStorage, date])

   const addCheckMarkToDelivery = () => {
      setCheckMarkHow(true)
      AsyncStorage.setItem('checkMarkHow', 'true')
   }

   const addCheckMarkToPickUp = () => {
      setCheckMarkHow(false)
      AsyncStorage.setItem('checkMarkHow', 'false')
   }

   const addCheckMarkToAsSoonAs = () => {
      setCheckMarkWhen(true)
      AsyncStorage.setItem('checkMarkWhen', 'true')
   }

   const addCheckMarkToSchedule = () => {
      setOpen(true)
      setCheckMarkWhen(false)
      AsyncStorage.setItem('checkMarkWhen', 'false')
      const jsonValue = JSON.stringify(date)
      AsyncStorage.setItem('datePick', jsonValue)
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
                  onPress={addCheckMarkToDelivery}
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
                  onPress={addCheckMarkToPickUp}
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
                  onPress={addCheckMarkToAsSoonAs}
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
                  onPress={addCheckMarkToSchedule}
                  style={Styles.mainContainer}
               >
                  <Icon name="calendar-outline" style={Styles.fontIcon} />

                  <View
                     style={[
                        Styles.mainContent,
                        Styles.mainContentBorderBottom,
                     ]}
                  >
                     {dateFromStorage ? (
                        <View>
                           <Text>{dateFromStorage}</Text>
                        </View>
                     ) : (
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
                     )}

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
