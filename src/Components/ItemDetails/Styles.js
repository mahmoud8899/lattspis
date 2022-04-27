import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   FirstContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1211110d',
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

   containerAddOrder: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },

   plusMinus: {
      padding: '10@s',
      fontSize: '20@s',
   },

   widthAddMinus: {
      width: '40%',
      backgroundColor: '#f1f1f1',
   },
   widthAddToCart: {
      width: '55%',
      backgroundColor: COLOR.firstRed,
   },
   contentBtn: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 5,
   },
})

export default Styles
