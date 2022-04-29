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
      flex: 5,
      borderRadius: '20@s',
      padding: '10@s',
      backgroundColor: COLOR.white,
   },
   route: {
      width: '40@s',
      height: '40@s',
      borderRadius: '50@s',
      backgroundColor: COLOR.firstRed,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      right: 0,
      marginRight: '15@s',
      marginTop: '15@s',
   },
   ICON: {
      color: COLOR.white,
      fontSize: '30@s',
   },
   textMessage: {
      marginTop: '30@s',
   },
   StyleContainer: {
      borderColor: COLOR.firstRed,
      borderWidth: '2@s',
      borderRadius: '6@s',
      height: '85@s',
      padding: '5@s',
   },
   StyleInput: {
      color: COLOR.firstRed,
      fontSize: '19@s',
      marginTop: '3@s',
      marginBottom: '0@s',
      padding: '0@s',
   },
})

export default Styles