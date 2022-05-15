import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   LastContainer: {
      flex: 3,
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
      position: 'absolute',
      right: 0,
      marginRight: '15@s',
      marginTop: '15@s',
   },
   ICON: {
      color: COLOR.white,
      fontSize: '30@s',
   },
   styleImage: {
      width: '100%',
      height: '300@s',
      borderTopRightRadius: '25@s',
      borderTopLeftRadius: '25@s',
   },
   containerPrice: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '20@s',
   },
   sizePrice: {
      fontSize: '20@s',
   },
   contentParagraph: {
      marginBottom: '10@s',
      marginTop: '10@s',
   },
   colorIcon: {
      color: COLOR.lightless,
   },
   containerAddOrder: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },

   plusMinus: {
      fontSize: '20@s',
      color: COLOR.firstRed,
   },
   numOfOrder: {
      fontSize: '16@s',
      color: COLOR.firstRed,
   },
   backgroundColorToPlusMinus: {
      borderRadius: '50@s',
      backgroundColor: COLOR.white,
      padding: '5@s',
   },

   widthAddMinus: {
      width: '40%',
      backgroundColor: COLOR.notClick,
   },
   widthAddToCart: {
      width: '55%',
      backgroundColor: COLOR.firstRed,
   },
   contentBtn: {
      height: '50@s',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: '5@s',
   },
})

export default Styles
