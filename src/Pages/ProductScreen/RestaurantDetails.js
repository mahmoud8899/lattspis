
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import { LeftBottom } from '../../Components/LeftBottom/LeftBottom'
import Styles from '../RestaurantScreen/Styles'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'

function RestaurantDetails(props) {
   const { setOppenRestaurantDatilas,data } = props
   const OnClickButton = () => {
      return setOppenRestaurantDatilas(false)
   }

   return (
      <ScrollView>
         <View style={FontsDefault.containerChildren}>
            <View style={Styles.containerTop}>
               <LeftBottom onPress={OnClickButton} />
               <View style={Styles.containerTextHeader}>
                  <Text
                     style={[Styles.headerText, FontsDefault.fontColorBlack]}
                  >
                     {data?.username}
                  </Text>
               </View>
            </View>
         </View>

         <View style={Styles.containerMap}>
            <MapView
               style={Styles.styleMap}
               initialRegion={{
                  latitude: Number(data?.location?.coordinates[0]),
                  longitude: Number(data?.location?.coordinates[1]),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
               }}
            />
         </View>

         <View style={FontsDefault.containerChildren}>
            <View style={Styles.containerContainer}>
               <View style={Styles.contentContent}>
                  <Text
                     style={[
                        FontsDefault.TitleFont,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                       {data?.username}
                  </Text>
                  <Icon
                     name="heart-outline"
                     style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
                  />
               </View>

               <View style={Styles.containerIconOnline}>
                  <Icon
                     name="radio-button-on-outline"
                     style={Styles.iconOnline}
                  />
                  <Text>today: {data?.opentime?.oppen} and {data?.opentime?.close}</Text>
               </View>
            </View>

            <View style={Styles.contentDescription}>
               <Text style={[FontsDefault.fontDescription]}>
                 {data?.description}
               </Text>
            </View>

            <View style={Styles.containerContainer}>
               <Text
                  style={[FontsDefault.TitleFont, FontsDefault.fontColorBlack]}
               >
                  Location
               </Text>
               <View style={Styles.contentContent}>
                  <View>
                     <Text style={FontsDefault.fontDescription}>
                        {data?.addressinfo?.address}
                     </Text>
                     <Text style={FontsDefault.fontDescription}>{data?.addressinfo?.city}</Text>
                  </View>
                  <TouchableOpacity>
                     <View style={Styles.containerBtn}>
                        <Text style={FontsDefault.stylesTextInButton}>Map</Text>
                     </View>
                  </TouchableOpacity>
               </View>
            </View>

            <View>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     Styles.openingHours,
                     FontsDefault.fontColorBlack,
                  ]}
               >
                  Opening hours
               </Text>
               <View>
                  <Text style={FontsDefault.fontDescription}>
                     Sunday - Monday 10:00 - 01:00
                  </Text>
                  <Text style={FontsDefault.fontDescription}>
                     Sunday - Monday 10:00 - 01:00
                  </Text>
                  <Text style={FontsDefault.fontDescription}>
                     Sunday - Monday 10:00 - 01:00
                  </Text>
               </View>
            </View>

            <View style={Styles.containerDeliveryInfo}>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     Styles.openingHours,
                     FontsDefault.fontColorBlack,
                  ]}
               >
                  Delivery Information
               </Text>
               <Text
                  style={[FontsDefault.fontDescription, Styles.openingHours]}
               >
                  Sunday - Monday 10:00 - 01:00
               </Text>
               <View style={Styles.contentDeliveryInfo}>
                  <Text style={[FontsDefault.fontDescription]}>
                     Delivery Cost 19.00Kr
                  </Text>
                  <Text style={[FontsDefault.fontDescription]}>
                     Small order surcharge limit: 120.00Kr
                  </Text>
               </View>
               <View>
                  <Text style={[FontsDefault.fontDescription]}>
                     Long delivery surcharge limit: 0.5Km{' '}
                  </Text>
                  <Text style={[FontsDefault.fontDescription]}>
                     Estimated time until delivery : 25-35 Km
                  </Text>
               </View>
            </View>

            <View style={{ marginBottom: 30 }}>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     Styles.openingHours,
                     FontsDefault.fontColorBlack,
                  ]}
               >
                  Contact
               </Text>

               <Text style={[FontsDefault.fontDescription]}>
                  Premium designed icons for use in web, iOS, Android, and
                  desktop apps. Support for SVG and web font. Completely open
                  source, MIT licensed and built by Ionic.
               </Text>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     marginTop: 15,
                  }}
               >
                  <Text style={FontsDefault.fontDescription}>Restaurant</Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.FontColor,
                     ]}
                  >
                     +{data?.addressinfo?.telefon}
                  </Text>
               </View>

               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     marginTop: 15,
                  }}
               >
                  <Text style={FontsDefault.fontDescription}>Website</Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.FontColor,
                     ]}
                  >
                     View website
                  </Text>
               </View>

               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     marginTop: 15,
                  }}
               >
                  <Text style={FontsDefault.fontDescription}>
                     LattSpis Support
                  </Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.FontColor,
                     ]}
                  >
                     Open chat
                  </Text>
               </View>
            </View>
         </View>
      </ScrollView>
   )
}

export default RestaurantDetails
