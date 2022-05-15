import { ScaledSheet } from 'react-native-size-matters'
import COLORS from './Color'

const FontsDefault = ScaledSheet.create({
   containerChildren: {
      backgroundColor: COLORS.white,
      flex: 1,
      padding: '10@s',
   },
   fontColorBlack: {
      color: COLORS.light,
   },
   fontBoldTitle: {
      color: COLORS.firstRed,
      fontFamily: 'Mitr-Bold',
   },
   FontColor: {
      color: COLORS.firstRed,
      fontFamily: 'Mitr-Regular',
   },
   fontColorWith: {
      color: COLORS.white,
   },
   fontColorNotClick: {
      color: COLORS.notClick,
   },
   fontButtonCart: {
      color: COLORS.white,
      fontFamily: 'Mitr-Bold',
      fontSize: '16@s',
   },

   iconSize: {
      fontSize: '20@s',
      fontFamily: 'Mitr-Regular',
   },
   TitleFont: {
      fontSize: '24@s',
      fontFamily: 'Mitr-Bold',
      color: COLORS.light,
   },
   fontDescription: {
      fontSize: '14@s',
      fontFamily: 'Mitr-Regular',
      color: COLORS.light,
      lineHeight: 20,
   },
   fontCategory: {
      fontSize: '14@s',
      fontFamily: 'Mitr-Regular',
   },
   fontDescriptionLight: {
      fontSize: '14@s',
      textTransform: 'capitalize',
      fontFamily: 'Mitr-Regular',
      color: COLORS.lightless,
      lineHeight: 20,
   },
   FontStylePrice: {
      fontSize: '13@s',
      fontFamily: 'Mitr-Regular',
      color: COLORS.firstRed,
   },
   stylesTextInButton: {
      backgroundColor: COLORS.notClick,
      color: COLORS.firstRed,
      borderRadius: '10@s',
      padding: '8@s',
      fontFamily: 'Mitr-Regular',
   },
   FontNameCart: {
      fontSize: '15@s',
      textTransform: 'capitalize',
      color: COLORS.light,
      fontFamily: 'Mitr-Regular',
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
   IconsLeft: {
      fontSize: '26@s',
   },
   scrollPaddingBottom: {
      paddingBottom: '200@s',
   },
   containerImage: {
      width: '100%',
      marginTop: '10@s',
   },
   containerImageChildren: {
      width: '100%',
      height: '300@s',
   },
   containerImage: {
      width: '100%',
      marginTop: '10@s',
   },

   containerImageChildren: {
      width: '100%',
      height: '300@s',
   },

   marginTopAndBottom: {
      marginTop: '5@s',
      marginBottom: '5@s',
   },
   BALCK: {
      color: COLORS.light,
   },
})

export default FontsDefault
