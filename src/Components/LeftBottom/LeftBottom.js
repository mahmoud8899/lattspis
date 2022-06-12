import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScaledSheet, scale } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'
import FontsDefault from '../../Assistant/FontDefault'

export function LeftBottom(props) {
   const { onPress, Tilte, IconName ,IconStyle } = props

   return (
      <TouchableOpacity onPress={onPress} style={Tilte && Styles.container}>
         <View style={FontsDefault.ContainerIcon}>
            <Icon
               name={IconName ? IconName : "arrow-back-outline"}
               style={[
                  IconStyle ?
                  IconStyle :
                  FontsDefault.iconCenter,
                  FontsDefault.fontColorWith,
                  FontsDefault.iconSize,
               ]}
            />
         </View>

         {Tilte && (
            <Text style={[Styles.Text, FontsDefault.iconSize, Styles.exstra]}>
               {Tilte}
            </Text>
         )}
      </TouchableOpacity>
   )
}

const Styles = ScaledSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   Radius: {
      width: '40@s',
      height: '40@s',
      borderRadius: scale(50),
      backgroundColor: COLORS.firstRed,
      fontSize: '20@s',
      textAlign: 'center',
      lineHeight: '50@s',
   },
   RadiusText: {
      color: COLORS.white,
      textAlign: 'center',
      textTransform: 'capitalize',
      lineHeight: '40@s',
      fontSize: '30@s',
   },
   Text: {
      marginLeft: '20@s',
   },

   exstra: {
      fontSize: '18@s',
      color: COLORS.firstRed,
   },
})
