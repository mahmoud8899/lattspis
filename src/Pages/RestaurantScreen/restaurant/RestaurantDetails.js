import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontsDefault from '../../../Assistant/FontDefault'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Styles'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'

function RestaurantDetails({ navigation }) {
   const OnClickButton = () => {
      return navigation.goBack()
   }

   return (
      <View style={FontsDefault.containerChildren}>
         <View style={Styles.containerTop}>
            <LeftBottom onPress={OnClickButton} />
            <View style={Styles.containerTextHeader}>
               <Text style={Styles.headerText}>MAX uppsala City</Text>
            </View>
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

         <View style={Styles.containerContainer}>
            <View style={Styles.contentContent}>
               <Text style={FontsDefault.TitleFont}>MAX uppsala City</Text>
               <Icon
                  name="heart-outline"
                  style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
               />
            </View>

            <View style={Styles.containerIconOnline}>
               <Icon name="radio-button-on-outline" style={Styles.iconOnline} />
               <Text>tuesday: ...01:00 and 10:00-03:00</Text>
            </View>
         </View>

         <View style={Styles.contentDescription}>
            <Text style={[FontsDefault.fontDescription]}>
               Premium designed icons for use in web, iOS, Android, and desktop
               apps. Support for SVG and web font. Completely open source, MIT
               licensed and built by Ionic.
            </Text>
         </View>

         <View style={Styles.containerContainer}>
            <Text style={FontsDefault.TitleFont}>Location</Text>
            <View style={Styles.contentContent}>
               <View>
                  <Text style={FontsDefault.fontDescription}>
                     Stora torget 6-8
                  </Text>
                  <Text style={FontsDefault.fontDescription}>Uppsala</Text>
               </View>
               <TouchableOpacity>
                  <View style={Styles.containerBtn}>
                     <Text style={Styles.stylesText}>Map</Text>
                  </View>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

export default RestaurantDetails
