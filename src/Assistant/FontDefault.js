import { ScaledSheet } from 'react-native-size-matters'
import COLORS from './Color'

const FontsDefault = ScaledSheet.create({
   TitleFont: {
      textTransform: 'capitalize',
      fontSize: '24@s',
      fontWeight: 'bold',
   },
   FontNameCart: {
      fontSize: '15@s',
      textTransform: 'capitalize',
      color: COLORS.light,
      fontWeight: 'bold',
   },
   fontDescription: {
      fontSize: '14@s',
      textTransform: 'capitalize',
      color: COLORS.lightless,
   },

   FontColor: {
      color: COLORS.firstRed,
   },

   iconsize :{
      fontSize : '20@s'
   }
})

export default FontsDefault
