import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontDefault'

export default function ButtonScreen(props) {
   // params
   const {
      styleTouch,
      StyleTitel,
      ViewOrder,
      onPress,
      Titel,
      NameIcon,
      StyleIcon,
      disabled,
      loading
   } = props

   return (
      <TouchableOpacity
         style={
            styleTouch
               ? styleTouch
               : !NameIcon
                  ? disabled ? [Styles.buttondisabled, Styles.center] : [Styles.TouchaBle, Styles.center]
                  : Styles.TouchaBle
         }
         onPress={onPress}
         disabled={disabled}
      >
         {loading ?
            <ActivityIndicator size="large" color={COLOR.firstRed} />

            :
            ViewOrder ?
               ViewOrder :
               <>
                  {NameIcon && (
                     <Icon name={NameIcon} style={StyleIcon ? StyleIcon : Styles.Icon} />
                  )}

                  <Text
                     style={
                        StyleTitel
                           ? StyleTitel
                           : !NameIcon
                              ? Styles.fontCenter
                              : Styles.fontTitle
                     }
                  >
                     {Titel}
                  </Text>
               </>


         }

      </TouchableOpacity>
   )
}

const Styles = ScaledSheet.create({
   TouchaBle: {
      flexDirection: 'row',
      height: '65@s',
      borderRadius: '5@s',
      backgroundColor: COLOR.firstRed,
      alignItems: 'center',
   },
   center: {
      justifyContent: 'center',
   },
   Icon: {
      marginLeft: '10@s',
      fontSize: '30@s',
      color: COLOR.white,
   },
   fontTitle: {
      marginLeft: '20@s',
      fontSize: '18@s',
      color: COLOR.white,
      fontFamily: 'Mitr-Bold',
   },

   fontCenter: {
      fontSize: '18@s',
      color: COLOR.white,
      fontFamily: 'Mitr-Bold',
   },
   buttondisabled: {
      flexDirection: 'row',
      height: '65@s',
      borderRadius: '5@s',
      backgroundColor: COLOR.notClick,
      alignItems: 'center'
   },
   center: {
      justifyContent: 'center'
   },
})
