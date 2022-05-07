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
      borderRadius: '20@s',
      padding: '10@s',
      height: '250@s',
      backgroundColor: COLOR.white,
   },
   ICON: {
      color: COLOR.white,
      fontSize: '30@s',
   },
   containerOrderDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      paddingBottom: '10@s',
      borderBottomColor: '#ccc',
   },
   containerPromoCode: {
      marginTop: 20,
      marginBottom: 20,
   },
})

export default Styles
