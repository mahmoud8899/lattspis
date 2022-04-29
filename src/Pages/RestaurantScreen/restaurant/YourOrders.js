import React from 'react'
import { View, Text, Image } from 'react-native'
import FontsDefault from '../../../Assistant/FontDefault'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Styles'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'
import COLORS from '../../../Assistant/Color'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'
import { Fragment } from 'react/cjs/react.production.min'

function RestaurantDetails({ navigation }) {
   const OnClickButton = () => {
      return navigation.goBack()
   }

   return (
      <Fragment>
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
                     <Text style={Styles.contentOrderNumber}>1</Text>
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
                     <Image
                        source={{
                           uri: 'https://source.unsplash.com/1024x768/?girl',
                        }}
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

            <View style={Styles.containerWriteMessage}>
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
               <View style={{ marginLeft: 60 }}>
                  <Text style={[FontsDefault.fontDescription]}>
                     (Special request , allergies, dietary, limitation, etc...)
                  </Text>
               </View>
            </View>
         </View>

         <View style={{ marginBottom: 10 }}>
            <ButtonScreen Titel="Go Checkout" />
         </View>
      </Fragment>
   )
}

export default RestaurantDetails
