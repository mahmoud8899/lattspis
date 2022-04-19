import React from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import FontsDefault from '../../../Assistant/FontDefault'
import { dummyOneProduct } from '../../../Assistant/DummyData'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Styles'
import { Fragment } from 'react/cjs/react.production.min'
import Icon from 'react-native-vector-icons/Ionicons'
import RatingScreen from '../../../Components/RatingScreen/RatingScreen'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'

export default function SearchScreen({ navigation }) {
   // this is bottom callback
   const OnClickButton = () => {
      return navigation.goBack()
   }

   return (
      <Fragment>
         <View style={[FontsDefault.containerImageChildren]}>
            <Image
               source={{ uri: dummyOneProduct.imageUrl }}
               style={Styles.styleImage}
            />
            <View style={Styles.containerLeftButton}>
               <LeftBottom onPress={OnClickButton} />
            </View>
         </View>
         <ScrollView style={[FontsDefault.containerChildren]}>
            <View style={Styles.containerDescription}>
               <Text style={FontsDefault.TitleFont}>
                  {dummyOneProduct.title}
               </Text>
               <Text
                  style={[
                     FontsDefault.fontDescription,
                     Styles.contentDescription,
                  ]}
               >
                  {dummyOneProduct.description}
               </Text>
            </View>

            <View style={Styles.container}>
               <View style={Styles.containerIconText}>
                  <Icon
                     name="happy-outline"
                     style={[FontsDefault.iconSize, Styles.styleIcon]}
                  />
                  <Text style={FontsDefault.fontDescription}>Mycket bra,</Text>
               </View>
               <View style={Styles.contentRating}>
                  <RatingScreen value="2.5" />
               </View>
            </View>

            <View style={Styles.container}>
               <View style={Styles.containerIconText}>
                  <Icon
                     name="time-outline"
                     style={[FontsDefault.iconSize, Styles.styleIcon]}
                  />
                  <Text style={FontsDefault.fontDescription}>11:00-23:00</Text>
               </View>
               <View style={Styles.contentRating}>
                  <View style={Styles.containerBtn}>
                     <Text style={Styles.stylesText}>More Information</Text>
                  </View>
               </View>
            </View>

            <View style={Styles.container}>
               <View style={Styles.containerIconText}>
                  <Icon
                     name="bicycle-outline"
                     style={[FontsDefault.iconSize, Styles.styleIcon]}
                  />
                  <Text style={FontsDefault.fontDescription}>
                     Leverans om 20-30 min
                  </Text>
               </View>
               <View style={Styles.contentRating}>
                  <View style={Styles.containerBtn}>
                     <Text style={Styles.stylesText}>Andra</Text>
                  </View>
               </View>
            </View>

            <View style={Styles.emptyView}></View>

            <View style={Styles.container}>
               <View style={Styles.containerIconText}>
                  <Icon
                     name="alert-circle-outline"
                     style={[FontsDefault.iconSize, Styles.styleIcon]}
                  />
                  <Text style={Styles.SeeText}>See All Information</Text>
               </View>
               <View style={Styles.contentRating}>
                  <Icon
                     name="chevron-forward-outline"
                     style={[FontsDefault.iconSize, Styles.styleIcon]}
                  />
               </View>
            </View>

            <View style={Styles.emptyView}></View>

            <View style={Styles.contentParagraph}>
               <Text style={{ fontSize: 16 }}>
                  `transformRequest` allows changes to the request data before
                  it is sent to the server This is only applicable for request
                  methods 'PUT', 'POST', 'PATCH' and 'DELETE' // The last
                  function in the array must return a string or an instance of
                  Buffer, ArrayBuffer,
               </Text>
            </View>
         </ScrollView>
      </Fragment>
   )
}
