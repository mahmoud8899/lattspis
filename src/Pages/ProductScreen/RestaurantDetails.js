
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import { LeftBottom } from '../../Components/LeftBottom/LeftBottom'
import Styles from '../RestaurantScreen/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import MapViewComponent from '../../Components/MapView/MapView'
import YourFvourite from '../../Components/YourFvourite/YourFvourite'

function RestaurantDetails(props) {

   const { setOppenRestaurantDatilas, data } = props


   // console.log('data', data)

   // retuen page... 
   const OnClickButton = () => {
      return setOppenRestaurantDatilas(false)
   }

   return (

         <ScrollView >
            <View style={FontsDefault.ContainerALLPadding}>
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
               <MapViewComponent
                  HeightUt={300}
                  mapsChange={data}
                  ZoomMaps={17}
                  Point={45}
               />
            </View>

            <View style={FontsDefault.ContainerALLPadding}>
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

                      <YourFvourite    data={data}  />
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
                        <View style={FontsDefault.stylesTextInButton}>
                           <Text style={[FontsDefault.fontColorBlack,{fontSize : 18}]} >Map</Text>
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
                     {data?.description}
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


