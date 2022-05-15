import React from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'
import FontsDefault from '../../Assistant/FontDefault'

export default function HeaderScreen(props) {
   const { Title } = props

   return (
      <View style={Styles.MarginTop}>
         <Text
            style={[
               FontsDefault.TitleFont,
               FontsDefault.FontColor,
               FontsDefault.fontBoldTitle,
            ]}
         >
            {Title}
         </Text>
      </View>
   )
}

const Styles = ScaledSheet.create({
   MarginTop: {
      marginTop: '20@s',
      marginBottom: '20@s',
   },
})
