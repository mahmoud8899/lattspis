import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   LastContainer: {
      flex: 1,
      borderRadius: '20@s',
      padding: '10@s',
      backgroundColor: COLOR.white,
   },
   route: {
      width: '60@s',
      alignItems: 'center',
      marginLeft: 'auto',
      right: 0,
      marginTop: '15@s',
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
