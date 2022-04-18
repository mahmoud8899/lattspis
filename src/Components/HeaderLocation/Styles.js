import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   containerLocation: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   textCity: {
      marginLeft: '10@s',
   },
   IconsLeft: {
      width: '40@s',
      height: '40@s',
      borderRadius: '50@s',
      backgroundColor: COLOR.firstRed,
   },

   icon: {
      textAlign: 'center',
      color: COLOR.white,
      lineHeight: '40@s',
      fontSize: '25@s',
   },
})

export default Styles
