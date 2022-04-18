import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   searchSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f1f1f1',
      borderRadius: '8@s',
      marginTop: '10@s',
   },
   searchIcon: {
      padding: '10@s',
   },
   input: {
      flex: 1,
      paddingTop: '10@s',
      paddingRight: '10@s',
      paddingBottom: '10@s',
      paddingLeft: 0,
      color: '#424242',
   },
})

export default Styles
