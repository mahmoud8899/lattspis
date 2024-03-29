import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   margintop: {
      marginBottom: '60@s',
   },
   stad: {
      marginBottom: '10@s',
      justifyContent: 'center',
      height: '50@s',
   },
   LastContainer: {
      flex: 1,
      borderRadius: '20@s',
      padding: '10@s',
      backgroundColor: COLOR.white,
   },
   route: {
      borderRadius: '20@s',
   },
   LastContainer: {
      flex: 3,
      borderRadius: '20@s',
      padding: '10@s',
      backgroundColor: COLOR.white,
   },
   route: {
      width: '40@s',
      height: '40@s',
      borderRadius: 50,
      backgroundColor: COLOR.firstRed,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
   },
   left: {
      marginLeft: '0@s',
   },
   ICON: {
      color: COLOR.white,
      fontSize: '30@s',
      marginLeft: 'auto',
   },
   left: {
      marginLeft: '0@s',
   },
   ICON: {
      color: COLOR.white,
      fontSize: '30@s',
   },
   containerLocation: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '50%',
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
   flexLocation: {
      // backgroundColor : '#eee',
      flexDirection : 'row',
      alignItems : 'center',
      height : '80@s'
     
   },
   flexLocationText: {
      marginLeft: '10@s',
   },
   // MARGINB: {
   //    marginBottom: '3@s',
   //    marginTop: '20@s',
   // },

   Top: {
      width: '100%',
      height: '1@s',
      backgroundColor: COLOR.firstRed,
   },
   notColor: {
      backgroundColor: COLOR.white,
   },

   BALCK: {
      color: COLOR.light,
      fontSize: '30@s',
   },
})

export default Styles
