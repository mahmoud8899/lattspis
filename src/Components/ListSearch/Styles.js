import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   textContainer: {
      backgroundColor: COLOR.firstRed,
      height: '40@s',
      margin: '5@s',
      alignItems: 'center',
      textAlign: 'center',
      padding: '10@s',
      borderRadius: '10@s',
      fontWeight: 'bold',
   },
   containerList: {
      marginTop: 30,
      alignItems: 'center',
   },
})

export default Styles
