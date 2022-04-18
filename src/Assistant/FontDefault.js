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

   iconSize: {
      fontSize: '20@s',
   },

   ContainerIcon: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: COLORS.firstRed,
   },
   iconCenter: {
      textAlign: 'center',
      lineHeight: 40,
   },
   fontColorWith: {
      color: COLORS.white,
   },
<<<<<<< HEAD
   fontColorWith : {
      color : COLORS.white
   },
   IconsLeft : {
     fontSize : '26@s'
   },
   scrollPaddingBottom: {
      paddingBottom: '200@s',

  },

=======
>>>>>>> a5782475383ed5165ca8fa90e2703982c1fe6daa
})

export default FontsDefault
