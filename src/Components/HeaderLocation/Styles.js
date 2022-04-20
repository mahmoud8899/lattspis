import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   FirstContainer: {
      
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : '#1211110d',
      borderRadius : '20@s'

   },
   LastContainer: {

   flex : 1,
    borderRadius : '20@s',
    padding : '10@s',
    backgroundColor : COLOR.white


   },
   route: {

      width : '40@s',
      height : '40@s',
      borderRadius : 50,
      backgroundColor : COLOR.firstRed,
      justifyContent : 'center',
      alignItems : 'center',
      marginLeft : 'auto'

   },
   left : {
      marginLeft : '0@s',

   },
   ICON:{
      color : COLOR.white,
      fontSize : '30@s'

   },
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
   flexLocation: {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'flex-start',
      marginTop  : '20@s'
   },
   flexLocationText: {
      marginLeft : '10@s'
   },
   MARGINB:{
      marginBottom : '3@s'
   },
   Top: {
      width : '100%',
      height : '1@s',
      backgroundColor : COLOR.firstRed,
      marginTop : '20@s'
   },
   notColor:{
      backgroundColor : COLOR.white,
   },
   BALCK:{
      color : COLOR.light,
      fontSize : '30@s'
   }

})

export default Styles
