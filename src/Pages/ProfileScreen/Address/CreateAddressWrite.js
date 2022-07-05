import React, { Fragment, useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Modal, Text, TouchableOpacity, View } from 'react-native'
import Input from '../../../Components/InputScreen/Input'
import Icon from 'react-native-vector-icons/Ionicons'
import { addresSelection } from '../../../Assistant/Selection'
import { ChoseLanguageDatilas } from '../../../Components/UseContext/ChoseLanguage'
import ProfileLang from '../../../Language/Profile'
import FontsDefault from '../../../Assistant/FontDefault'
import MapViewComponent from '../../../Components/MapView/MapView'
import Styles from '../Style'
import ShowMaps from './ShowMaps'
import COLORS from '../../../Assistant/Color'
import axios from 'axios'
const apiKey = 'AIzaSyAS-K00azKt-3LXt0yr6k8ymdlmiK6mH-4'

export default function CreateAddressWrite(props) {

   // pass set address 
   const { setPostData, postData } = props
   const { Language } = useContext(ChoseLanguageDatilas)


   // oppen maps....
   const [oppenMaps, setOppenMaps] = useState(false)



   useEffect(() => {

      if (oppenMaps) {

         postData?.location?.length === Number(0) && TakeLocation()

      }

   }, [oppenMaps])




   // console.log('ff', postData.place_id)

   async function TakeLocation() {

      try {

         console.log('test...')

         const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${postData?.place_id}&key=${apiKey}`)


         // console.log('result', )

         setPostData({
            ...postData,
            location: {
               ...location,
               coordinates:
                  [data?.result?.geometry?.location?.lat, data?.result?.geometry?.location?.lng]
            }
         })


      } catch (error) {

         return console.log('error', error.message)
      }
   }


   // options 
   // [] -- addresSelection this is witch address

   return (
      <Fragment>
         {oppenMaps ?
            postData?.location?.length === Number(0)
               ?
               <View>
                  <ActivityIndicator
                     size="large"
                     color={COLORS.firstColor}
                     style={Styles.activit}
                  />
               </View>

               :
               <ShowMaps
                  oppenMaps={oppenMaps}
                  setOppenMaps={setOppenMaps}
                  setMapsChange={setPostData}
                  mapsChange={postData}

               />

            :
            <View style={[FontsDefault.Cover, FontsDefault.fontBackgroundColoe]}>
               <View style={[FontsDefault.ContainerALLPadding,]}>

                  <View style={Styles.containerInputText}>
                     <Text
                        style={[
                           FontsDefault.fontCategory,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        {ProfileLang.addAddress[Language]}
                     </Text>
                  </View>

                  <View style={Styles.border} />

                  <Input
                     Title={ProfileLang.streetAddress[Language]}
                     value={postData?.address}

                     onChangeText={(e) => setPostData({ ...postData, address: e })}
                  />
                  <View style={Styles.border} />

                  <Input
                     Title={ProfileLang.detailHome[Language]}
                     value={postData?.door}
                     onChangeText={(e) => setPostData({ ...postData, door: e })}
                  />
                  <View style={Styles.border} />
                  <View style={[Styles.containerInputText, Styles.city]}>
                     <Icon name="location-outline" style={Styles.citychildren} />
                     <Text style={[FontsDefault.iconSize, FontsDefault.FontColor, FontsDefault.fontBoldTitle,]} >
                        {postData?.city}
                     </Text>
                  </View>

                  <View style={Styles.border} />

                  <Input
                     Title={ProfileLang.zipCode[Language]}
                     value={postData?.zipcode}
                     onChangeText={(e) => setPostData({ ...postData, zipcode: e })}
                     keyboardType='phone-pad'

                  />
                  <View style={Styles.border} />

                  <View style={Styles.containerInputText}>
                     <Text
                        style={[
                           FontsDefault.fontCategory,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        {ProfileLang.paragraphLocation[Language]}
                     </Text>
                  </View>
                  <View style={Styles.border} />
                  {!postData?.selectMaps
                     ?
                     <TouchableOpacity style={Styles.map} onPress={() => setOppenMaps(!oppenMaps)}  >
                        <Icon name="location-outline" style={Styles.mapfont} />
                        <Text style={[Styles.color, { fontSize: 16 }]}>
                           {ProfileLang.secondLocation[Language]}
                        </Text>
                     </TouchableOpacity>
                     :
                     <TouchableOpacity style={Styles.MapsTop} onPress={() => setOppenMaps(!oppenMaps)}>
                        <MapViewComponent
                           HeightUt={120}
                           mapsChange={postData}
                           ZoomMaps={12}
                           Point={45}

                        />
                     </TouchableOpacity>
                  }






                  <View style={Styles.border} />

                  <View style={Styles.containerInputText}>
                     <Text style={[FontsDefault.iconSize, FontsDefault.FontColor, FontsDefault.fontBoldTitle,]}  >
                        {ProfileLang.typeOfAddress[Language]}
                     </Text>
                  </View>

                  <View style={Styles.containerInputText}>
                     <Text
                        style={[
                           FontsDefault.fontCategory,
                           FontsDefault.fontColorBlack,
                        ]}
                     >
                        {ProfileLang.taggingAddress[Language]}
                     </Text>
                  </View>
                  <View style={Styles.border} />

                  <View style={Styles.work}>
                     {addresSelection?.map((select, Index) => (
                        <TouchableOpacity key={Index}
                           onPress={() => setPostData({ ...postData, work: select?.name })

                           }
                           style={select?.name === postData?.work ?
                              [Styles.boxwork, Styles.active]
                              : [Styles.boxwork]
                           }

                        >
                           <Text
                              style={select?.name === postData?.work ?
                                 [FontsDefault.iconSize, FontsDefault.fontColorWith]
                                 :
                                 [FontsDefault.iconSize, FontsDefault.FontColor]
                              }
                           >
                              {select.name}
                           </Text>
                           <Icon name={select.image} style={
                              select?.name === postData?.work ?
                                 [Styles.iconswork, { color: 'white' }]
                                 :

                                 Styles.iconswork
                           } />
                        </TouchableOpacity>
                     ))}
                  </View>





               </View>



            </View>
         }



      </Fragment>
   )
}
