import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const imageWidth = width / 3

const imageHeight = imageWidth * 2

const Styles = ScaledSheet.create({
   containerLocation: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   textCity: {
      marginLeft: '15@s',
      fontSize: '16@s',
      color: COLOR.firstRed,
   },
   IconsLeft: {
      width: '40@s',
      height: '40@s',
      borderRadius: '50@s',
      backgroundColor: COLOR.firstRed,
      color: '#eee',
      fontSize: '30@s',
      lineHeight: '40@s',
      textAlign: 'center',
   },
   iconDown: {
      marginLeft: '8@s',
      fontSize: '20@s',
      color: COLOR.firstRed,
   },
})

export default Styles
