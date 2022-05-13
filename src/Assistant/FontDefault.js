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
   FontColor: {
      color: COLORS.firstRed,
   },
   fontColorWith: {
      color: COLORS.white,
   },
   fontColorNotClick: {
      color: COLORS.notClick,
   },
   iconSize: {
      fontSize: '20@s',
      fontFamily: 'RobotoMono-Medium',
   },
   TitleFont: {
      fontSize: '24@s',
      fontFamily: 'RobotoMono-SemiBold',
      color: COLORS.light,
   },
   fontDescription: {
      fontSize: '14@s',
      textTransform: 'capitalize',
      fontFamily: 'RobotoMono-Medium',
      color: COLORS.light,
   },
   fontCategory: {
      fontSize: '14@s',
      textTransform: 'capitalize',
      fontFamily: 'RobotoMono-Medium',
   },
   fontDescriptionLight: {
      fontSize: '14@s',
      textTransform: 'capitalize',
      fontFamily: 'RobotoMono-Regular',
   },
   FontStylePrice: {
      fontSize: '13@s',
      fontFamily: 'RobotoMono-SemiBold',
      color: COLORS.firstRed,
   },
   fontButton: {
      fontFamily: 'RobotoMono-SemiBold',
   },
   stylesTextInButton: {
      backgroundColor: COLORS.notClick,
      color: COLORS.firstRed,
      borderRadius: '10@s',
      padding: '8@s',
   },
   FontNameCart: {
      fontSize: '15@s',
      textTransform: 'capitalize',
      color: COLORS.light,
      fontWeight: 'bold',
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
