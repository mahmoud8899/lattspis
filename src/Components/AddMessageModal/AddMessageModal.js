import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import Icon from 'react-native-vector-icons/Ionicons'
import { Fragment } from 'react/cjs/react.production.min'
import { dummyOneStarters } from '../../Assistant/DummyStartersData'
import COLORS from '../../Assistant/Color'
import InputScreen from '../../Components/InputScreen/InputScreen'

export default function AddMessageModal(props) {
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
               <View style={Styles.route}>
                  <TouchableOpacity onPress={CloseALL}>
                     <Text style={{ color: 'white' }}>Done</Text>
                  </TouchableOpacity>
               </View>

               <View>
                  <Text
                     style={[
                        FontsDefault.TitleFont,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     Add Message
                  </Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        Styles.textMessage,
                     ]}
                  >
                     Please note that your message yo the venue may also be seen
                     by the courier partner delivering your order 😀
                  </Text>
               </View>

               <View style={{ marginTop: 20 }}>
                  <InputScreen
                     StyleInput={Styles.StyleInput}
                     StyleContainer={Styles.StyleContainer}
                     Title="(Special request , allergies, dietary, limitation, etc...)"
                  />
               </View>
            </View>
         </Modal>
      </Fragment>
   )
}
