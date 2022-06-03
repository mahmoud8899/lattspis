import React, { useState,Fragment } from 'react'
import { View, Text,  TouchableOpacity } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import { LeftBottom } from '../LeftBottom/LeftBottom'
import Styles from '../../Pages/RestaurantScreen/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import ButtonScreen from '../ButtonScreen/ButtonScreen'
import AddMessageModal from '../AddMessageModal/AddMessageModal'
import LazyLoading from '../LazyLoading/LazyLoading'

function YourOrders({ navigation }) {
   const [showModal, setShowModal] = useState(false)

   const OnClickButton = () => {
      return navigation.goBack()
   }

   const handleGoToCheckout = () => {
      navigation.navigate('CheckoutScreen')
   }

   return (
      <Fragment>
         {showModal && (
            <AddMessageModal
               showModal={showModal}
               setShowModal={setShowModal}
            />
         )}
         <View style={FontsDefault.containerChildren}>
            <LeftBottom onPress={OnClickButton} Tilte="Your Order" />

            <View style={{ marginTop: 20 }}>
               <Text
                  style={[FontsDefault.TitleFont, FontsDefault.fontColorBlack]}
               >
                  Order Items
               </Text>
               <View style={Styles.ContainerOderItem}>
                  <View style={Styles.containerFirstOrder}>
                     <Text
                        style={[
                           Styles.contentOrderNumber,
                           FontsDefault.fontCategory,
                        ]}
                     >
                        1
                     </Text>
                     <View>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Chicken Wings Box
                        </Text>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.FontColor,
                           ]}
                        >
                           149.00 Kr
                        </Text>
                     </View>
                  </View>
                  <View>
                     <LazyLoading
                        image='https://source.unsplash.com/1024x768/?girl'
                        style={Styles.styleImageOrder}
                     />
                  </View>
               </View>
            </View>

            <View style={Styles.containerRecommendation}>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     FontsDefault.fontColorBlack,
                     ,
                  ]}
               >
                  Recommendations
               </Text>

               <View style={Styles.contentTextRecommendation}>
                  <View style={Styles.textRecommendation}>
                     <Icon
                        name="ellipse-outline"
                        style={Styles.iconRecommendation}
                     />
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        Spring rolls
                     </Text>
                  </View>
                  <View>
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.FontColor,
                        ]}
                     >
                        149.00 Kr
                     </Text>
                  </View>
               </View>
            </View>

            <TouchableOpacity
               style={Styles.containerWriteMessage}
               onPress={() => setShowModal(true)}
            >
               <View style={Styles.contentAddMessage}>
                  <Icon
                     name="chatbox-ellipses-outline"
                     style={Styles.iconMessage}
                  />
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     Add a message for the restaurant
                  </Text>
               </View>
               <View style={Styles.textForAddMessage}>
                  <Text style={[FontsDefault.fontDescription]}>
                     (Special request , allergies, dietary, limitation, etc...)
                  </Text>
               </View>
            </TouchableOpacity>
         </View>

         <View style={Styles.containerBottomButton}>
            <ButtonScreen Titel="Go Checkout" onPress={handleGoToCheckout} />
         </View>
      </Fragment>
   )
}

export default YourOrders
