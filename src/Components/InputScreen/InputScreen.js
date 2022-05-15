import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'
import FontsDefault from '../../Assistant/FontDefault'

export default function InputScreen(props) {
   const { Title, placeholder, IconName, StyleContainer, StyleInput } = props

   return (
      <View style={StyleContainer ? StyleContainer : Styles.InputContainer}>
         {IconName ? (
            IconName
         ) : (
            <Text style={[FontsDefault.fontCategory, Styles.fontLite]}>
               {Title}
            </Text>
         )}
         <TextInput
            style={StyleInput ? StyleInput : Styles.Input}
            placeholder={placeholder}
            placeholderTextColor={COLORS.lightless}
            placeholderStyle={{ fontFamily: 'Mitr-Bold' }}
         />
      </View>
   )
}

const Styles = ScaledSheet.create({
   InputContainer: {
      borderColor: COLORS.firstRed,
      borderWidth: '2@s',
      borderRadius: '6@s',
      height: '65@s',
      padding: '5@s',
   },
   Input: {
      color: COLORS.firstRed,
      fontSize: '19@s',
      marginTop: '3@s',
      marginBottom: '0@s',
      padding: '0@s',
   },
   fontLite: {
      color: COLORS.light,
   },
})
