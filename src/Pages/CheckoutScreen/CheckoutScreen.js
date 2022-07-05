import React, { Fragment, useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import FontsDefault from '../../Assistant/FontDefault'
import { LeftBottom } from '../../Components/LeftBottom/LeftBottom'
import Icon from 'react-native-vector-icons/Ionicons'
import { ProductName } from '../../Assistant/ProductName'
import ButtonScreen from '../../Components/ButtonScreen/ButtonScreen'
import OptionsMenu from '../../Components/OptionsMenu/OptionsMenu'
import PromoCodeModal from '../../Components/PromoCodeModal/PromoCodeModal'
import TipModal from '../../Components/TipModal/TipModal'
import MapViewComponent from '../../Components/MapView/MapView'
import { useDispatch, useSelector } from 'react-redux'
import { ResturantIDAction } from '../../Redux/Action/HomeAction'
import NavBarCheckout from './NavBarCheckout'
import RestaurantDetails from '../ProductScreen/RestaurantDetails'
import ChooseDelivery from './ChooseDelivery'

export default function CheckoutScreen({ navigation, route }) {



   // restaurant id testing....
   const restaurantTestingid = '622b2c132df8aa20c7665069'

   // oppen modal choose delivey and time 
   const [showModalDetails, setShowModalDetails] = useState(false)


   const [showModalPromoCode, setShowModalPromoCode] = useState(false)
   const [showTipModal, setShowTipModal] = useState(false)

   // oppen restaurant details
   const [restaurantDetailsFunation, setRestaurantDetailsFunation] = useState(false)

   // this is option show all restaurst datilas.
   const RestaurantID = useSelector((state) => state.RestaurantID)
   const { loading, error, restaurant } = RestaurantID


   const dispatch = useDispatch()







   // set restaurant id
   useEffect(() => {

      dispatch(ResturantIDAction(restaurantTestingid))


   }, [dispatch])

   console.log('resturant', restaurant)

   // return restaurant page
   const OnClickButton = () => {
      return navigation.goBack()
   }

   // options delivery and time 
   const showOrderDetailsModal = () => {
      setShowModalDetails(true)
   }

   // restaurant details....
   const navigateToRestaurantDetails = () => {

      setRestaurantDetailsFunation(true)
   }

   const showPromoCodeModal = () => {
      setShowModalPromoCode(true)
   }

   // add payment card...
   const navigateToCheckout = () => {
      navigation.navigate('AddPayment')
   }

   // pay mo
   const handleShowTipModal = () => {
      setShowTipModal(true)
   }



   /// options 
   // [1] -- OptionsMenu  list choose delivey or time order important //...//
   // [1] -- RestaurantDetails  this is restaurant details
   // [2]  NavBarCheckout  nav bar return restaurant page and restaurant details
   // [3] - maps page show restaurant location and user
   // [4] -- ChooseDelivery this is choose delivery or time order

   return (
      <View style={[{ backgroundColor: 'white', flex: 1 }]} >
         <View style={{ flex: 1 }}>
            <ScrollView>



               {/* oppen and choose delivey or time  */}
               {showModalDetails && (
                  <OptionsMenu
                     userList={showModalDetails}
                     setUserList={setShowModalDetails}
                  />
               )}



               {showModalPromoCode && (
                  <PromoCodeModal
                     showModal={showModalPromoCode}
                     setShowModal={setShowModalPromoCode}
                  />
               )}

               {showTipModal && (
                  <TipModal
                     showModal={showTipModal}
                     setShowModal={setShowTipModal}
                  />
               )}

               {/* restaurant details  */}
               {restaurantDetailsFunation &&
                  <RestaurantDetails
                     data={restaurant}
                     setOppenRestaurantDatilas={setRestaurantDetailsFunation}

                  />
               }


               {/* nav bar details */}
               <NavBarCheckout
                  navigateToRestaurantDetails={navigateToRestaurantDetails}
                  OnClickButton={OnClickButton}
               />

               {/* // maps page */}

               <MapViewComponent
                  HeightUt={300}
                  mapsChange={restaurant}
                  ZoomMaps={17}
                  Point={45}
               />


               <View style={FontsDefault.ContainerALLPadding}>

                  <View style={FontsDefault.containerChildren}>

                     {/* choose  delivery and time  */}

                     <ChooseDelivery showOrderDetailsModal={showOrderDetailsModal} />



                     <View style={Styles.mainContainer}>
                        <Text
                           style={[
                              FontsDefault.TitleFont,
                              FontsDefault.fontColorBlack,
                           ]}
                        >
                           Payment
                        </Text>
                        <TouchableOpacity
                           onPress={showPromoCodeModal}
                           style={Styles.mainContent}
                        >
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
                        </TouchableOpacity>

                        <TouchableOpacity
                           onPress={navigateToCheckout}
                           style={Styles.mainContent}
                        >
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
                        </TouchableOpacity>

                        <TouchableOpacity
                           onPress={handleShowTipModal}
                           style={Styles.mainContent}
                        >
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
                        </TouchableOpacity>
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
               </View>


               <View style={Styles.containerBottomButton}>
                  <ButtonScreen Titel="Please add a delivery address" />
               </View>

            </ScrollView>
         </View>





      </View>
   )
}


