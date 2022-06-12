import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Styles from '../Style'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../../Assistant/FontDefault'

export default function ShowAddresses(props) {
   return ( <View style={Styles.address}>
            <View>
               <Icon
                  name="home-outline"
                  style={[FontsDefault.IconsLeft, FontsDefault.FontColor]}
               />
            </View>
            <View style={Styles.addressText}>
               <Text style={[FontsDefault.iconSize, Styles.exstra]}>
                  Uppsala
               </Text>
               <Text style={FontsDefault.fontDescription}>lager homw 203d</Text>
            </View>

            <View style={Styles.removeScreen}>
               <Icon
                  name="ellipsis-horizontal-outline"
                  style={Styles.iconremove}
               />
            </View>
         </View>


     
   )
}
