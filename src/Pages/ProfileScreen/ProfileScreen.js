import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useContext, Fragment } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Styles from './Style'
import HeaderScreen from '../../Components/Header/Header'
import FontsDefault from '../../Assistant/FontDefault'
import CartItems from '../../Components/CartItems/CartItems'
import { dummyProducts } from '../../Assistant/DummyData'
import ProfileLang from '../../Language/Profile'
import { ChoseLanguageDatilas } from '../../Components/UseContext/ChoseLanguage'
import { useSelector } from 'react-redux'
import {SliceNameNot,SliceName} from '../../Assistant/Slice'
export default function ProfileScreen(props) {
   const { navigation } = props

   const [yourFavourites, setYourFavourites] = useState(true)
   // user Info
   const TheCheckUserInfo = useSelector((state) => state?.userLogin?.userInfo)
   // console.log('userLogin', TheCheckUserInfo)

   // select lang
   const { Language } = useContext(ChoseLanguageDatilas)

   return (
      <View style={FontsDefault.containerChildren}>
         <ScrollView>

            <View style={FontsDefault.ContainerALLPadding}>
               <HeaderScreen Title={`${ProfileLang.sayHi[Language]} mahmoud`} />
            </View>

            <View style={FontsDefault.ContainerALLPadding}>
               <TouchableOpacity
                  style={Styles.JustCenter}
                  onPress={() => navigation.navigate('Account')}
               >
                  <View style={Styles.Radius}>
                     <Text
                        style={[
                           Styles.RadiusText,
                           FontsDefault.iconSize,
                           Styles.exstra,
                           FontsDefault.fontColorWith,
                        ]}
                     >
                         {SliceNameNot(TheCheckUserInfo?.firstname,1)} {SliceNameNot(TheCheckUserInfo?.lastname,1)}
                     </Text>
                  </View>
                  <View>
                     <Text style={[FontsDefault.iconSize, Styles.exstra]}>
                        {SliceNameNot(TheCheckUserInfo?.firstname,10)} {SliceName(TheCheckUserInfo?.lastname,10)}
                     </Text>
                     <Text style={FontsDefault.fontDescription}>
                        {ProfileLang.NoOrders[Language]}
                     </Text>
                  </View>

                  <View>
                     <Icon
                        name="chevron-forward-outline"
                        style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
                     />
                  </View>
               </TouchableOpacity>

               <View style={Styles.ButtomLine} />

               <View style={Styles.MarginTop}>
                  <View style={Styles.seeall}>
                     <Text
                        style={[
                           FontsDefault.TitleFont,
                           FontsDefault.FontColor,
                           FontsDefault.fontBoldTitle,
                        ]}
                     >
                        {ProfileLang.favourite[Language]}
                     </Text>
                     {yourFavourites && (
                        <TouchableOpacity
                        style={[FontsDefault.stylesTextInButton]}
                           onPress={() => navigation.navigate('CardLike')}
                        >
                           <Text style={FontsDefault.FontColor} >
                              {ProfileLang.SeeAllBtn[Language]}
                              
                           </Text>
                        </TouchableOpacity>
                     )}
                  </View>

                  <View style={Styles.ContainerFavouri}>
                     {yourFavourites ? (
                        <CartItems
                           data={dummyProducts}
                           dir={true}
                           navigation={navigation}
                        />
                     ) : (
                        <Fragment>
                           <View
                              style={[
                                 Styles.ContainerFavouritext,
                                 Styles.marginTop,
                              ]}
                           >
                              <Text style={FontsDefault.fontDescription}>
                                 Add a restaurant to your favourites by tapping the
                                 heart icon in the menu view. Your favourites are
                                 displayed here!
                              </Text>
                           </View>

                           <View style={Styles.ContainerFavouriticon}>
                              <Icon
                                 name="heart-outline"
                                 style={Styles.iconStory}
                              />
                           </View>
                        </Fragment>
                     )}
                  </View>
               </View>

               <View style={Styles.ButtomLine} />

               <View style={Styles.MarginTop}>
                  <Text
                     style={[
                        FontsDefault.TitleFont,
                        FontsDefault.FontColor,
                        FontsDefault.fontBoldTitle,
                     ]}
                  >
                     {ProfileLang.settings[Language]}
                  </Text>

                  <TouchableOpacity
                     style={[
                        Styles.JustCenter,
                        Styles.PaddingBorder,
                        Styles.marginTop,
                     ]}
                     onPress={() => navigation.navigate('Account')}
                  >
                     <Text style={[FontsDefault.FontNameCart, Styles.exstra]}>
                        {ProfileLang.account[Language]}
                     </Text>
                     <View>
                        <Icon
                           name="chevron-forward-outline"
                           style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
                        />
                     </View>
                  </TouchableOpacity>

                  <View style={Styles.ButtomLine} />

                  <TouchableOpacity
                     style={[Styles.JustCenter, Styles.PaddingBorder]}
                     onPress={() => navigation.navigate('PaymentHome')}
                  >
                     <Text style={[FontsDefault.FontNameCart, Styles.exstra]}>
                        {ProfileLang.paymentMethod[Language]}
                     </Text>
                     <View>
                        <Icon
                           name="chevron-forward-outline"
                           style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
                        />
                     </View>
                  </TouchableOpacity>
                  <View style={Styles.ButtomLine} />

                  <TouchableOpacity
                     style={[Styles.JustCenter, Styles.PaddingBorder]}
                     onPress={() => navigation.navigate('Address')}
                  >
                     <Text style={[FontsDefault.FontNameCart, Styles.exstra]}>
                        {ProfileLang.myAddress[Language]}
                     </Text>
                     <View>
                        <Icon
                           name="chevron-forward-outline"
                           style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
                        />
                     </View>
                  </TouchableOpacity>
                  <View style={Styles.ButtomLine} />

                  <TouchableOpacity
                     style={[Styles.JustCenter, Styles.PaddingBorder]}
                     onPress={() => navigation.navigate('OrderScreen')}
                  >
                     <Text style={[FontsDefault.FontNameCart, Styles.exstra]}>
                        {ProfileLang.orderHistory[Language]}
                     </Text>
                     <View>
                        <Icon
                           name="chevron-forward-outline"
                           style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
                        />
                     </View>
                  </TouchableOpacity>
                  <View style={Styles.ButtomLine} />
               </View>
            </View>




         </ScrollView>
      </View>
   )
}

// <Text> Proile user...</Text>
// <Icon name='add-circle-outline' style={Styles.Icons}  color='red'  />
