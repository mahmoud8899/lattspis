import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   containerChildren: {
      backgroundColor: COLOR.white,
      flex: 1,
      padding: '10@s',
   },
   containerRightIcons: {
      flexDirection: 'row',
      width: '25%',
      justifyContent: 'space-between',
   },
   contentLocation: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '10@s',
   },
})

export default Styles
