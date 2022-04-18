import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   containerChildren: {
      backgroundColor: COLOR.white,
      flex: 1,
      padding: '10@s',
   },
   containerLocation: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   containerHeaderLocation: {
      flexDirection: 'row',
   },
   containerRightIcons: {
      flexDirection: 'row',
      width: '25%',
      justifyContent: 'space-between',
   },
   textLocation: {
      marginLeft: 10,
      fontSize: 15,
      color: COLOR.firstRed,
   },
   iconDown: {
      marginLeft: 10,
      fontSize: 18,
      color: COLOR.firstRed,
   },
   containerIconsRight: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 90,
      justifyContent: 'space-between',
   },
})

export default Styles
