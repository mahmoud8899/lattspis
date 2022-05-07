import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   FirstContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   containerTop: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   containerTextHeader: {
      alignItems: 'center',
   },
   headerText: {
      fontSize: '18@s',
   },
   containerMap: {
      width: '100%',
      height: '200@s',
   },
   styleMap: {
      width: '100%',
      height: '100%',
   },
   fontIcon: {
      fontSize: '30@s',
      marginRight: '20@s',
      color: COLORS.firstRed,
   },
   mainContent: {
      marginTop: '20@s',
      flexDirection: 'row',
      alignItems: 'center',
   },
   mainContainer: {
      marginTop: '20@s',
   },
   containerPrice: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '20@s',
   },
   containerBottomButton: {
      paddingBottom: '10@s',
      paddingTop: '10@s',
      backgroundColor: 'white',
   },
})

export default Styles
