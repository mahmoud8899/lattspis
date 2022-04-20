import React, { Fragment, useState } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
// import LocationModal from './LocationModal'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from './Styles'
import LocationModal from './LocationModal'
export default function HeaderLocation(props) {
   // notImageMas is hidden icon
   const { notImageMas } = props


   // oppen add location and add address
   const [closeShow, setCloseShow] = useState(false)






   return <Fragment>


      {closeShow &&
         <LocationModal
            closeShow={closeShow}
            setCloseShow={setCloseShow}
         />
      }

      <TouchableOpacity style={Styles.containerLocation} onPress={() => setCloseShow(!closeShow)} >
         {notImageMas ? null : (
            <View style={FontsDefault.ContainerIcon}>
               <Icon name="location-outline" style={
                  [FontsDefault.iconCenter,
                  FontsDefault.fontColorWith,
                  FontsDefault.iconSize
                  ]
               } />

            </View>
         )}

         <Text
            style={[
               Styles.textCity,
               FontsDefault.FontNameCart,
               FontsDefault.FontColor,
            ]}
         >
            uppsala
         </Text>
         <Icon
            name="chevron-down-outline"
            style={[
               FontsDefault.iconSize,
               Styles.textCity,
               FontsDefault.FontColor,
            ]}
         />
      </TouchableOpacity>





   </Fragment>

}


