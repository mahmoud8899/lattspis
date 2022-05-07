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
      flex: 1,
      backgroundColor: COLOR.white,
   },
   ICON: {
      color: COLOR.white,
      fontSize: '30@s',
   },
   containerTip: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      paddingBottom: '10@s',
      borderBottomColor: '#ccc',
   },
   mainContainerTipPrice: {
      marginTop: '10@s',
   },
   contentTip: {
      width: '80%',
      alignItems: 'center',
   },
   containerTipPrice: {
      marginTop: '10@s',
   },
   textTipPrice: {
      paddingBottom: '10@s',
      paddingTop: '8@s',
      borderBottomWidth: 1,
      paddingBottom: '15@s',
      borderBottomColor: '#ccc',
   },
   otherSum: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   iconToOtherSum: {
      fontSize: 24,
   },
})

export default Styles
