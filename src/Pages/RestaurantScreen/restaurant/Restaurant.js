import React, { useState, useRef } from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import FontsDefault from '../../../Assistant/FontDefault'
import { dummyOneProduct } from '../../../Assistant/DummyData'
import { LeftBottom } from '../../../Components/LeftBottom/LeftBottom'
import Styles from '../Styles'
import { Fragment } from 'react/cjs/react.production.min'
import Icon from 'react-native-vector-icons/Ionicons'
import RatingScreen from '../../../Components/RatingScreen/RatingScreen'
import SearchInput from '../../../Components/SearchInput/SearchInput'
import {
   dummyStartersData,
   dummySushiData,
} from '../../../Assistant/DummyStartersData'
import ItemDetails from '../../../Components/ItemDetails/ItemDetails'
import ButtonScreen from '../../../Components/ButtonScreen/ButtonScreen'

export default function Restaurant({ navigation }) {
   const [showModal, setShowModal] = useState(false)
   const [styleBackgroundScroll, setStyleBackgroundScroll] = useState(false)
   const [ShowIconSearch, setShowIconSearch] = useState(false)
   const [showCategory, setShowCategory] = useState(false)

   // this is bottom callback
   const OnClickButton = () => {
      return navigation.goBack()
   }

   const navigateToOrders = () => {
      console.log('here navigate')
      navigation.navigate('YourOrders')
   }

   const handleNavigate = () => {
      navigation.navigate('RestaurantDetails')
   }

   const refScrollSearch = useRef()

   const onClick = () => {
      refScrollSearch.current.scrollTo({ y: 840 })
      // console.log(refScrollSearch.current)
   }

   const handleScroll = event => {
      const positionY = event.nativeEvent.contentOffset.y

      if (positionY > 310) {
         setStyleBackgroundScroll(true)
      } else {
         setStyleBackgroundScroll(false)
      }

      if (positionY > 900) {
         setShowIconSearch(true)
      } else {
         setShowIconSearch(false)
      }

      if (positionY > 2070) {
         setShowCategory(true)
      } else {
         setShowCategory(false)
      }
   }

   return (
      <View style={{ height: '100%', position: 'relative' }}>
         {showModal && (
            <ItemDetails showModal={showModal} setShowModal={setShowModal} />
         )}
         <View
            style={[
               Styles.containerLeftButton,
               styleBackgroundScroll && Styles.styleBackgroundForScroll,
            ]}
         >
            <View style={Styles.test}>
               <LeftBottom onPress={OnClickButton} />
               <View style={Styles.contentRestaurantName}>
                  <Text
                     style={[
                        FontsDefault.iconSize,
                        FontsDefault.fontColorBlack,
                     ]}
                  >
                     Tanakora Sushi
                  </Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.FontColor,
                     ]}
                  >
                     Leverans om 20-30 min
                  </Text>
               </View>

               <View style={Styles.containerSearchIcon}>
                  {ShowIconSearch && (
                     <TouchableOpacity
                        onPress={onClick}
                        style={FontsDefault.ContainerIcon}
                     >
                        <Icon
                           name="search-outline"
                           style={[
                              FontsDefault.iconCenter,
                              FontsDefault.fontColorWith,
                              FontsDefault.iconSize,
                           ]}
                        />
                     </TouchableOpacity>
                  )}
               </View>
            </View>

            {showCategory && (
               <View style={Styles.containerCategoryFood}>
                  <Text
                     style={[
                        FontsDefault.fontColorNotClick,
                        FontsDefault.fontDescriptionLight,
                        FontsDefault.fontColorBlack,
                        Styles.styleTitleFood,
                     ]}
                  >
                     Starters
                  </Text>
                  <Text style={[FontsDefault.fontDescriptionLight]}>Sushi</Text>
                  <Text style={[FontsDefault.fontDescriptionLight]}>
                     Poke Bowls
                  </Text>
                  <Text style={[FontsDefault.fontDescriptionLight]}>
                     Sashimi
                  </Text>
               </View>
            )}
         </View>
         <ScrollView
            ref={refScrollSearch}
            onScroll={handleScroll}
            style={Styles.containerScrollView}
         >
            <View style={[FontsDefault.containerImageChildren]}>
               <Image
                  source={{ uri: dummyOneProduct.imageUrl }}
                  style={Styles.styleImage}
               />
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
                  <View>
                     <Icon
                        name="happy-outline"
                        style={[FontsDefault.iconSize, Styles.styleIcon]}
                     />
                  </View>
                  <View style={Styles.someMarginText}>
                     <Text style={FontsDefault.fontDescription}>
                        Mycket bra,
                     </Text>
                  </View>
                  <View style={Styles.contentRating}>
                     <RatingScreen value="2.5" />
                  </View>
               </View>

               <View style={Styles.container}>
                  <View>
                     <Icon
                        name="time-outline"
                        style={[FontsDefault.iconSize, Styles.styleIcon]}
                     />
                  </View>
                  <View style={Styles.someMarginText}>
                     <Text style={FontsDefault.fontDescription}>
                        11:00-23:00
                     </Text>
                  </View>
                  <View style={Styles.contentRating}>
                     <TouchableOpacity onPress={handleNavigate}>
                        <View style={Styles.containerBtn}>
                           <Text
                              style={[
                                 FontsDefault.stylesTextInButton,
                                 FontsDefault.fontButton,
                              ]}
                           >
                              More Information
                           </Text>
                        </View>
                     </TouchableOpacity>
                  </View>
               </View>

               <View style={Styles.container}>
                  <View>
                     <Icon
                        name="bicycle-outline"
                        style={[FontsDefault.iconSize, Styles.styleIcon]}
                     />
                  </View>
                  <View style={Styles.someMarginText}>
                     <Text style={FontsDefault.fontDescription}>
                        Leverans om 20-30 min
                     </Text>
                  </View>
                  <View style={Styles.contentRating}>
                     <View style={Styles.containerBtn}>
                        <Text style={[FontsDefault.stylesTextInButton]}>
                           Andra
                        </Text>
                     </View>
                  </View>
               </View>

               <View style={Styles.emptyView}></View>

               <View style={Styles.container}>
                  <View>
                     <Icon
                        name="alert-circle-outline"
                        style={[FontsDefault.iconSize, Styles.styleIcon]}
                     />
                  </View>
                  <View style={Styles.someMarginText}>
                     <Text
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        See All Information
                     </Text>
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
                  <Text style={FontsDefault.fontDescription}>
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
                     <TouchableOpacity
                        onPress={() => setShowModal(true)}
                        key={item.idItem}
                     >
                        <View style={Styles.containerStarters}>
                           <View
                              style={
                                 item.imageUrl ? Styles.ContainerText : null
                              }
                           >
                              <Text
                                 style={[
                                    Styles.somePadding,
                                    FontsDefault.iconSize,
                                    FontsDefault.fontColorBlack,
                                 ]}
                              >
                                 {item.title}
                              </Text>
                              <Text style={FontsDefault.fontDescriptionLight}>
                                 {item.description}
                              </Text>
                              <Text style={FontsDefault.FontStylePrice}>
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
                     </TouchableOpacity>
                  )
               })}

               <View style={Styles.containerCategoryFood}>
                  <Text
                     style={[
                        FontsDefault.fontColorNotClick,
                        FontsDefault.fontDescriptionLight,
                        FontsDefault.fontColorBlack,
                        Styles.styleTitleFood,
                     ]}
                  >
                     Starters
                  </Text>
                  <Text style={[FontsDefault.fontDescriptionLight]}>Sushi</Text>
                  <Text style={[FontsDefault.fontDescriptionLight]}>
                     Poke Bowls
                  </Text>
                  <Text style={[FontsDefault.fontDescriptionLight]}>
                     Sashimi
                  </Text>
               </View>

               <Text style={[FontsDefault.TitleFont, Styles.titleFood]}>
                  Sushi
               </Text>
               <View style={Styles.someMargin}>
                  <Text style={FontsDefault.fontDescriptionLight}>
                     Includes miso soup
                  </Text>
                  {dummySushiData.map(item => {
                     return (
                        <TouchableOpacity
                           onPress={() => setShowModal(true)}
                           key={item.idItem}
                        >
                           <View style={Styles.containerStarters}>
                              <View
                                 style={
                                    item.imageUrl ? Styles.ContainerText : null
                                 }
                              >
                                 <Text
                                    style={[
                                       Styles.somePadding,
                                       FontsDefault.iconSize,
                                       FontsDefault.fontColorBlack,
                                    ]}
                                 >
                                    {item.title}
                                 </Text>
                                 <Text
                                    style={FontsDefault.fontDescriptionLight}
                                 >
                                    {item.description}
                                 </Text>
                                 <Text style={FontsDefault.FontStylePrice}>
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
                        </TouchableOpacity>
                     )
                  })}
               </View>
               <View>
                  <ButtonScreen
                     Titel="View Orders"
                     onPress={navigateToOrders}
                  />
               </View>
            </View>
         </ScrollView>
      </View>
   )
}
