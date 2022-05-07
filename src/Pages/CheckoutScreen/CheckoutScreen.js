import React, { Fragment, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import { LeftBottom } from '../../Components/LeftBottom/LeftBottom'
import Icon from 'react-native-vector-icons/Ionicons'
import MapView from 'react-native-maps'
import { ProductName } from '../../Assistant/ProductName'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'
import OrderDetails from '../../Components/OrderDetails/OrderDetails'

function CheckoutScreen({ navigation }) {
   const [showModalDetails, setShowModalDetails] = useState(false)

   const OnClickButton = () => {
      return navigation.goBack()
   }

   const showOrderDetailsModal = () => {
      setShowModalDetails(true)
   }

   const navigateToRestaurantDetails = () => {
      navigation.navigate('RestaurantDetails')
   }

   return (
      <Fragment>
         <ScrollView>
            {showModalDetails && (
               <OrderDetails
                  showModal={showModalDetails}
                  setShowModal={setShowModalDetails}
               />
            )}

            <View
               style={[FontsDefault.containerChildren, Styles.FirstContainer]}
            >
               <View style={Styles.containerTop}>
                  <LeftBottom onPress={OnClickButton} />
               </View>
               <View style={Styles.containerTextHeader}>
                  <Text
                     style={[Styles.headerText, FontsDefault.fontColorBlack]}
                  >
                     Gottis
                  </Text>
               </View>
               <TouchableOpacity
                  onPress={navigateToRestaurantDetails}
                  style={FontsDefault.ContainerIcon}
               >
                  <Icon
                     name="alert-outline"
                     style={[
                        FontsDefault.iconCenter,
                        FontsDefault.fontColorWith,
                        FontsDefault.iconSize,
                     ]}
                  />
               </TouchableOpacity>
            </View>

            <View style={Styles.containerMap}>
               <MapView
                  style={Styles.styleMap}
                  initialRegion={{
                     latitude: 37.78825,
                     longitude: -122.4324,
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421,
                  }}
               />
            </View>
            <View style={FontsDefault.containerChildren}>
               <View>
                  <Text
                     style={[
                        FontsDefault.TitleFont,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     Order Type
                  </Text>
                  <TouchableOpacity
                     onPress={showOrderDetailsModal}
                     style={Styles.mainContent}
                  >
                     <Icon name="walk-outline" style={Styles.fontIcon} />
                     <View>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Pickup in 10-30 min
                        </Text>
                        <Text style={[FontsDefault.fontDescription]}>
                           Drottninggatan 1B, 2, 6Km
                        </Text>
                     </View>
                  </TouchableOpacity>
               </View>

               <View style={Styles.mainContainer}>
                  <Text
                     style={[
                        FontsDefault.TitleFont,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     Payment
                  </Text>
                  <View style={Styles.mainContent}>
                     <Icon
                        name="file-tray-stacked-outline"
                        style={Styles.fontIcon}
                     />
                     <View>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           {ProductName} Promo Code
                        </Text>
                        <Text style={[FontsDefault.fontDescription]}>
                           Enter code to clime your benefits
                        </Text>
                     </View>
                  </View>

                  <View style={Styles.mainContent}>
                     <Icon name="card-outline" style={Styles.fontIcon} />
                     <View>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Add payment method to order
                        </Text>
                     </View>
                  </View>

                  <View style={Styles.mainContent}>
                     <Icon name="briefcase-outline" style={Styles.fontIcon} />
                     <View>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Tip the courier
                        </Text>
                        <Text style={[FontsDefault.fontDescription]}>
                           Optional
                        </Text>
                     </View>
                  </View>
               </View>

               <View style={Styles.mainContainer}>
                  <Text
                     style={[
                        FontsDefault.TitleFont,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     Prices in SEK, incl.taxes
                  </Text>
                  <View>
                     <View style={Styles.containerPrice}>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Item subtotal
                        </Text>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           79,00
                        </Text>
                     </View>
                     <View style={Styles.containerPrice}>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Total
                        </Text>
                        <Text
                           style={[
                              FontsDefault.fontDescription,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           79,00
                        </Text>
                     </View>
                  </View>
               </View>
            </View>
         </ScrollView>
         <View style={Styles.containerBottomButton}>
            <ButtonScreen Titel="Please add a delivery address" />
         </View>
      </Fragment>
   )
}

export default CheckoutScreen
