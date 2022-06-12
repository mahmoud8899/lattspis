import React, { useState, Fragment } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import { LeftBottom } from '../LeftBottom/LeftBottom'
import Styles from '../../Pages/RestaurantScreen/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import ButtonScreen from '../ButtonScreen/ButtonScreen'
import AddMessageModal from '../AddMessageModal/AddMessageModal'
import { useNavigation } from '@react-navigation/native'
import Items from './Items'
import { ScrollView } from 'react-native-virtualized-view'
import { TotalPrice } from '../../Assistant/Total'
import Emptybasket from './Emptybasket'
function YourOrders(props) {
   const { oppenYourOrder, setOppenYourOrder, filterCartProduct } = props

   const [showModal, setShowModal] = useState(false)

   // close card orders...
   const OnClickButton = () => {
      // console.log('test...')
      return setOppenYourOrder(false)
   }

   const navigation = useNavigation();


   // navigation to checkOut....
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

         <View style={Styles.Border}>
            <View style={Styles.padding}>
               <LeftBottom
                  IconName='chevron-down-outline'
                  onPress={OnClickButton}
                  Tilte="Your Order"
              

               />
            </View>

         </View>
         {filterCartProduct?.length >= 1 ?
            <>
               <View style={Styles.padding}>






                  <View style={Styles.MargintTop}>
                     <Text
                        style={[FontsDefault.TitleFont, FontsDefault.fontColorBlack]}
                     >
                        Order Items
                     </Text>

                  </View>


               </View>

               <View style={Styles.order} >

                  <ScrollView>
                     <Items data={filterCartProduct} />
                     <View style={{ flex: 1, marginBottom: 60 }}>
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





                  </ScrollView>

                  <View >

                
                        <ButtonScreen
                           Titel="Go Checkout"
                           onPress={handleGoToCheckout}
                           styleTouch={Styles.viewOrder}
                           ViewOrder={
                              <View style={Styles.buttomchildren} >
                                 <View style={Styles.number} >
                                    <Text style={[FontsDefault.fontDescription, FontsDefault.fontBoldTitle]}>
                                       {filterCartProduct?.length}
                                    </Text>
                                 </View>
                                 <View>
                                    <Text style={[
                                       FontsDefault.fontDescription,
                                       FontsDefault.fontBoldTitle,
                                       FontsDefault.fontColorWith]}>view order</Text>
                                 </View>

                                 <View>
                                    <Text style={[FontsDefault.fontDescription, FontsDefault.fontBoldTitle, FontsDefault.fontColorWith]}>
                                       {TotalPrice(filterCartProduct)} kr
                                    </Text>
                                 </View>
                              </View>
                           }

                        />
                     
                  </View>
               </View>
            </>

            :

            <Emptybasket  
            setOppenYourOrder={setOppenYourOrder}
            />
  

         }





      </Fragment>
   )
}

export default YourOrders
