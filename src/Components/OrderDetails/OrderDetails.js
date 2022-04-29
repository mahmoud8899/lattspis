import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import { Fragment } from 'react/cjs/react.production.min'
import { dummyOneStarters } from '../../Assistant/DummyStartersData'
import COLORS from '../../Assistant/Color'
import InputScreen from '../../Components/InputScreen/InputScreen'

export default function OrderDetails(props) {
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
               <View
                  style={{
                     flexDirection: 'row',
                     alignItems: 'center',
                  }}
               >
                  <View
                     style={{
                        width: '80%',
                        alignItems: 'center',
                     }}
                  >
                     <Text
                        style={[
                           FontsDefault.TitleFont,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        OrderDetails
                     </Text>
                  </View>
                  <View style={Styles.route}>
                     <TouchableOpacity onPress={CloseALL}>
                        <Icon name="close-outline" style={Styles.ICON} />
                     </TouchableOpacity>
                  </View>
               </View>

               <View
                  style={{
                     borderBottomWidth: 0.5,
                     borderBottomColor: '#ccc',
                     paddingBottom: 10,
                  }}
               >
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     How?
                  </Text>
               </View>

               <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Icon
                     name="bicycle-outline"
                     style={{ fontSize: 40, marginRight: 20 }}
                  />

                  <View
                     style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '80%',
                        borderBottomWidth: 0.5,
                        paddingBottom: 10,
                     }}
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

                     <Icon name="checkmark-outline" style={{ fontSize: 40 }} />
                  </View>
               </View>

               <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Icon
                     name="walk-outline"
                     style={{ fontSize: 40, marginRight: 20 }}
                  />

                  <View
                     style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '80%',
                        borderBottomWidth: 0.5,
                        paddingBottom: 10,
                     }}
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

                     <Icon name="checkmark-outline" style={{ fontSize: 40 }} />
                  </View>
               </View>
            </View>
         </Modal>
      </Fragment>
   )
}
