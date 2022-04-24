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
import SearchInput from '../../../Components/SearchInput/SearchInput'
import { dummyStartersData } from '../../../Assistant/DummyStartersData'
import COLORS from '../../../Assistant/Color'

export default function SearchScreen({ navigation }) {
   // this is bottom callback
   const OnClickButton = () => {
      return navigation.goBack()
   }

   return (
      <View style={{ height: '100%' }}>
         <ScrollView style={Styles.containerScrollView}>
            <View style={[FontsDefault.containerImageChildren]}>
               <Image
                  source={{ uri: dummyOneProduct.imageUrl }}
                  style={Styles.styleImage}
               />
               <View style={Styles.containerLeftButton}>
                  <LeftBottom onPress={OnClickButton} />
                  <View style={{ marginLeft: 70, alignItems: 'center' }}>
                     <Text style={{ fontSize: 20 }}>Tanakora Sushi</Text>
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.FontColor,
                        ]}
                     >
                        {' '}
                        Leverans om 20-30 min
                     </Text>
                  </View>
               </View>
            </View>

            <View style={{ padding: 10 }}>
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
                     <Text style={FontsDefault.fontDescription}>
                        Mycket bra,
                     </Text>
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
                     <Text style={FontsDefault.fontDescription}>
                        11:00-23:00
                     </Text>
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
                     `transformRequest` allows changes to the request data
                     before it is sent to the server This is only applicable for
                     request methods 'PUT', 'POST', 'PATCH' and 'DELETE' // The
                     last function in the array must return a string or an
                     instance of Buffer, ArrayBuffer,
                  </Text>
               </View>

               <View style={Styles.contentSearch}>
                  <SearchInput />
               </View>
               <Text style={[FontsDefault.TitleFont, Styles.titleFood]}>
                  Starters
               </Text>
               {dummyStartersData.map(item => {
                  return (
                     <Fragment>
                        <View key={item.title} style={Styles.containerStarters}>
                           <View
                              style={
                                 item.imageUrl ? Styles.ContainerText : null
                              }
                           >
                              <Text style={Styles.titleStyle}>
                                 {item.title}
                              </Text>
                              <Text style={FontsDefault.fontDescription}>
                                 {item.description}
                              </Text>
                              <Text style={Styles.stylePrice}>
                                 {item.price}
                              </Text>
                           </View>
                           {item.imageUrl && (
                              <View style={Styles.containerImage}>
                                 <Image
                                    source={{ uri: item.imageUrl }}
                                    style={Styles.imageStyle}
                                 />
                              </View>
                           )}
                        </View>
                        <View style={Styles.lineHeight}></View>
                     </Fragment>
                  )
               })}

               <View style={Styles.containerCategoryFood}>
                  <Text
                     style={[
                        FontsDefault.fontColorWith,
                        Styles.styleTitleFood,
                        Styles.fontSizeTitleFood,
                     ]}
                  >
                     Starters
                  </Text>
                  <Text style={[Styles.fontSizeTitleFood]}>Sushi</Text>
                  <Text style={[Styles.fontSizeTitleFood]}>Poke Bowls</Text>
                  <Text style={[Styles.fontSizeTitleFood]}>Sashimi</Text>
               </View>

               <Text style={[FontsDefault.TitleFont, Styles.titleFood]}>
                  Sushi
               </Text>
               <View style={{ marginBottom: 30 }}>
                  <Text style={FontsDefault.fontDescription}>
                     Includes miso soup
                  </Text>
                  {dummyStartersData.map(item => {
                     return (
                        <Fragment>
                           <View
                              key={item.title}
                              style={Styles.containerStarters}
                           >
                              <View
                                 style={
                                    item.imageUrl ? Styles.ContainerText : null
                                 }
                              >
                                 <Text style={Styles.titleStyle}>
                                    {item.title}
                                 </Text>
                                 <Text style={FontsDefault.fontDescription}>
                                    {item.description}
                                 </Text>
                                 <Text style={Styles.stylePrice}>
                                    {item.price}
                                 </Text>
                              </View>
                              {item.imageUrl && (
                                 <View style={Styles.containerImage}>
                                    <Image
                                       source={{ uri: item.imageUrl }}
                                       style={Styles.imageStyle}
                                    />
                                 </View>
                              )}
                           </View>
                           <View style={Styles.lineHeight}></View>
                        </Fragment>
                     )
                  })}
               </View>
            </View>
         </ScrollView>
      </View>
   )
}
