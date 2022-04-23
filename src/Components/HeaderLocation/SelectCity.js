import { Modal, View, Text, TouchableOpacity } from 'react-native'
import FontsDefault from '../../Assistant/FontDefault'
import Styles from './Styles'
import React from 'react'
import { Stand } from '../../Assistant/ProductName'
// select city ....
export default function SelectCity(props) {
   const { showCity, setShowCity } = props

   return (
      <View style={Styles.city}>
         <View>
            <Text
               style={[
                  FontsDefault.TitleFont,
                  Styles.margintop,
                  FontsDefault.BALCK,
               ]}
            >
               Sweden
            </Text>
         </View>

         <View style={Styles.margintop}>
            {Stand?.map((item, Index) => (
               <TouchableOpacity key={Index} style={Styles.stad}>
                  <Text style={FontsDefault.FontNameCart}>{item?.address}</Text>
                  <View style={Styles.Top} />
               </TouchableOpacity>
            ))}
         </View>
      </View>
   )
}
