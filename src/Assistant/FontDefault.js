import { ScaledSheet } from 'react-native-size-matters'
import COLORS from './Color'

const FontsDefault = ScaledSheet.create({

   Cover: {
      flex: 1,
      justifyContent: 'center',
   },
   Conter: {

      flex: 1,
      justifyContent: 'center',
      // alignItems : 'center',
      // width : '400@s'

   },
   containerChildren: {
      flex: 1,
      // padding: '10@s',
      backgroundColor: COLORS.white,

   },
   ContainerALLPadding: {
      padding: '20@s',
      // backgroundColor : 'red'
   },
   fontColorBlack: {
      color: COLORS.light,
   },
   fontColorWith: {
      color: COLORS.white,
   },
   fontBackgroundColoe: {
      backgroundColor: COLORS.white
   },
   fontColorNotClick: {
      color: COLORS.notClick,
   },
   FontsColorall: {
      color: COLORS.firstRed
   },
   fontcolorerror: {

      color: COLORS.error

   },
   fontBoldTitle: {
      color: COLORS.firstRed,
      fontFamily: 'Mitr-Bold',
      textTransform: 'capitalize'
   },
   FontColor: {
      color: COLORS.firstRed,
      fontFamily: 'Mitr-Regular',
   },


   fontButtonCart: {
      fontFamily: 'Mitr-Bold',
      fontSize: '16@s',
   },
   FirstContainerForModal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: '20@s',
      borderBottomRightRadius: '20@s',

   },
   iconSize: {
      fontSize: '25@s',
      fontFamily: 'Mitr-Regular',
      textTransform: 'capitalize',
   },
   TitleFont: {
      fontSize: '24@s',
      fontFamily: 'Mitr-Bold',
      color: COLORS.light,
      textTransform: 'capitalize',

   },
   fontFamilyTitle: {
      fontFamily: 'Mitr-Bold',
      textTransform: 'capitalize',
   },
   fontDescription: {
      fontSize: '14@s',
      fontFamily: 'Mitr-Regular',
      // color: COLORS.light,
      lineHeight: 20,
      textTransform: 'capitalize',
   },
   fontCategory: {
      fontSize: '16@s',
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
      borderRadius: '10@s',
      padding: '7@s',

   },
   TitlefontsSize : {
      fontSize : '17@s',
   },
   FontNameCart: {
      fontSize: '18@s',
      textTransform: 'capitalize',
      color: COLORS.light,
      fontFamily: 'Mitr-Regular',
   },
   ContainerIcon: {
      width: 45,
      height: 45,
      borderRadius: 50,
      backgroundColor: COLORS.firstRed,
   },
   iconCenter: {
      textAlign: 'center',
      lineHeight: 45,
   },
   IconsLeft: {
      fontSize: '26@s',
   },
   scrollPaddingBottom: {
      paddingBottom: '200@s',
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
   extra: {
      color: COLORS.firstRed,
      fontFamily: 'Mitr-Regular',
      fontSize: '15@s'
   },
   fontIcon: {
      fontSize: '30@s'
   },
   MarginLeftx: {
      marginLeft: 'auto'
   }


})

export default FontsDefault
