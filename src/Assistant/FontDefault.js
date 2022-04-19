import { ScaledSheet } from 'react-native-size-matters'
import COLORS from './Color'

const FontsDefault = ScaledSheet.create({
   containerChildren : {
      backgroundColor: COLORS.white,
      flex: 1,
      padding: '10@s'
   },
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

   fontColorWith : {
      color : COLORS.white
   },
   IconsLeft : {
     fontSize : '26@s'
   },
   scrollPaddingBottom: {
      paddingBottom: '200@s',
      // position: 'relative',
      // flex : 1,
      backgroundColor : '#eee'

  },

  containerImage: {
   width: '100%',
   marginTop: '10@s'
},
containerImageChildren: {
   width: '100%',
   height: '300@s'
},




})

export default FontsDefault
